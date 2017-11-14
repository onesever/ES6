import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// Es6
import Module from '@/components/module/module'
import ModuleBase from '@/components/module/base/base'
import ExportBase from '@/components/module/default/export-base'
import Total from '@/components/module/total/total'
// ES6外传
import Out from '@/components/out/out'
// 箭头函数
import Arrow from '@/components/out/base/arrow'
// Api推荐
import Api from '@/components/out/api/api'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Module',
      name: 'Module',
      component: Module
    },
    {
      path: '/ModuleBase',
      name: 'ModuleBase',
      component: ModuleBase
    },
    {
      path: '/ExportBase',
      name: 'ExportBase',
      component: ExportBase
    },
    {
      path: '/Total',
      name: 'Total',
      component: Total
    },
    {
      path: '/Out',
      name: 'Out',
      component: Out
    },
    {
      path: '/Arrow',
      name: 'Arrow',
      component: Arrow
    },
    {
      path: '/Api',
      name: 'Api',
      component: Api
    }
  ]
})
