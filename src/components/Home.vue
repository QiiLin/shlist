<template>
  <v-container grid-list-xs>
    <v-card v-if="latestCompleted" @click="createNewList">Add new list</v-card>
    <v-card @click="goToLatest">{{ latestList }}</v-card>
  </v-container>
</template>

<script>
import firestore from "../db.js";

export default {
  firestore() {
    return {
      listMetaData: firestore.collection("lists").doc("meta-data")
    };
  },
  computed: {
    latestCompleted() {
      return this.listMetaData["latest-completed"];
    },
    latestList() {
      return this.listMetaData["latest-list"];
    }
  },
  methods: {
    createNewList() {
      this.$router.push({ name: "edit", params: { listId: "new" } });
    },
    goToLatest() {
      this.$router.push({ name: "edit", params: { listId: this.latestList } });
    }
  }
};
</script>

<style></style>
