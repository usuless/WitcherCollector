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
    <div class="flex flex-col justify-around">
      <input
        v-model="nameModel"
        class="w-fullmax-w-xs input input-bordered"
        name="card"
        placeholder="Jaka Karta?"
        type="text"
      />
      <input
        v-model="locationModel"
        class="w-fullmax-w-xs input input-bordered"
        name="location"
        placeholder="Gdzie szukasz?"
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
          class="justify-self- checkbox"
        />
        <label :for="deck.name"
          ><p>{{ deck.name }}</p></label
        >
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <button
        class="btn btn-neutral"
        @click="checkedFilter = !checkedFilter"
        v-if="checkedFilter"
      >
        Pokaż zdobyte
      </button>
      <button
        @click="checkedFilter = !checkedFilter"
        v-else
        class="btn btn-outline btn-neutral"
      >
        Ukryj zdobyte
      </button>
    </div>
  </div>
</template>
