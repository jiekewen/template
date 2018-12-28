// 入口文件（导包的文件）

import Vue from 'vue' //基本引入  用于使用vue
import App from './App' //导入基础组件
// 1.实现路由跳转
import router from './router' //引入路由
// 2.UI库引入 用于布局
import ElementUI from 'element-ui' // 引入UI库 第一步
import 'element-ui/lib/theme-chalk/index.css' //引入UI库的样式 第二步
import '@/assets/common.css' //引入基本样式


// 用npm安装axios后 只需要在需要使用的界面内如下方式引入即可  不必在main.js文件引入（按需引入）  
import axios from 'axios'
Vue.prototype.$http = axios


Vue.use(ElementUI) //引入UI库 第三步
Vue.config.productionTip = false //生产环境提示，这里设置成了false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>' //引入App组件
})
