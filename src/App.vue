<script setup lang="ts">
import { shallowRef } from "vue";
import HomeView from "./views/HomeView.vue";

let currentComponent = shallowRef(HomeView);
</script>
<template>
  <component v-model="currentComponent" :is="currentComponent"></component>
  <div class="url"></div>
</template>
<style>
#app {
  width: 100vw;
  overflow-x: hidden;
}
</style>
