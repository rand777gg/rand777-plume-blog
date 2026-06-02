---
url: /learn/y5fr0111/index.md
---
当然，随着人工智能技术的发展，Commit Message 已经可以自动生成了，但我们还是得知道基本的格式和背后的道理。

## Git 提交规范

业内普遍采用 Conventional Commits「约定式提交」规范，[中文站点](https://www.conventionalcommits.org/zh-hans/v1.0.0/)。

很简单，它长这样：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

* `<type>`: 此次提交的「类型」，**BREAKING CHANGE**「破坏性更新」 应该在其后加一个 `!`，包括：
  * feat: 表示在代码库中修复了一个 bug
  * fix: 表示在代码库中新增了一个功能
  * build: 用于修改项目构建系统，例如修改依赖库、外部接口或者升级 Node 版本等；
  * chore: 用于对非业务性代码进行修改，例如修改构建流程或者工具配置等；
  * ci: 用于修改持续集成流程，例如修改 Travis、Jenkins 等工作流配置；
  * docs: 用于修改文档，例如修改 README 文件、API 文档等；
  * style: 用于修改代码的样式，例如调整缩进、空格、空行等；
  * refactor: 用于重构代码，例如修改代码结构、变量名、函数名等但不修改功能逻辑；
  * perf: 用于优化性能，例如提升代码的性能、减少内存占用等；
  * test: 用于修改测试用例，例如添加、删除、修改代码的测试用例等。
* `[optional scope]`: 可选，本次更改代码涉及的范围，如视图层 view
* `<description>`: 描述更改
* `[optional body]`: 正文，可选，进一步阐述更改的细节，如 ` 修复 #666`
* `[optional footer(s)]`: 脚注，可选，可以写上协作者的细节 `Signed-off-by: someone<someone@github.com>`; `BREAKING CHANGE: ...`

## 示例

### 包含了描述并且脚注中有破坏性变更的提交说明

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### 包含了 ! 字符以提醒注意破坏性变更的提交说明

```gitignore
feat!: send an email to the customer when a product is shipped

```

### 包含了范围和破坏性变更 ! 的提交说明

```
feat(api)!: send an email to the customer when a product is shipped
```

### 包含了 ! 和 BREAKING CHANGE 脚注的提交说明

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

### 不包含正文的提交说明

```
docs: correct spelling of CHANGELOG
```

### 包含范围的提交说明

```
feat(lang): add polish language
```

### 包含多行正文和多行脚注的提交说明

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```

## 注意事项

勾选项容易搞混或遗忘，警钟长鸣。

1. \[ ] 每个提交都必须使用类型字段前缀，它由一个名词构成，诸如 feat 或 fix ， 其后接可选的范围字段，可选的 !，以及必要的冒号（英文半角）和空格。
2. \[ ] 当一个提交为应用或类库实现了新功能时，必须使用 feat 类型。
3. \[ ] 当一个提交为应用修复了 bug 时，必须使用 fix 类型。
4. \[ ] 范围字段可以跟随在类型字段后面。范围必须是一个描述某部分代码的名词，并用圆括号包围，例如： fix(parser):
5. \[ ] 描述字段必须直接跟在 `<类型>(范围)` 前缀的冒号和空格之后。 描述指的是对代码变更的简短总结，例如： fix: array parsing issue when multiple spaces were contained in string 。
6. \[ ] 在简短描述之后，可以编写较长的提交正文，为代码变更提供额外的上下文信息。正文必须起始于描述字段结束的一个空行后。
7. \[x] 提交的正文内容自由编写，并可以使用空行分隔不同段落。
8. \[x] 在正文结束的一个空行之后，可以编写一行或多行脚注。每行脚注都必须包含一个令牌（token），后面紧跟 `:<space>` 或 `<space>#` 作为分隔符，后面再紧跟令牌的值（受 git trailer convention 启发）。
9. \[x] 脚注的令牌必须使用 - 作为连字符，比如 Acked-by (这样有助于 区分脚注和多行正文)。有一种例外情况就是 BREAKING CHANGE，它可以被认为是一个令牌。
10. \[x] 脚注的值可以包含空格和换行，值的解析过程必须直到下一个脚注的令牌/分隔符出现为止。
11. \[x] 破坏性变更必须在提交信息中标记出来，要么在`<类型>(范围)` 前缀中标记，要么作为脚注的一项。
12. \[x] 包含在脚注中时，破坏性变更必须包含大写的文本 BREAKING CHANGE，后面紧跟着冒号、空格，然后是描述，例如： BREAKING CHANGE: environment variables now take precedence over config files 。
13. \[x] 包含在 `<类型>(范围)` 前缀时，破坏性变更必须通过把 ! 直接放在 : 前面标记出来。 如果使用了 !，那么脚注中可以不写 BREAKING CHANGE:， 同时提交信息的描述中应该用来描述破坏性变更。
14. \[x] 在提交说明中，可以使用 feat 和 fix 之外的类型，比如：docs: updated ref docs. 。
15. \[ ] 工具的实现必须不区分大小写地解析构成约定式提交的信息单元，只有 BREAKING CHANGE 必须是大写的。
16. \[x] BREAKING-CHANGE 作为脚注的令牌时必须是 BREAKING CHANGE 的同义词。
