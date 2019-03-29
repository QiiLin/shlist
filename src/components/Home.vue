<template>
  <v-container grid-list-xs>
    <v-card v-if="latestCompleted" @click="editNewList">Add new list</v-card>
    <v-card>
      {{ latestList }}
      <v-btn @click="editList(latestList)">Edit</v-btn>
      <v-btn @click="shopList(latestList)">Shop</v-btn>
    </v-card>
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
    shopList(listId) {
      this.$router.push({ name: "shop", params: { listId: listId } });
    },
    editNewList() {
      this.$firestore.lists
        .add({
          date: firebase.firestore.Timestamp.now()
        })
        .then(docRef => {
          this.$firestore.lists.doc("meta-data").update({
            "latest-completed": false,
            "latest-list": docRef.id
          });
          this.editList(docRef.id);
        });
    },
    editList(listId) {
      this.$router.push({ name: "edit", params: { listId: listId } });
    }
  }
};
</script>

<style></style>
