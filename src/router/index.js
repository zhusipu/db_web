import Vue from 'vue'
import Router from 'vue-router'
import Task from 'components/task/task.vue'
import Fillin from 'components/task/fillin/fillin.vue'
import FillinIndex from 'components/task/fillin/index.vue'
import FillinDetail from 'components/task/fillin/detail.vue'
import Login from 'components/login/login.vue'
import Setting from 'components/setting/setting.vue'
import Label from 'components/setting/label/label.vue'
import TaskListAuthority from 'components/setting/tasklist-authority/tasklist-authority'
import MenuManagement from 'components/setting/menu-management/menu-management.vue'
import TypeList from 'components/task/task-type/type-list'
import Process from 'components/process/process'
import ProcessList from 'components/process/process-management/process-list'
import AddProcess from 'components/process/process-management/process-add'
import EditProcess from 'components/process/process-management/process-edit'
import TaskList from 'components/task/task-management/task-list.vue'
import AddTask from 'components/task/task-management/task-add'
import EditTask from 'components/task/task-management/task-edit'
import List from 'components/task/task-management/list'
import Supervice from 'components/task/task-supervice/supervice'
import TaskSearch from 'components/task/task-search/task-search'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      redirect: 'task'
    },
    {
      path: '/task',
      name: '任务',
      component: Task,
      children: [
        {
          path: '',
          redirect: 'fillin'
        },
        {
          path: 'fillin',
          component: Fillin,
          children: [
            {
              path: '',
              redirect: 'index'
            },
            {
              path: 'index',
              name: '任务列表',
              component: FillinIndex
            },
            {
              path: 'detail/:tdDeptNo/:id',
              name: '修改',
              component: FillinDetail
            }
          ]
        },
        {
          path: 'list',
          name: '任务管理',
          component: List,
          children: [
            {
              path: '',
              redirect: 'task-list'
            },
            {
              path: 'task-list',
              name: '任务列表',
              component: TaskList
            },
            {
              path: 'task-add',
              name: '新增任务',
              component: AddTask
            },
            {
              path: 'task-edit/:pId',
              name: '编辑任务',
              component: EditTask
            }
          ]
        },
        {
          path: 'type-list',
          name: '任务分类管理',
          component: TypeList
        },
        {
          path: 'supervice',
          name: '任务督办',
          component: Supervice
        },
        {
          path: 'task-search',
          name: '任务查询',
          component: TaskSearch
        }
      ]
    },
    {
      path: '/setting',
      name: '设置',
      component: Setting,
      children: [
        {
          path: 'tasklist-authority',
          name: '任务列表权限',
          component: TaskListAuthority
        },
        {
          path: 'label',
          name: '标签管理',
          component: Label
        },
        {
          path: 'menu-management',
          name: '菜单管理',
          component: MenuManagement
        }
      ]
    },
    {
      path: '/process',
      name: '流程',
      component: Process,
      children: [
        {
          path: '',
          redirect: 'process-list'
        },
        {
          path: 'process-list',
          name: '流程管理',
          component: ProcessList
        },
        {
          path: 'process-add',
          name: '新增流程',
          component: AddProcess
        },
        {
          path: 'process-edit/:pId',
          name: '编辑流程',
          component: EditProcess
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
