import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'
import Home from './components/Home'
import Axios from 'axios'

Vue.prototype.$http = Axios;
Vue.use(Router, axios)

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
