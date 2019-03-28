<template>
  <div>
    <p v-for="item in checklist" v-bind:key="item['.key']">
      {{item["name"]}}
      {{item["type"]}}
      <v-btn
        @click="addToList({name: item['name'], type: item['type'], qty: 3})"
        color="success"
      >Add to list</v-btn>
    </p>
  </div>
</template>

<script>
import { db } from "../../db.js";

export default {
  props: ["listId"],
  firestore() {
    return {
      checklist: db.collection("checklist"),
      items: db
        .collection("lists")
        .doc(this.listId)
        .collection("items")
    };
  },
  methods: {
    addToList(item) {
      this.$firestore.items.add({
        name: item.name,
        quantity: item.qty,
        type: item.type
      });
    }
  }
};
</script>

<style>
</style>
