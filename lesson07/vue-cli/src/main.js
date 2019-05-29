import Vue from 'vue'
//import components
import App from './App.vue'
import Img from './component/image.vue'
import Acc from './component/accordion.vue'
import Grid from './component/grid.vue'
//import bootstrap vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import PortalVue from 'portal-vue'

Vue.use(BootstrapVue)
Vue.use(PortalVue)

//create element componnents
new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
  el: '#image',
  render: h => h(Img)
});

new Vue({
  el: '#accordion',
  render: h => h(Acc)
});

new Vue({
  el: '#grid',
  render: h => h(Grid)
})
