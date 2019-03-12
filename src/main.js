import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import ListSelector from './components/ListSelector.vue'
import ShoppingList from './components/ShoppingList.vue'
import VueRouter from 'vue-router'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: ListSelector },
  { name: 'list', path: '/list/:key', component: ShoppingList },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
