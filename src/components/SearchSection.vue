<script setup lang="ts">
import { defineModel, defineEmits, ref} from 'vue';

let locationModel = defineModel<string>('location', {required:true});
let nameModel = defineModel<string>('name', {required:true});
let emit = defineEmits<{
    decks: [decks: Array<string>]
}>()

let currentDeck: Array<string> = []

const findDeck = (event: any) => {
    if (currentDeck.includes(event.target.id)) {
        console.log("zawiera i przed: " + currentDeck)
        currentDeck = currentDeck.filter(item => item != event.target.id)
        console.log("zawiera i po: " + currentDeck)
        emit('decks', currentDeck)
    } else {
        console.log("nie zawiera i przed: " + currentDeck)
        currentDeck.push(event.target.id)
        console.log("nie zawiera i po: " + currentDeck)
        emit('decks', currentDeck)
    }
}

const model = ref("")

/* 

1. spróbować rozłożyć @click

2. sprawdzić watchera

3. sprawdzić biblioteki

*/

</script>
<template>
    <button @click="console.log(model)">CLICK</button>
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
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" v-model="model" :true-value="'asd'" class="justify-self-center" type="checkbox" id="Neutralne" name="deck">
                <p>Neutralne</p>
            </div>
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" class="justify-self-center" type="checkbox" id="Potwory" name="deck">
                <p>Potwory</p>
            </div>
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" class="justify-self-center" type="checkbox" id="Skellige" name="deck">
                <p>Skellige</p>
            </div>
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" class="justify-self-center" type="checkbox" id="Nilfgaard" name="deck">
                <p>Nilfgaard</p>
            </div>
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" class="justify-self-center" type="checkbox" id="Scoia'tael" name="deck">
                <p>Scoia'tael</p>
            </div>
            <div class="content-between mx-2">
                <input @change="(event) => findDeck(event)" class="justify-self-center" type="checkbox" id="Królestwa Północy" name="deck">
                <p>Królestwa Płn.</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>