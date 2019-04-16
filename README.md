react 全家桶和express+ mongoDB初探
安装
首先下载安装所有依赖
### `yarn ` 或者 `npm install`
### `npm install redux --save`

下面的是介绍一下命令安装
安装 redux

### `npm install redux-thunk --S`
安装 redux 中间件用于异步调用

### 使用Antd-moible Ui框架`npm install Antd-mobile --save`
安装Ant Design Mobile of React
### 按需加载安装 `npm install babel-plugin-import --save-dev`
直接在package.json对的babel中添加,
前提需要先 `npm run eject` 把隐藏的依赖都显示出来

```
"plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ],
    ]
```
然后就乐意直接用 Antd-moible 框架 直接
### `import { Button } from 'antd-mobile';`
不需要引入css文件了；

### `npm install react-redux --save`
react-redux 提供了两个方法： connect 和 Provider 。
