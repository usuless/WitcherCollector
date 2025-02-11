<script setup lang="ts">
import { shallowRef } from "vue";
import CardsSection from "./views/CardsSection.vue";
import HomeSection from "./views/HomeSection.vue";
let currentComponent = shallowRef(HomeSection);
</script>
<template>
  <input type="radio" v-model="currentComponent" :value="CardsSection" />
  <label>Cards</label>
  <input type="radio" v-model="currentComponent" :value="HomeSection" />
  <label>Home</label>
  <component v-model="currentComponent" :is="currentComponent"></component>
</template>
