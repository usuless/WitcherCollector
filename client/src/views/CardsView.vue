<script setup lang="ts">
import type { Ref } from "vue";
import type { Deck } from "../assets/types/types";
import { computed, onBeforeMount, ref, watch } from "vue";
import { refDebounced, useStorage } from "@vueuse/core";
import { handleGetCards, handleGetAcquiredCards } from "../controllers/cards";
import Card from "../components/Card.vue";
import SearchSection from "../components/SearchSection.vue";
import ProgressCircle from "../components/ProgressCircle.vue";
import { RouterLink } from "vue-router";

const searchLocation: Ref<string> = ref("");
const searchName: Ref<string> = ref("");
const deckName: Ref<Array<string>> = ref([]);
const filterChecked: Ref<boolean> = ref(false);
const tempCards: Ref<Array<Deck>> | undefined = ref([]);
const cardsNum = 252;

let checkedIDs = useStorage("checkedDecks", ref([]));

const filteredDecks = computed(() => {
  if (deckName.value.length === 0) return tempCards!.value;

  return tempCards!.value.filter((item: Deck) =>
    deckName.value.includes(item.deck),
  );
});

const filteredChecks = computed(() => {
  if (filterChecked.value === false) {
    return filteredDecks.value;
  }

  return filteredDecks.value.filter(
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

//@ts-ignore
const finalFilter: Ref<Array<Deck>> = ref();

const debounced = refDebounced(filteredNames, 700);
watch(debounced, () => (finalFilter.value = filteredNames.value));
watch(checkedIDs, () =>
  localStorage.setItem("checkedDecks", JSON.stringify(checkedIDs.value)),
);

onBeforeMount(async () => {
  finalFilter.value = await handleGetCards();
  console.log(handleGetAcquiredCards(7));
});
</script>
<template>
  <div class="flex flex-col items-center justify-between">
    <RouterLink to="/">
      <button class="btn btn-primary mb-5">
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
    </RouterLink>
    <SearchSection
      v-model:location="searchLocation"
      v-model:name="searchName"
      v-model:decks="deckName"
      v-model:filterChecked="filterChecked"
    />
    <ProgressCircle
      v-model:howManyCards="cardsNum"
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
