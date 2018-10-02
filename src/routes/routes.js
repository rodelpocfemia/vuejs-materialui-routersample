import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'
import TableList from '@/pages/TableList.vue'
import Typography from '@/pages/Typography.vue'
import Icons from '@/pages/Icons.vue'
import Maps from '@/pages/Maps.vue'
import Notifications from '@/pages/Notifications.vue'
import TestPage from '@/pages/TestPage.vue'
import ecpoffers from '@/pages/ecpoffers.vue'
import ecpoffersdetails from '@/pages/ecpoffersdetails.vue'
import UpgradeToPRO from '@/pages/UpgradeToPRO.vue'
import Login from '@/pages/Login.vue'
import auth from '../auth'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'ecpoffers',
        name: 'ECP One Portal Offers',
        component: ecpoffers,
        beforeEnter: requireAuth        
      },
      {
        path: 'ecpoffers/:id',
        name: 'ECP One Portal Offers Details',
        component: ecpoffersdetails,
        beforeEnter: requireAuth        
      },
      {
        path: 'testpage',
        name: 'TestPage',
        component: TestPage,
        beforeEnter: requireAuth
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: UpgradeToPRO
      },
      {
        path: 'Login',
        name: 'Login',
        component: Login
      },
      {
        path: 'logout',
        beforeEnter (to, from, next) {
          auth.logout()
          next('/')
        }
      }
    ]
  }
]

export default routes

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: 'Login',
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
