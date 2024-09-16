<script setup lang="ts">
import {reactive} from "vue";
import Head from './components/Head.vue';
import cards from "./assets/data/cards.json"
import Moje from './components/moje.vue';

const localStorageKey = 'cardsData'

const saveCards = () => {
   localStorage.setItem(localStorageKey, JSON.stringify(ownedCards))
}

const loadCards = () => {
   const cards = localStorage.getItem(localStorageKey);

   if(!cards) return {}
   try {
      return JSON.parse(cards)
      
   } catch {
   console.log("Error parsing localstorage data")
      return {}
   }
}

const ownedCards = reactive<Record<number, boolean>>(loadCards())

const isCardOwned = (id: number) => {
   if(!(id in ownedCards)) return false
   
   return ownedCards[id];
}

const toggleCard = (id: number) => {
   if(!(id in ownedCards)) {
      ownedCards[id] = true;
   saveCards()
      return;
   }
   
   ownedCards[id] = !ownedCards[id]
   
   saveCards()
}



</script>
<template>
   <Moje/>
 <Head/>
   <div class="grid grid-cols-6 gap-4 w-full">
       <div v-for="card in cards" class="border border-transparent" :class="{owned: isCardOwned(card.id)}" :key="card.id">

          <img :src="card.image">
          <p class="">{{card.card}}</p>
          <p class="">{{card.location}}</p>
          <p class="">{{card.deck}}</p>
          <button @click="toggleCard(card.id)">Toggle</button>
       </div>
   </div>
</template>

<style lang="postcss" scoped>

.owned {
   @apply bg-red-500 border-red-500;
}


</style>
