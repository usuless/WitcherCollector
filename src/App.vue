<script setup lang="ts">
import cards from "./assets/data/cards.json"
import Card from './components/Card.vue';
import SearchSection from "./components/SearchSection.vue";
import type { Ref } from "vue";
import { ref } from "vue";


let searchLocation: Ref<string> = ref('')

</script>
<template>
   <SearchSection :data="cards" @location="(location) => searchLocation = location"/>
   <Card :location="searchLocation" :card="card" v-for="card in cards" :key="card.id"/>
</template>

<style lang="postcss" scoped>
</style>
