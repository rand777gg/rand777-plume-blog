---
url: /article/20260610/index.md
---
## 问题现象

[刷题网](https://github.com/rand777gg/practice-web)的练习模式下，点击进入后会出现一道题，然后**马上闪烁成另一道题**。用户看到的是：

> 题目 A 出现 → 瞬间变成题目 B

不是 loading 状态闪了一下，而是两道不同的题在极短时间内先后渲染。

![jingtai.png](../../.vuepress/public/blog-covers/jingtai.png)

## 排查过程

### Step 1：定位可疑组件

问题出在 `PracticeSession.tsx`。这个组件挂载后会调用 `fetchRandomQuestion` 随机抽一道题。

```tsx title="PracticeSession.tsx"
const fetchRandomQuestion = useCallback(async () => {
  setIsLoading(true)
  // ...
  const { data: ids } = await supabase.from('questions').select('id')
  const pickedId = ids[Math.floor(Math.random() * ids.length)].id
  // ...
  setQuestion(data)
  setIsLoading(false)
}, [selectedSubject, selectedCategory, selectedType, profile?.daily_targets, profile?.plan_subjects])

useEffect(() => {
  fetchRandomQuestion()
}, [fetchRandomQuestion])
```

核心模式很常见：`useCallback` 包装 async 函数 → 作为 `useEffect` 的依赖。依赖变化时自动重新请求。

问题在于 `Math.floor(Math.random() * ids.length)` —— **每次调用会随机选不同的 ID**。如果这个函数被调用了两次，且第二次在第一次渲染完成后才 resolve，就会造成"闪烁"。

### Step 2：找谁触发了两次调用

第一反应是 React 18 的 StrictMode。在开发模式下，StrictMode 会 mount → unmount → remount 组件，effect 执行两次。两次 `fetchRandomQuestion` 并发执行，各自随机选了不同的题。

但用户反馈的是**生产环境**。生产环境下 StrictMode 不会 double-invoke effect。所以还有别的原因。

### Step 3：追踪 profile 引用变化

仔细看依赖数组：

```tsx
[selectedSubject, selectedCategory, selectedType, profile?.daily_targets, profile?.plan_subjects]
```

`profile` 来自 Zustand store。Auth 初始化时，如果用户没有昵称，会自动分配一个：

```tsx title="App.tsx"
if (profile && !profile.nickname) {
  const nickname = `刷题网用户${Math.random().toString(36).slice(2, 10)}`
  supabase.from('profiles').update({ nickname }).eq('id', userId).then(() => {
    setProfile({ ...profile, nickname })  // 异步回调，新的对象引用
  })
}
```

这个 `.then()` 回调在组件挂载**之后**才执行。虽然 `daily_targets` 的值没变，但 `profile` 对象引用变了。在某些时序下，这会导致 `fetchRandomQuestion` 被重新创建，effect 再次触发。

### Step 4：确认根因

综合来看，有两层原因：

1. **StrictMode（开发环境）**：effect 被 double-invoke，两次 fetch 并发执行
2. **profile 引用变化（生产环境边缘情况）**：异步昵称设置导致 profile 对象引用改变，触发第二轮 fetch

但归根结底，**真正的问题是 `fetchRandomQuestion` 没有取消上一次请求的机制**。无论触发源是什么，只要函数被多次调用，就应该只有最后一次调用的结果生效。

## 修复方案：代数计数器

思路很简单——用一个 ref 记录当前是第几代调用，每次 `await` 返回后检查一下有没有更新的调用进来：

```tsx title="PracticeSession.tsx"
const fetchGenRef = useRef(0)

const fetchRandomQuestion = useCallback(async () => {
  fetchGenRef.current++
  const myGen = fetchGenRef.current  // 记录"我是第几代"

  setIsLoading(true)
  // ...

  const { data: ids } = await idQuery
  if (fetchGenRef.current !== myGen) return  // 有更新的调用了，我退场

  // ... 每次 await 后都检查一次 ...

  const [qRes, statsRes] = await Promise.all([...])
  if (fetchGenRef.current !== myGen) return

  setQuestion(qRes.data)
  setIsLoading(false)
}, [...])
```

:::tip
这个模式本质上是一个**轻量级的 AbortController**，但不需要修改 Supabase 调用（Supabase 本身不支持 AbortSignal 传入）。比 `AbortController` 更简单，只是静默丢弃过期结果。
:::

## 全仓库排查

修完这个后，我用同样的模式扫了一遍整个仓库，发现了另外 **6 个高严重度**的同类型问题：

| 文件 | 问题描述 |
|------|----------|
| `use-favorites.ts` | `fetchFavorites` 无竞态防护，user 变化时可能展示过期的收藏列表 |
| `WrongReviewPage.tsx` | 切换筛选模式（全部/练习/考试）时，旧请求可能覆盖新数据 |
| `PublicNotesPage.tsx` | 切换学科下拉时请求竞态，可能显示不匹配的笔记。还有 `selectedSubject` 闭包过期问题 |
| `ExamSession.tsx` | 分类加载和考试恢复检查两个 effect 都没有 cleanup |
| `DashboardPage.tsx` | 200 行的 `load()` 函数无任何竞态防护，且闭包内读取的 `profile` 值可能过期 |

修复策略统一用代数计数器，模式完全一致。DashboardPage 那个最复杂，里面还有个 fire-and-forget 的 IndexedDB 预取 IIFE，也需要代数检查防止并发写入交织。

## 总结

这类 bug 的共性特征：

1. **async 函数在 useEffect 中被调用**，且没有返回清理函数
2. **函数内部修改 state**，多次调用的 setState 会互相覆盖
3. **依赖了对象属性**（如 `profile?.daily_targets`），对象引用变化可能在意料之外的时机触发
4. **随机性操作**（如 `Math.random()`）让问题更加明显——如果不是随机选题，两次调用设置了同样的结果，用户就不会注意到

修复的核心思路一句话：**每次 async 调用带一个代数标记，await 之后检查自己是不是最新的，不是就退场。**

目前所有修复已经提交到 [practice-web](https://github.com/rand777gg/practice-web) 的 v1.9.0 版本。
