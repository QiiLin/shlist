<template>
  <v-list>
    <template v-for="item in items">
      <v-list-tile :key="item['.key']">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item["name"] }}
            {{ item["quantity"] }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import { db } from "../db.js";

export default {
  firestore() {
    return {
      items: db
        .collection("lists")
        .doc(this.$route.params.listId)
        .collection("items")
    };
  }
};
</script>

<style></style>
