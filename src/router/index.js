import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import New from '@/components/NewEmployee'
import View from '@/components/ViewEmployee'
import Edit from '@/components/EditEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: New
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: Edit
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: View
    }
  ]
})
