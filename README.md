This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Taskbunny

## Project Structure

### ./src/App.js

该文件用来安排整个项目的布局和路由

### ./src/pages

该文件夹用来存放项目各个页面，导出以供`./src/App.js`建立路由。
举例说明：
主页的所有开发内容均存放于`./src/pages/Home`文件夹中，包括其布局以及渲染效果，通过本文件夹下的`index.js`导出，
在`./src/App.js`文件中`import Home from "./pages/Home";`，并在路由中通过`<Route path="/" exact component={Home} />`调用。

### ./src/components

该文件夹用来存放项目中可复用的*样式组件*。
举例说明：
`Button`, `Input`

### ./src/common

该文件夹用来存放项目中可复用的*功能组件*。
举例说明：
`Task card`

## General Structure

每一个组件须有自己独立的文件夹，该文件夹内须有与组件同名的`js`文件，以及`index.js`。

- `js`文件用于对组件内容进行开发；
- `index.js`文件用于方便其他组件通过引入本文件夹直接引用`js`文件；
- 如果该组件须用到一些静态资源，如引入`png`，`svg`文件等情况，需要在该文件下新建`assets`文件夹，用来存放所引入文件；
- 如果该组件需要用到其他组件来进行渲染的话，需在本文件夹下新建`components`文件夹，该文件夹也需要遵守 General Structure 原则安排文件结构。

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
