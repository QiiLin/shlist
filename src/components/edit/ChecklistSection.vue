<template>
  <div>
    <h2>{{category}}</h2>
    <p v-for="item in items" :key="item['.key']">
      {{item["name"]}}
      <v-menu offset-y>
        <v-btn color="green" flat icon slot="activator">
          <v-icon>add</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="num in 9" :key="num" @click="$emit('add', {item, qty: num})">
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
  props: ["category"],
  firestore() {
    return {
      items: db.collection("checklist").where("type", "==", this.category)
    };
  }
};
</script>

<style>
</style>
