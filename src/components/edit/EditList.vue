<template>
  <div>
    <Checklist v-bind:listId="this.$route.params.listId"/>
    <ListPreview v-bind:listId="this.$route.params.listId"/>
  </div>
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
