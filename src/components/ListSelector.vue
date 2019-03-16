<template>
  <v-container grid-list-md fluid>
    <v-layout wrap align-start justify-space-around row>
      <v-flex sm4 v-for="list in lists" v-bind:key="list['.key']">
        <ListPreview v-bind:list="list" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firestore from "../db.js";
import ListPreview from "../components/ListPreview.vue";

export default {
  components: {
    ListPreview
  },
  firestore() {
    return {
      lists: firestore.collection("lists")
    };
  }
};
</script>

<style></style>
