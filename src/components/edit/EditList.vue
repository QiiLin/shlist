<template>
  <v-tabs fixed-tabs>
    <v-tab>Checklist</v-tab>
    <v-tab>List Preview</v-tab>

    <v-tab-item>
      <Checklist v-bind:listId="this.$route.params.listId"/>
    </v-tab-item>

    <v-tab-item>
      <ListPreview v-bind:listId="this.$route.params.listId"/>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import Checklist from "./Checklist.vue";
import ListPreview from "./ListPreview.vue";

export default {
  components: {
    Checklist,
    ListPreview
  }
};
</script>

<style></style>
