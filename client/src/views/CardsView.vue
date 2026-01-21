<script setup lang="ts">
import type { Ref } from "vue";
import type { Deck } from "../assets/types/types";
import { computed, ref, watch } from "vue";
import { refDebounced, useStorage } from "@vueuse/core";
import HomeView from "./HomeView.vue";

import cards from "../assets/data/cards.json";
import Card from "../components/Card.vue";
import SearchSection from "../components/SearchSection.vue";
import ProgressCircle from "../components/ProgressCircle.vue";

const searchLocation: Ref<string> = ref("");
const searchName: Ref<string> = ref("");
const deckName: Ref<Array<string>> = ref([]);
const filterChecked: Ref<boolean> = ref(false);
const model = defineModel();

let checkedIDs = useStorage("checkedDecks", ref([]));

const filteredDecks = computed(() => {
  if (deckName.value.length === 0) return cards;

  return cards.filter((item: Deck) => deckName.value.includes(item.deck));
});

const filteredChecks = computed(() => {
  if (filterChecked.value === false) {
    return filteredDecks.value;
  }

  return filteredDecks.value.filter(
    // @ts-ignore
    (item) => !(checkedIDs.value as Array<number>).includes(item.id),
  );
});

const filteredLocation = computed(() => {
  return filteredChecks.value.filter((item: Deck) =>
    item.location.toLowerCase().includes(searchLocation.value.toLowerCase()),
  );
});

const filteredNames = computed(() => {
  return filteredLocation.value.filter((item: Deck) =>
    item.card.toLowerCase().includes(searchName.value.toLowerCase()),
  );
});

const finalFilter: Ref<Array<Deck>> = ref(cards);

const debounced = refDebounced(filteredNames, 700);
watch(debounced, () => (finalFilter.value = filteredNames.value));
watch(checkedIDs, () =>
  localStorage.setItem("checkedDecks", JSON.stringify(checkedIDs.value)),
);
</script>
<template>
  <div class="flex flex-col items-center justify-between">
    <div class="">
      <button class="btn btn-primary mb-5" @click="model = HomeView">
        <svg
          class="h-6 w-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
        <p class="pb-1 text-xl">Home Page</p>
      </button>
      <SearchSection
        v-model:location="searchLocation"
        v-model:name="searchName"
        v-model:decks="deckName"
        v-model:filterChecked="filterChecked"
      />
    </div>
    <ProgressCircle
      v-model:howManyCards="cards.length"
      v-model:howManyChecks="checkedIDs.length"
    />
    <div class="flex flex-col items-center justify-center">
      <Card
        v-for="card in finalFilter"
        :card="card"
        v-model:isChecked="checkedIDs"
        :key="card.id"
      />
    </div>
  </div>
</template>
