<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import LoginView from "./LoginView.vue";
import UserView from "./UserView.vue";

const isLoggedIn = ref(false);
</script>
<template>
  <HeaderComponent />
  <LoginView v-if="isLoggedIn" />
  <UserView v-else />
</template>
<style>
.url {
  background-image: url("https://preview.redd.it/9c1xi00eyj971.jpg?auto=webp&s=a7d81bc605c6a8b4f5f2b8fda894f698e1d6ca22");
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  background-size: cover;
}
</style>
