<script setup lang="ts">
import { shallowRef } from "vue";
import HomeView from "./views/HomeView.vue";

let currentComponent = shallowRef(HomeView);
</script>
<template>
  <component v-model="currentComponent" :is="currentComponent"></component>
</template>
