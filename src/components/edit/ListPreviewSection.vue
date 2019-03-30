<template>
  <div v-if="items.length > 0">
    <h2>{{category}}</h2>
    <p v-for="item in items" v-bind:key="item['.key']">
      {{item["name"]}}
      <v-btn large icon flat @click="$emit('setQty',[item['.key'], item['quantity'] - 1])">
        <v-icon>remove_circle</v-icon>
      </v-btn>
      {{item["quantity"]}}
      <v-btn icon flat @click="$emit('setQty',[item['.key'], item['quantity'] + 1])">
        <v-icon>add_circle</v-icon>
      </v-btn>
      <v-btn icon flat color="red" @click="$emit('remove', item['.key'])">
        <v-icon>remove_shopping_cart</v-icon>
      </v-btn>
    </p>
  </div>
</template>

<script>
import { db } from "../../db.js";

export default {
  props: ["category", "listId"],
  firestore() {
    return {
      items: db
        .collection("lists")
        .doc(this.listId)
        .collection("items")
        .where("type", "==", this.category)
    };
  }
};
</script>

<style>
</style>
