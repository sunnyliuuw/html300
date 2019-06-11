import Vue from 'vue'
import IMG from './pages/image.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('image-post', {
  props: ["asset", "alt", "title"],
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
  template: '<div><b-container class="p-4 bg-dark" v-for="img in images"><b-img fluid mx-auto d-block rounded v-bind:src="img.asset" v-bind:alt="alt"></b-img></b-container></div>'
})
