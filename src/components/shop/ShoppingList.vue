<template>
  <v-list>
    <ShoppingListSection v-for="type in this.$options.categories" :key="type" :category="type"/>
  </v-list>
</template>

<script>
import { db, categories } from "../../db.js";
import ShoppingListSection from "./ShoppingListSection.vue";

export default {
  categories,
  components: {
    ShoppingListSection
  }
};
</script>

<style>
</style>
