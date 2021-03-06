// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App'

// router setup
import routes from './routes/routes'

// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import Notifications from './components/NotificationPlugin'

// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'

import Chartist from 'chartist'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee)
library.add(faAddressBook)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
  changeName(state, username) {
    state.username = username;
  }}  
});

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})
