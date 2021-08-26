## quick-start

- 通过脚手架 vite 创建项目
  ```sh
  npm init vite hello-vue3 -- --template vue # 或 yarn create vite hello-vue3 --template vue
  ```
- 通过 vue-cli 创建项目
  ```sh
  npm install -g @vue/cli # 或 yarn global add @vue/cli
  vue create hello-vue3
  # 选择 vue 3 preset
  ```

## install dependency

```sh
yarn add vue-router vuex element-plus axios dayjs js-cookie nprogress
```

### 引入 eslint

```sh
yarn add -D eslint eslint-plugin-import eslint-config-airbnb-base eslint-plugin-vue prettier eslint-plugin-prettier eslint-config-prettier babel-eslint
```

- `eslint-config-airbnb-base`, 集成 airbnb 的 lint 规则， 依赖 `eslint-plugin-import`
- `eslint-plugin-vue`, vue 官方推荐 的 lint 规则
- `eslint-plugin-prettier`, prettier 推荐的 lint 规则, 依赖 `prettier`
- `eslint-config-prettier`, 关闭 prettier 中一些无用或冲突的规则
- `babel-eslint`, 提供 eslint parser

配置 vscode 使得保存时 eslint 即生效

- 安装 [eslint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- 将以下配置写入 `.vscode/settings.json`中
  ```json
  {
    "eslint.validate": ["vue", "javascript"],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "html.format.wrapAttributes": "force-aligned",
    "editor.formatOnPaste": true,
    "editor.formatOnType": true,
    "editor.formatOnSave": false,
    "files.eol": "\n"
  }
  ```
- 配置 npm scripts
  ```json
    "lint": "eslint --ext .js,.vue src",
    "fix": "eslint --ext .js,.vue src --fix"
  ```

### 集成 git commit hooks

```sh
yarn add -D lint-staged husky@4.3.8
```

- husky 最新版本有点问题，故使用 v4.3.8
- 在 `package.json`追加以下内容, 使得 git 提交前运行 lint
  ```json
  "lint-staged": {
    "src/**/*.{js,vue}": [
      "prettier --write .",
      "eslint --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
  ```
