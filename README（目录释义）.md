# template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

------



## 1.目录介绍

#### 1.1 build文件夹

主要是webpack的配置文件。主要用于配置webpack规则。整个项目是通过webpack支持的，比如要使用less，就需要在webpack规则里使用less。在文件中一些简单的配置都已经有了，包括入口文件、插件、loader、热更新等都已经配置好了。要做的只是根据自己的项目有什么loader需要增加的自行配置即可，可能使用的**webpack.base.config.js、webpack.dev.config.js、webpack.prod.config.js三个webpack的配置文件**，分别是基本webpack配置、开发环境配置、生产环境配置。 

|-- build                                       // 项目构建(webpack)相关代码
|   |-- build.js                              // 生产环境构建代码
|   |-- check-version.js              // 检查node、npm等版本
|   |-- utils.js                               // 构建工具相关
|   |-- vue-loader.conf.js           // webpack loader配置
|   |-- webpack.base.conf.js     // webpack基础配置
|   |-- webpack.dev.conf.js        // webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js      // webpack生产环境配置
|-- config                                     // 项目开发环境配置
|   |-- dev.env.js                          // 开发环境变量
|   |-- index.js                              // 项目一些配置变量
|   |-- prod.env.js                        // 生产环境变量
|-- src                                           // 源码目录
|   |-- components                     // vue公共组件
|   |-- router                                // vue的路由管理
|   |-- App.vue                            // 页面入口文件
|   |-- main.js                              // 程序入口文件，加载各种公共组件
|-- static                                    // 静态文件，比如一些图片，json数据等
|-- .babelrc                                // ES6语法编译配置
|-- .editorconfig                       // 定义代码格式
|-- .gitignore                             // git上传需要忽略的文件格式
|-- .postcsssrc                          // postcss配置文件
|-- README.md                        // 项目说明
|-- index.html                           // 入口页面

|-- package.json                     // 项目基本信息,包依赖信息等

```
├── build -----------------------------------------------webpack相关配置文件
│   ├── build.js ----------------------------------------webpack打包配置文件
│   ├── check-versions.js ------------------------------ 检查npm,nodejs版本
│   ├── logo.png ----------------------------------------logo图片
│   ├── utils.js --------------------------------------- 配置资源路径，配置css加载器
│   ├── vue-loader.conf.js ----------------------------- 配置css加载器等
│   ├── webpack.base.conf.js --------------------------- webpack基本配置
│   ├── webpack.dev.conf.js ---------------------------- 用于开发的webpack设置
│   ├── webpack.prod.conf.js --------------------------- 用于打包的webpack设置
```

**1.1.1主要配置文件**

1.webpack.base.conf.js

配置编译入口和输出路径

模块resolve的规则

配置不同类型模块的处理规则

2.webpack.dev.conf.js

合并基础的webpack配置

使用styleLoaders

配置Source Maps

配置webpack插件

3.webpack.prod.conf.js

合并基础的webpack配置

配置webpack的输出

配置webpack插件

配置gzip模式

配置webpack-bundle-analyzer，分析打包后生成的文件结构

#### 2.目录梗概

├── index.html     --------------------    入口页面 

*（index.html文件 vue是spa应用，所以只有一个入口，也就是index.html文件，这里我们进行一些不更改资源（比如某某库）的引用，和html页面meta、title之类的设定。）*

 ├── build                      ---------------  构建脚本目录 

 │   ├── build-server.js              ---   运行本地构建服务器，可以访问构建后的页面 

 │   ├── build.js                     -------   生产环境构建脚本 

 │   ├── dev-client.js               ----    开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新

 │   ├── dev-server.js             ---      运行本地开发服务器 

 │   ├── utils.js                      --------  构建相关工具方法 

 │   ├── webpack.base.conf.js     --wabpack基础配置

 │   ├── webpack.dev.conf.js     ----wabpack开发环境配置 

 │   └── webpack.prod.conf.js    -- wabpack生产环境配置 

├── config                        ------------  项目配置

 │   ├── dev.env.js              --------    开发环境变量 

 │   ├── index.js                      ------  项目配置文件 

 │   ├── prod.env.js                   ---  生产环境变量 

 │   └── test.env.js                  ----   测试环境变量

 ├── mock                         ----------   mock数据目录

 │      └── hello.js 

├── package.json                  ------  npm包配置文件，里面定义了项目的npm脚本，依赖包等信息

├── src                         --------------   项目源码目录    

│   ├── main.js                      ------   入口js文件 

