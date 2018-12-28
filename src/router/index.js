// 路由导航文件

import Vue from 'vue'
import Router from 'vue-router'

// 登陆
const Login = () =>
  import('@/views/login.vue')

// 主界面
const Home = () =>
  import('@/views/home.vue')

// 导航栏组件导入
const First = () =>
  import('@/components/first.vue')
const Second = () =>
  import('@/components/second.vue')
const Third = () =>
  import('@/components/third.vue')
const Forth = () =>
  import('@/components/forth.vue')
const Fifth = () =>
  import('@/components/fifth.vue')
const Sixth = () =>
  import('@/components/sixth.vue')


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
      component: Home,
      redirect: 'first', //默认展示的组件
      children: [{
          path: '/first',
          component: First,
          name: 'first'
        },
        {
          path: '/second',
          component: Second,
          name: 'second'
        },
        {
          path: '/third',
          component: Third,
          name: 'third'
        },
        {
          path: '/forth',
          component: Forth,
          name: 'forth'
        },
        {
          path: '/fifth',
          component: Fifth,
          name: 'fifth'
        },
        {
          path: '/sixth',
          component: Sixth,
          name: 'sixth'
        },
      ]
    },
  ]
})
