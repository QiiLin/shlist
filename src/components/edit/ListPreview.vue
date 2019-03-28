<template>
  <div>
    <p v-for="item in items" v-bind:key="item['.key']">
      {{item["name"]}}
      {{item["quantity"]}}
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
  }
};
</script>

<style>
</style>
