import Vue from 'vue'
import App from './App.vue'

//importing bootstrap for Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//enable router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import routes from the js file
import {routes} from './routes.js'
const router = new VueRouter({
  routes,
  mode: 'history'
})

//import nav component
import Nav from './components/nav.vue'
Vue.component('app-nav', Nav)

//import header component
import Header from './components/header.vue'
Vue.component('app-header', Header)

//import footer component
import Footer from './components/footer.vue'
Vue.component('app-footer', Footer)

//import image component
import IMG from './pages/image.vue'
import {images} from './image.js'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
