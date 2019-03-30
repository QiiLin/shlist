<template>
  <div>
    <p v-for="item in checklist" v-bind:key="item['.key']">
      {{item["name"]}}
      <v-menu offset-y>
        <v-btn color="primary" dark round slot="activator">+</v-btn>
        <v-list>
          <v-list-tile v-for="num in 9" :key="num" @click="addToList(item, num)">
            <v-list-tile-title>{{num}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
    addToList(item, qty) {
      this.$firestore.items.add({
        name: item["name"],
        quantity: qty,
        type: item["type"]
      });
    }
  }
};
</script>

<style>
</style>
