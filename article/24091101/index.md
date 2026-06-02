---
url: /article/24091101/index.md
---
[Corepack](https://nodejs.cn/api/Corepack.html) 是一个 NodeJS 自带的包管理器的管理工具，主要是用来管理诸多的包管理器的。当在多人开发环境中，不同开发者用的包管理器不同、版本不同，这时候就可以用到 `Corepack` 了，正如官网所言，充当「桥梁」的作用。

从 14.19.0 到 25.0.0， Corepack 已经随 Node 一起安装，就如同 npm 一样，但如何使用 Corepack 安装 pnpm，并在之后可以更换包管理器呢？

```shell title="pnpm.sh"
Corepack enable
Corepack install --global pnpm@latest
```

在 `package.json` 中添加 `"packageManager": "pnpm@8.6.6"`，删除 `node_modules` 并用 `pnpm`
重新安装依赖。之后如需换为 `npm` 则删除 `node_modules` ，`pnpm-lock.yml` ，`packageManager 字段 `，然后重新用
`npm` 安装依赖即可。

## 手动安装

先卸载掉全局的 Yarn 和 pnpm 二进制文件，如果是单独安装的 Yarn 可能需要手动卸载。

```shell title="uninstall.sh"
npm uninstall -g yarn pnpm

# That should be enough, but if you installed Yarn without going through npm it might
# be more tedious - for example, you might need to run `brew uninstall yarn` as well.
```

然后使用 npm 安装 Corepack

```shell title="install.sh"
npm install -g corepack
```

如果 Corepack 是使用 Node.js Windows Installer `.msi` 包安装在系统上的，则可能需要先将其删除，然后才能尝试使用 npm 安装不同版本的 Corepack。

## 使用 Corepack

非常简单，项目使用什么包管理运行什么命令即可。在 Yarn 项目中运行 `yarn install`，在 pnpm 项目中运行 `pnpm install`，在 npm 项目中运行 `npm`，Corepack 将捕获这些调用。
