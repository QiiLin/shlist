<template>
  <v-container grid-list-xs>
    <v-card v-if="latestCompleted" @click="goToCreate">Add new list</v-card>
    <v-card>{{latestList}}</v-card>
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
      goToCreate() {
          this.$route.push("/edit")
      }
  }
};
</script>

<style>
</style>
