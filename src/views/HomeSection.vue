<script setup lang="ts">
import CardsSection from './CardsSection.vue';
const model = defineModel();
</script>
<template>
  <h1>Home Component</h1>
  <input type="radio" :value="CardsSection" v-model="model"></input>
</template>
