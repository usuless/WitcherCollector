<script setup lang="ts">
import { defineModel, defineEmits, ref, type Ref } from 'vue';

const locationModel = defineModel<string>('location', {required:true});
const nameModel = defineModel<string>('name', {required:true});
const currentDecksModel: Ref<Array<string>> = defineModel<Array<string>>('decks', {required: true}) 



type Deck = {
    name: string
}

const decksGrouping: Array<Deck> = [
    {name: "Neutralne"},
    {name: "Skellige"},
    {name: "Scoia'tael"},
    {name: "Nilfgaard"},
    {name: "Królestwa Północy"},
    {name: "Potwory"}
]

</script>
<template>
    DEKI 
    <pre>
        {{  currentDecksModel }}
    </pre>
    <div class="flex items-center">
        <div class="mr-5">
            <input v-model="nameModel" class="p-3 rounded-3xl" name="card" type="text">
            <label class="ml-3" for="card">Jaka karta?</label>
        </div>
        <div class="mr-5">
            <input v-model="locationModel" class="p-3 rounded-3xl" name="location" type="text">
            <label class="ml-3" for="location">Gdzie szukasz?</label>
        </div>
        <div class="grid grid-cols-3 grid-row-2">
            <div class="content-between mx-2" v-for="deck in decksGrouping" :key="deck.name">
                <input type="checkbox" :value="deck.name" :id="deck.name" v-model="currentDecksModel" class="justify-self-center">
                <label :for="deck.name"><p>{{deck.name}}</p></label>
            </div>
        </div>
    </div>
</template>