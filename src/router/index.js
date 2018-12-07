import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
  import('@/views/login.vue')
const Home = () =>
  import('@/views/home.vue')
Vue.use(Router)

export default new Router({
  routes: [ //配置路由
    {
      path: '/', //访问路径
      name: 'login', //路由名称
      component: Login //路由需要的组件
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
