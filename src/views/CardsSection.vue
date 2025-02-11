<script setup lang="ts">
import type { Ref } from "vue";
import type { Deck } from "../assets/types/types";
import { computed, ref, watch } from "vue";
import { refDebounced, useStorage } from "@vueuse/core";

import cards from "../assets/data/cards.json";
import Card from "../components/Card.vue";
import SearchSection from "../components/SearchSection.vue";
import ProgressCircle from "../components/ProgressCircle.vue";

const searchLocation: Ref<string> = ref("");
const searchName: Ref<string> = ref("");
const deckName: Ref<Array<string>> = ref([]);
const filterChecked: Ref<boolean> = ref(false);

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
  <div class="flex flex-col items-center justify-center">
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
    <div class="grid w-8/12 grid-cols-6 gap-4">
      <Card
        v-for="card in finalFilter"
        :card="card"
        v-model:isChecked="checkedIDs"
        :key="card.id"
      />
    </div>
  </div>
</template>
