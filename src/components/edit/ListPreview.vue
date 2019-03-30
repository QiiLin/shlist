<template>
  <div>
    <ListPreviewSection
      v-for="type in this.$options.categories"
      :key="type"
      :category="type"
      :listId="listId"
      @remove="removeItem"
      @setQty="setItemQty"
    />
  </div>
</template>

<script>
import { db, categories } from "../../db.js";
import ListPreviewSection from "./ListPreviewSection.vue";

export default {
  categories,
  props: ["listId"],
  components: { ListPreviewSection },
  firestore() {
    return {
      items: db
        .collection("lists")
        .doc(this.listId)
        .collection("items")
    };
  },
  methods: {
    removeItem(itemId) {
      this.$firestore.items.doc(itemId).delete();
    },
    setItemQty([itemId, newQty]) {
      if (newQty > 0) {
        this.$firestore.items.doc(itemId).update({
          quantity: newQty
        });
      }
    }
  }
};
</script>

<style>
</style>
