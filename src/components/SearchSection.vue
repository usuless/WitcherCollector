<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
const props = defineProps({
    cardInfo: Object
})

const location: Ref<string> = ref('')
const name: Ref<string> = ref('')
const deck: Ref<string> = ref('')

</script>
<template>
    <div class="flex items-center">
        <div class="mr-5">
            <input v-model="name" class="p-3 rounded-3xl" name="card" type="text">
            <label class="ml-3" for="card">Jaka karta?</label>
        </div>
        <div class="mr-5">
            <input v-model="location" class="p-3 rounded-3xl" name="location" type="text">
            <label class="ml-3" for="location">Gdzie szukasz?</label>
        </div>
        <div class="grid grid-cols-3 grid-row-2">
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Neutralne" name="deck">
                <p>Neutralne</p>
            </div>
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Potwory" name="deck">
                <p>Potwory</p>
            </div>
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Skellige" name="deck">
                <p>Skellige</p>
            </div>
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Nilfgaard" name="deck">
                <p>Nilfgaard</p>
            </div>
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Scoia'tael" name="deck">
                <p>Scoia'tael</p>
            </div>
            <div class="content-between mx-2">
                <input @input="event => deck = event.target.id" class="justify-self-center" type="radio" id="Królestwa Północy" name="deck">
                <p>Królestwa Płn.</p>
            </div>
        </div>
    </div>
</template>
<style scoped></style>