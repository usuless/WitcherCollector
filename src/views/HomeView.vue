<script setup lang="ts">
import CardsView from './CardsView.vue';
const model = defineModel();
</script>
<template>
  <h1>Home Component</h1>
  <input type="radio" :value="CardsView" v-model="model"></input>
</template>
