<template>
  <v-container grid-list-xs>
    <v-card v-if="latestCompleted" @click="editNewList">Add new list</v-card>
    <v-card @click="goToLatest">{{ latestList }}</v-card>
  </v-container>
</template>

<script>
import { db } from "../db.js";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  firestore() {
    return {
      listMetaData: db.collection("lists").doc("meta-data"),
      lists: db.collection("lists")
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
    editNewList() {
      this.$firestore.lists
        .add({
          date: firebase.firestore.Timestamp.now()
        })
        .then(docRef => {
          this.$router.push({ name: "edit", params: { listId: docRef.id } });
        });
    },
    editList(listId) {
      this.$router.push({ name: "edit", params: { listId: listId } });
    }
  }
};
</script>

<style></style>
