# README
此配置为个人使用和学习的配置，欢迎大家交流学习，欢迎前辈指正  
<br>
此文档目录结构如下
* 文件结构说明
* 迭代版本
    * v1.0：XXXX年XX月X日
    * 2.0版：XXXX年XX月X日
    * ......
* package.json说明
    * 命令说明
    * npm包说明
* 参考资料

# 文件结构说明
```
│  .babelrc    //babel配置
│  .gitignore    //git忽略文件
│  package-lock.json
│  package.json
│  postcss.config.js    //postcss配置文件，postcss是一个可以转变CSS的工具：https://postcss.org/
│  README.md
│  webpack.common.js    //webpack基础配置
│  webpack.dev.js    //webpack开发环境配置，通过webpack-merge合并webpack.common.js，下同
│  webpack.prod.js    //webpack生产环境配置
│  
├─dist    //生产环境打包生成目录
│              
├─public
│      index.html    //引用打包后js的html文件
│      
└─src
    │  App.css    //应用全局CSS配置
    │  App.jsx    
    │  index.css  //公共CSS
    │  index.js   //将App.jsx渲染至index.html，热更新配置，core-js按需引用等等
    │  
    ├─components   //组件目录
    │  └─TemplateCom
    │       
    ├─containers   //应用模块目录
    └─source   //公用静态资源目录
        ├─font
        │      
        ├─img
        │      
        └─json
```
# 迭代版本
## v1.0:基础配置  2019.7.28
此配置为基础配置，主要功能有
* Babel
    * preset: @babel/preset-env、@babel/preset-react
    * [@babel/polyfill：在Babel7.4.0后已弃用，改用core-js及regenerator-runtime](https://babeljs.io/docs/en/babel-polyfill)
* CSS
    * [CSS与js打包分离](https://webpack.js.org/plugins/mini-css-extract-plugin/)  
    * [CSS Modules](https://webpack.js.org/loaders/css-loader/#modules)
    * [PostCSS](https://postcss.org/)  
        * [Autoprefixer：根据package.json的browserslist及can i use数据自动添加CSS前缀](https://github.com/postcss/autoprefixer)  
* Plugin
    * HtmlWebpackPlugin：使html自动引用js文件，这个html即public/index.html
    * HotModuleReplacementPlugin：热更新模块，可以使开发时页面不会完全重新加载，保持state状态，与[react-hot-loader](https://gaearon.github.io/react-hot-loader/)配合使用
    * [webpack.ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)：自动加载模块，使得不用在每个模块中都import或者require
    * [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)：除去生成文件夹(如dist)中的文件，因为文件名中含哈希
* 图片处理(png、jpg、jpeg、gif、svg)
    * [url-loader](https://webpack.js.org/loaders/url-loader/#root)
    * [url-loader.limit](https://webpack.js.org/loaders/url-loader/#limit)：小图片base64编译
* 字体处理(eot、woff、woff2、ttf、svg)
    * [url-loader](https://webpack.js.org/loaders/url-loader/#root)
* 其他
    * 缓存：打包生成的文件含哈希值，[缓存机制推介绍荐此文](https://mp.weixin.qq.com/s/d2zeGhUptGUGJpB5xHQbOA)  
    * [扩展名简写](https://webpack.js.org/configuration/resolve/#resolveextensions)：例如import XXX from "A/XX"，不需要.js或.jsx，具体见`resolve.extensions`
    * [目录别名](https://webpack.js.org/configuration/resolve/#resolvealias)：举例"@"表示"\src"目录，具体见`resolve.alias`
```
项目重要模块版本
webpack:4.37.0
@babel/core:7.5.5
```
# package.json说明
## 命令说明
```
npm run start:运行webpack.dev.js，启动开发环境
npm run build:运行webpack.prod.js，打包项目
```

## npm包说明
这里分为`devDependencies`与`dependencies`，目录下再按生态划分
### devDependencies
**webpack相关**：
```
    "webpack": "^4.37.0",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2",
    "webpack-merge": "^4.2.1",    
    //loader
    "html-loader": "^0.5.5",
    "file-loader": "^4.1.0",
    "url-loader": "^2.1.0",
    "css-loader": "^3.1.0",
    "style-loader": "^0.23.1", //将CSS样式作为<style>标签插入DOM中，CSS与js分离后可不需要此loader
    "babel-loader": "^8.0.6", //使babel搭配webpack
    "react-hot-loader": "^4.12.9",
    "postcss-loader": "^3.0.0", //使PostCSS搭配webpack
    //plugin
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.8.0" //使CSS与js打包分离
```

**babel相关**
```
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5", //可使用ES6语法,注意是语法,与原先的Polyfill区分，Polyfill提供的是ES6API或对象方法（它们可用ES5模拟），比如Object.assign
    "@babel/preset-react": "^7.0.0"
```

**PostCSS相关**
```
    "autoprefixer": "^9.6.1" //根据package.json的browserslist自动添加CSS前缀兼容浏览器
```

**React相关**
```
    "prop-types": "^15.7.2" //设置React组件prop类型
```

###  dependencies
**React相关**
```
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
```

**ES6相关**
```
    //@babel/polyfill在babel7.4.0后已弃用，直接使用原本包含的core-js与regenerator runtime
    //详见链接：https://babeljs.io/docs/en/babel-polyfill
    "core-js": "^3.1.4",
    "regenerator-runtime": "^0.13.3"
```

**其他模块**
剩下的就是自己的模块啦
```
"axios": "^0.19.0",
```

# 参考资料
[思否：入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770#articleHeader0)  
[Tutorial: How to set up React, webpack, and Babel 7 from scratch (2019)](https://www.valentinog.com/blog/babel/)  
[webpack官网](https://webpack.js.org/guides/)  
[babel官网](https://babeljs.io/docs/en/)  
[GitHub：PostCSS](https://github.com/postcss/postcss)  
[掘金：webpack4 的30个步骤打造优化到极致的 react 开发环境，如约而至](https://juejin.im/post/5cfe4b13f265da1bb13f26a8)  