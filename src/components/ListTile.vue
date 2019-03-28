<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-1">{{ createdAt }}</h3>
    </v-card-title>

    <v-card-actions class="justify-space-around">
      <v-btn small round color="primary" @click="goToShop">Shop</v-btn>
      <v-btn small round color="secondary">Edit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["list"],
  computed: {
    createdAt() {
      return new Date(this.list.date.seconds * 1000).toDateString();
    }
  },
  methods: {
    goToShop() {
      this.$router.push({
        name: "list",
        params: { listId: this.list[".key"] }
      });
    }
  }
};
</script>

<style></style>
