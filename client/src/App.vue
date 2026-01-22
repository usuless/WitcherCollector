<script setup lang="ts">
import { shallowRef } from "vue";
import HomeView from "./views/HomeView.vue";
import { RouterView } from "vue-router";
let currentComponent = shallowRef(HomeView);
</script>
<template>
  <RouterView />
  <div class="url"></div>
</template>
<style>
#app {
  width: 100vw;
  overflow-x: hidden;
}
</style>
