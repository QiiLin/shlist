<template>
  <v-list>
    <template v-for="item in items">
      <v-list-tile
        :class="{picked: item['picked']} "
        @click="togglePick(item['.key'], item['picked'])"
        :key="item['.key']"
      >
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
    togglePick(itemId, curState) {
      this.$firestore.items.doc(itemId).update({
        picked: !curState
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

<style scoped>
.picked {
  opacity: 0.5;
  background: #ccc;
  text-decoration: line-through;
}
</style>
