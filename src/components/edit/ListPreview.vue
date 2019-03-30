<template>
  <div>
    <p v-for="item in items" v-bind:key="item['.key']">
      {{item["name"]}}
      <v-btn color="success" @click="setItemQty(item['.key'], item['quantity'] - 1)">-</v-btn>
      {{item["quantity"]}}
      <v-btn color="success" @click="setItemQty(item['.key'], item['quantity'] + 1)">+</v-btn>
      <v-btn color="failure" @click="removeItem(item['.key'])">Delete</v-btn>
    </p>
  </div>
</template>

<script>
import { db } from "../../db.js";

export default {
  props: ["listId"],
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
    setItemQty(itemId, newQty) {
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
