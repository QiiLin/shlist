import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/Home.vue'
import ShoppingList from './components/ShoppingList.vue'
import VueRouter from 'vue-router'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { name: 'list', path: '/list/:lisItd', component: ShoppingList },
  {name: 'edit', path: '/edit/:listId', component: EditList}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
