<script setup lang="ts">
import type { Ref } from "vue";
import type { Deck } from "../assets/types/types";
import { computed, ref, watch } from "vue";
import { refDebounced, useStorage } from "@vueuse/core";

import cards from "../assets/data/cards.json";
import Card from "./Card.vue";
import SearchSection from "./SearchSection.vue";
import ProgressCircle from "./ProgressCircle.vue";

const searchLocation: Ref<string> = ref("");
const searchName: Ref<string> = ref("");
const deckName: Ref<Array<string>> = ref([]);
const filterChecked: Ref<boolean> = ref(false);

const LocalStorageChecks = [
  0, 197, 107, 133, 55, 37, 40, 131, 102, 92, 63, 136, 56, 84, 139, 140, 33,
  128, 142, 88, 6, 7, 9, 10, 14, 15, 24, 43, 49, 59, 75, 81, 104, 105, 114, 115,
  116, 118, 143, 146, 147, 151, 156, 161, 163, 168, 172, 173, 183, 193, 162,
  185, 141, 69, 13, 100, 145, 25, 31, 28, 8, 47, 122, 159, 164, 106, 94, 184,
  16, 19, 39, 76, 198, 27, 96, 121, 99, 189, 187,
];

const fixed = JSON.stringify(LocalStorageChecks);

let checkedIDs = useStorage("checkedDecks", ref([fixed]));

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
  <SearchSection
    v-model:location="searchLocation"
    v-model:name="searchName"
    v-model:decks="deckName"
    v-model:filterChecked="filterChecked"
  />
  <ProgressCircle
    v-model:howManyCards="cards.length"
    v-model:howManyChecks="checkedIDs.length"
  />
  <div class="grid grid-cols-3 gap-4">
    <Card
      v-for="card in finalFilter"
      :card="card"
      v-model:isChecked="checkedIDs"
      :key="card.id"
    />
  </div>
</template>
