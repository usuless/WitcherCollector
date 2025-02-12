<script setup lang="ts">
import CardsView from "./CardsView.vue";
const model = defineModel();
</script>
<template>
  <section>
    <div
      class="hero w-screen"
      style="
        background-image: url(https://cdn.mos.cms.futurecdn.net/DyEgjihUZNbqx3XAbRUzSd.jpg.webp);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Witcher Collector</h1>
          <p class="mb-5">
            Masz już dość zadania pełna kolekcja kart w twoim dzienniku? Zbierz
            wszystkie karty za pomocą naszej strony!
          </p>
          <button @click="model = CardsView" class="btn btn-primary">
            <p class="text-lg">Karty</p>
            <svg
              class="h-6 w-6 text-gray-800 dark:text-black"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