*（根逻辑，页面加载首先会加载这份js文件，这里也是导包 引包位置  一些UI库axios之类的都在这里进行引入）*

│   ├── app.vue                      -----   根组件 

*（这里是页面的根部。可以在这里可以进行一些css reset操作）*

│   ├── components               ----   公共组件目录

*（主要存放可复用组件，你可以在任意页面中复用这些组件）*

│   │   └── title.vue 

│   ├── assets                        ------  资源目录，这里的资源会被wabpack构建

*（存放web中引用的图片 媒体资源）*

│   │      └── images

│   │           └── logo.png

│   ├── routes                       ------   前端路由

│   │   └── index.js

*（路由配置文件，在此处配置各个页面的跳转引用关系）*

│   ├── store                        -------   应用级数据（state）

│   │   └── index.js 

│   └── views                        ------   页面目录

│       ├── hello.vue 

│       └── notfound.vue 

├── static                       ----------   纯静态资源，不会被wabpack构建。

*（主要存放外部引用资源。比如xxx.min.js）*

└── test                         -----------   测试文件目录（unit&e2e）

 	└── unit                          ----  单元测试 

​		├── index.js       -------  入口脚本

​		├── karma.conf.js  ---- karma配置文件 

​		└── specs  -------------    单测case目录 

​			└── Hello.spec.js 

 `<template></template>`标签包裹的内容：这是模板的HTMLDom结构  

`<script></script>`标签包括的js内容：你可以在这里写一些页面的js的逻辑代码。  

`<style></style>`标签包裹的css内容：页面需要的CSS样式。 

#### 3.对项目不需要的文件进行删除

3.1 在src文件夹的index.js文件中 routes：[]里面的内容清空   import HelloWorld from '@/components/HelloWorld' (不删除会报错)

3.2 把components文件夹下删除HelloWorld.vue组件

3.3 将#app的css样式文件删除

#### 4.把文件先跑起来

npm run dev   这里可以进行批操作：1.创建一个txt文件  2. 在txt文件中写npm run dev 3.保存退出 4. 把txt后缀名改成 .bat

(这里可以在文件config文件夹下的index.js文件中autoOpenBrowser: false  中的false改成true就可以批操作后就可以直接打开浏览器)

#### 5.引入基本所用包

###### 5.1（1.如果是刚开始搭建项目需要先安装node.js 因为npm安装环境时基于node.js实现的 再安装npm）

npm: Nodejs下的包管理器  安装node.js会自带npm,但不是最新的。

webpack: 它主要的用途是通过CommonJS的语法把所有浏览器端需要发布的静态资源做相应的准备，比如资源的合并和打包。

vue-cli: 用户生成Vue工程模板。（帮你快速开始一个vue的项目，也就是给你一套vue的结构，包含基础的依赖库，只需要 npm install就可以安装）

![img](https://images2017.cnblogs.com/blog/1287619/201712/1287619-20171212150420488-1331978539.png) 

npm i vue-cli -g  全局安装cli脚手架

npm install初始化，安装依赖

npm run dev 跑起来就完了

###### 5.2在main.js中引入各种需要的基本包

1.先用npm i element-ui -S  (在UI库文档里有引用方法  此处是全部引入方式)安装，再在main.js文件中import ElementUI from 'element-ui'     Vue.use(ElementUI) 进行导入

(导入element-ui库时 把ui库的样式也引入进去

 import 'element-ui/lib/theme-chalk/index.css')

2. 安装axios：npm install axios     在main文件中    import axios from 'axios'   vue.prototype.$http=axios    用于发送数据请求

3. 可以在src/accsets/创建一个common.css文件用于一些基本样式的初始化  再在main.js文件中进行导入import '@/assets/common.css' 

4. 现在初始化的工作基本完成   可以根据需要写的页面  新建文件  写组件导入ui库样式布局等

5. 一般在src中先创建views文件  在views文件中创建登陆组件   一般文件都是写在这里除了login.vue和home.vue  其他的文件写在文件夹中

6. 组件中跳转的实现依赖于router文件中的index.js中在routes的数组中进行配置路由    // {

   ​    //   path: '/', //访问路径

   ​    //   name: 'HelloWorld', //路由名称

   ​    //   component: HelloWorld //路由需要的组件

   ​    // }

   7.创建login.vue文件  在elementui中输入form表单 寻找类似需要的登录界面把代码复制过来就可以  在router文件的index.js中 const Login = () => import('@/views/login')   把login组件的地址进行导入    再在routes中      

   ​     //path: '/login', //访问路径

   ​      //name: 'login', //路由名称

   ​      // component: Login //路由需要的组件