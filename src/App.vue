<script setup lang="ts">
import cards from "./assets/data/cards.json"
import Card from './components/Card.vue';
import SearchSection from "./components/SearchSection.vue";

</script>
<template>
   <SearchSection :cardInfo="cards"/>
   <Card :card="card" v-for="card in cards"/>
</template>

<style lang="postcss" scoped>

.owned {
   @apply bg-red-500 border-red-500;
}


</style>
