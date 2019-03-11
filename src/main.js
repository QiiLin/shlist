import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import ListSelector from './components/ListSelector.vue'
import ShoppingList from './components/ShoppingList.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: ListSelector },
  { path: '/list:key', component: ShoppingList },
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
