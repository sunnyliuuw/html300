import IMG from './pages/image.vue'
import ACC from './pages/accordion.vue'
import GRID from './pages/grid.vue'
import HOME from './pages/home.vue'

export const routes = [
  {path: '/image', component: IMG},
  {path: '/accordion', component: ACC},
  {path: '/grid', component: GRID},
  {path: '/', component: HOME}
]
