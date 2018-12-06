import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
  import('@/views/login.vue')
Vue.use(Router)

export default new Router({
  routes: [ //配置路由
    // {
    //   path: '/', //访问路径
    //   name: 'HelloWorld', //路由名称
    //   component: HelloWorld //路由需要的组件
    // }
    {
      path: '/login', //访问路径
      // name: 'login', //路由名称
      component: Login //路由需要的组件
    }
  ]
})
