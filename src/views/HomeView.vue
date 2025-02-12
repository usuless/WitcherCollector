<script setup lang="ts">
import CardsView from "./CardsView.vue";
const model = defineModel();
</script>
<template>
  <section>
    <button @click="model = CardsView" class="btn btn-primary">
      Card Tracker
    </button>
  </section>
</template>
<style scoped></style>
