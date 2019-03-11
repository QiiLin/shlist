<template>
  <v-container grid-list-md fluid>
      <h1>{{lists}}</h1>
  </v-container>
</template>

<script>
import firestore from "../db.js"

export default {
    firestore() {
        return {
            lists: firestore.collection("lists")
        }
    }
};
</script>

<style>
</style>
