<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const deck: string = props.card.deck;

let color = "";
let backgroundColor = "";
switch (deck) {
  case "Neutralne":
    color = "white";
    backgroundColor = "white";
    break;
  case "Potwory":
    color = "red";
    backgroundColor = "red";
    break;
  case "Królestwa Północy":
    color = "blue";
    backgroundColor = "blue";
    break;
  case "Scoia'tael":
    color = "green";
    backgroundColor = "green";
    break;
  case "Nilfgaard":
    color = "yellow";
    backgroundColor = "yellow";
    break;
  case "Skellige":
    color = "violet";
    backgroundColor = "violet";
    break;
}

let check: Ref<string> = ref("");
</script>
<template>
  <div
    :class="color"
    :style="{
      backgroundColor: check ? backgroundColor : 'transparent',
      color: check ? 'black' : 'white',
    }"
    class="flex w-10/12 h-16 items-center text-black my-2 p-1 px-10"
  >
    <p class="w-1/3">{{ card.card }}</p>
    <p class="w-1/3">{{ card.location }}</p>
    <p class="w-1/3">{{ card.deck }}</p>
    <input
      v-model="check"
      true-value="true"
      false-value=""
      :value="check"
      type="checkbox"
    />
  </div>
</template>
<style scoped>
.clippy {
  clip-path: polygon(0 1%, 97% 0, 100% 100%, 0% 100%);
}

.yellow {
  @apply border-yellow-600 border-4 text-white;
}

.green {
  @apply border-green-600 border-4 text-white;
}

.blue {
  @apply border-blue-600 border-4 text-white;
}

.red {
  @apply border-red-600 border-4 text-white;
}

.white {
  @apply border-gray-600 border-4 text-white;
}

.violet {
  @apply border-violet-600 border-4 text-white;
}
</style>
