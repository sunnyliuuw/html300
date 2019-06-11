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
Vue.component('image-post', {
  props: {
    asset: String, //props validation
    alt: String, //props validation
    title: String //props validation
  },
  mixin: [showBorder],
  //define filter
  filters: {
    myFilter(val) {
      return val.toUpperCase();
    }
  },
  data () {
    return {
      //array of object for images
      images: [
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 1", title: "bunny1"},
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 2", title: "bunny2"},
        {asset: "./src/assets/IMG_6251.JPG", alt: "Image 3", title: "bunny3"}
      ]
    }
  },
  //displaying images
  template: '<div><b-container class="p-4 bg-dark" v-for="img in images"><b-img v-on:click="toggleShowBorder" fluid mx-auto d-block rounded v-bind:src="img.asset" v-bind:alt="img.alt" v-bind:title="img.title | myFilter"></b-img></b-container></div>'
})
//mixin
const showBorder = {
  data() {
    return {
      isHidden: true,
    }
  },
  methods: {
    toggleShowBorder() {
      this.isHidden = !this.isHidden
    }
  }
}


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
