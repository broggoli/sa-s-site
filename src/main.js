import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'

Vue.use(Router)
Vue.use(VueResource)

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
