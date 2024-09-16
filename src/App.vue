<script setup lang="ts">
import Head from './components/Head.vue';
import data from "./assets/data/cards.json"

let cardsData = data
</script>

<template>
 <Head/>
 <div v-for="card in cardsData" class="">
    <p>{{card.Card}}</p>
 </div>
</template>

<style scoped>

</style>
