<template>
  <v-list>
    <template v-for="item in items">
      <v-list-tile @click="lockItem(item['.key'])" :key="item['.key']">
        <v-list-tile-content>
          <v-list-tile-title>{{ item["name"] }}</v-list-tile-title>
          {{ item["quantity"] }}
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import { db } from "../../db.js";

export default {
  methods: {
    lockItem(itemId) {
      this.$firestore.items.doc(itemId).update({
        locked: true
      });
    }
  },
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
