import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/components/demo'
import demo01 from '@/components/demo01'
import demo02 from '@/components/demo02'
import demo03 from '@/components/demo03'


Vue.use(Router)



export default new Router({
  routes: [
    {path: '/',name: '/demo',component: demo},
    {path: '/demo01',name:'/demo01',component:demo01},
    {path:'/demo02',name:'/demo02',component:demo02},
    {path:'/demo03',name:'/demo03',component:demo03}
  ]
})
