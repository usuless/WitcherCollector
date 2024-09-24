<script setup lang="ts">
import { defineModel} from 'vue';

let locationModel = defineModel<string>('location', {required:true});
let nameModel = defineModel<string>('name', {required:true});
let deckModel = defineModel<string>('deck', {required:true})

</script>
<template>
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
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Neutralne" name="deck">
                <p>Neutralne</p>
            </div>
            <div class="content-between mx-2">
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Potwory" name="deck">
                <p>Potwory</p>
            </div>
            <div class="content-between mx-2">
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Skellige" name="deck">
                <p>Skellige</p>
            </div>
            <div class="content-between mx-2">
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Nilfgaard" name="deck">
                <p>Nilfgaard</p>
            </div>
            <div class="content-between mx-2">
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Scoia'tael" name="deck">
                <p>Scoia'tael</p>
            </div>
            <div class="content-between mx-2">
                <input v-model="deckModel" class="justify-self-center" type="radio" id="Królestwa Północy" name="deck">
                <p>Królestwa Płn.</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>