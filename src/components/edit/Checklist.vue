<template>
  <div>
    <ChecklistSection
      v-for="type in this.$options.categories"
      v-bind:key="type"
      :category="type"
      @add="addToList"
    />
  </div>
</template>

<script>
import { categories, db } from "../../db.js";
import ChecklistSection from "./ChecklistSection.vue";

export default {
  props: ["listId"],
  components: {
    ChecklistSection
  },
  categories,
  firestore() {
    return {
      items: db
        .collection("lists")
        .doc(this.listId)
        .collection("items")
    };
  },
  methods: {
    addToList({ item, qty }) {
      this.$firestore.items.add({
        name: item["name"],
        picked: false,
        quantity: qty,
        type: item["type"]
      });
    }
  }
};
</script>

<style>
</style>
