import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueFirestore from "vue-firestore";

import Home from "./components/Home.vue";
import ShoppingList from "./components/shop/ShoppingList.vue";
import EditList from "./components/edit/EditList.vue";

Vue.use(VueFirestore);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { name: "shop", path: "/shop/:listId", component: ShoppingList },
  { name: "edit", path: "/edit/:listId", component: EditList },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
