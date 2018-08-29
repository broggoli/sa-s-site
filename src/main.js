import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'
import Loader from './components/Loader'

Vue.prototype.$http = axios;
Vue.use(Router, axios)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Loader',
    component: Loader
  }
]
const router =  new Router( { 
  routes, 
  mode: "history" 
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
