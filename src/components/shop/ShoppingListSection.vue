<template>
  <div v-if="items.length > 0">
    <h2>{{category}}</h2>
    <v-list-tile
      v-for="item in items"
      :key="item['.key']"
      :class="{picked: item['picked']} "
      @click="togglePick(item['.key'], item['picked'])"
    >
      <v-list-tile-content>
        <v-list-tile-title>{{ item["name"] }}</v-list-tile-title>
        {{ item["quantity"] }}
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
import { db } from "../../db.js";

export default {
  props: ["category"],
  firestore() {
    return {
      allItems: db
        .collection("lists")
        .doc(this.$route.params.listId)
        .collection("items"),
      items: db
        .collection("lists")
        .doc(this.$route.params.listId)
        .collection("items")
        .where("type", "==", this.category)
    };
  },
  methods: {
    togglePick(itemId, curState) {
      this.$firestore.allItems.doc(itemId).update({
        picked: !curState
      });
    }
  }
};
</script>

<style>
.picked {
  opacity: 0.5;
  background: #ccc;
  text-decoration: line-through;
}
</style>
