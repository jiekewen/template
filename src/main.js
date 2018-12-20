// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //基本引入  用于使用vue
import App from './App' //导入基础组件
import router from './router' //引入路由
import ElementUI from 'element-ui' // 引入UI库 第一步
import 'element-ui/lib/theme-chalk/index.css' //引入UI库的样式 第二步
import '@/assets/common.css'
// 用npm安装axios后 只需要在需要使用的界面内如下方式引入即可  不必在main.js文件引入（按需引入）
// import axios from 'axios'  


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
