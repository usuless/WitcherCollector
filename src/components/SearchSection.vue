<script setup lang="ts">
import { defineModel } from "vue";

const locationModel = defineModel<string>("location", { required: true });
const nameModel = defineModel<string>("name", { required: true });
const currentDecksModel = defineModel<Array<string>>("decks", {
  required: true,
});
const checkedFilter = defineModel<boolean>("filterChecked", { required: true });

type Deck = {
  name: string;
};

const decksGrouping: Array<Deck> = [
  { name: "Neutralne" },
  { name: "Skellige" },
  { name: "Scoia'tael" },
  { name: "Nilfgaard" },
  { name: "Królestwa Północy" },
  { name: "Potwory" },
];
</script>
<template>
  <div class="inline md:flex">
    <div class="mr-5 flex flex-col">
      <label class="mx-5 py-4" for="card">Jaka karta?</label>
      <input
        v-model="nameModel"
        class="rounded-3xl p-3"
        name="card"
        type="text"
      />
    </div>
    <div class="mr-5 flex flex-col">
      <label class="mx-5 py-4" for="location">Gdzie szukasz?</label>
      <input
        v-model="locationModel"
        class="rounded-3xl p-3"
        name="location"
        type="text"
      />
    </div>
    <div class="grid grid-cols-3">
      <div
        class="mx-2 my-3 content-between"
        v-for="deck in decksGrouping"
        :key="deck.name"
      >
        <input
          type="checkbox"
          :value="deck.name"
          :id="deck.name"
          v-model="currentDecksModel"
          class="justify-self-center"
        />
        <label :for="deck.name"
          ><p>{{ deck.name }}</p></label
        >
      </div>
    </div>
    <div class="py-4">
      <button @click="checkedFilter = !checkedFilter" v-if="checkedFilter">
        Pokaż zdobyte
      </button>
      <button @click="checkedFilter = !checkedFilter" v-else>
        Ukryj zdobyte
      </button>
    </div>
  </div>
</template>
