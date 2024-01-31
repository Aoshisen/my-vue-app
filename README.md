<!-- # Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette. -->

## 文件目录的相关作用

- src/components 文件夹 放置所有的公共组件 如果是一些强逻辑的组件,放到对应的页面组件或者是功能组件所在的位置比较好
- src/store 全局的状态管理
- src/assets 文件夹放置所有的静态资源 图片 全局帮助样式等
- src/models 定义基本的数据类型 不涉及逻辑
- src/services 请求放置的文件夹 包括全局的请求拦截器,以及具体的 请求实现
- src/helpers 常包含与特定领域或业务逻辑相关的帮助方法。这些方法可能是相对专业化的，提供了针对特定任务或领域的支持功能。例如，日期处理、表单验证、数据转换等 (和项目关联强,放到其他项目就不能用了)
- src/utils 放置一些通常包含更为通用的实用函数或工具函数。这些方法通常是在整个应用程序中可重复使用的通用功能，并且不依赖于特定的业务逻辑或领域。例如，字符串处理、数组操作、数学计算等通用功能可以放在 utils 文件夹中(与项目关联度不大,放到其他项目照常使用的函数)
- src/mock 前端模拟数据
- src/libs 这个文件夹用来放置一些不太好划分职责的函数或者组件或者其他工具函数或者组件, 像是一个杂物间
- src/pages（或 src/views）：用于存放页面级组件，通常是与路由直接相关的组件。
- src/router：如果项目使用前端路由，该目录用于存放路由配置及相关代码。
- src/constants：用于存放一些常量、枚举值或者配置信息。
