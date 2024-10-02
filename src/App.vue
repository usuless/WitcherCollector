<script setup lang="ts">
import cards from "./assets/data/cards.json"
import Card from './components/Card.vue';
import SearchSection from "./components/SearchSection.vue";
import type { Ref } from "vue";
import { computed, ref, watch } from "vue";
import { refDebounced} from '@vueuse/core';

let searchLocation: Ref<string> = ref('')
let searchName:Ref<string>=ref('')
let deckName:Ref<Array<string>>=ref([])

   const filteredDecks = computed(() => {
      return cards.filter(item => deckName.value.includes(item.deck))
   })

   const filteredLocation = computed(() => {
      return filteredDecks.value.filter(item => item.location.toLowerCase().includes(searchLocation.value.toLowerCase()))
})

   const filteredNames = computed(() => {
      return filteredLocation.value.filter(item => item.card.toLowerCase().includes(searchName.value.toLowerCase()))
})

const finalFilter = ref(cards)

const debounced = refDebounced(filteredNames, 700)

watch(debounced, () => finalFilter.value = filteredNames.value)

</script>
<template>
   <SearchSection :data="cards" 
   v-model:location="searchLocation"
   v-model:name="searchName"
   @decks="(event) => deckName = event"/>
   <Card :card="card" v-for="card in finalFilter" :key="card.id"/>
</template>