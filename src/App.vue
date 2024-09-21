<script setup lang="ts">
import cards from "./assets/data/cards.json"
import Card from './components/Card.vue';
import SearchSection from "./components/SearchSection.vue";
import type { Ref } from "vue";
import { computed, ref } from "vue";


let searchLocation: Ref<string> = ref('')
let searchName:Ref<string>=ref('')


const filteredLocation = computed(() => {
   return cards.filter(item => item.location.includes(searchLocation.value))
})

const sumOfFilters = computed(() => {
   return filteredLocation.value.filter(item => item.card.includes(searchName.value))
})

</script>
<template>
   <SearchSection :data="cards" 
   @name="(name) => searchName = name" 
   @location="(location) => searchLocation = location"/>
   <Card :card="card" v-for="card in sumOfFilters" :key="card.id"/>
</template>