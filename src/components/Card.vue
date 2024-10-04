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

const test = "blablabla";

const check: Ref<string> = ref("");
</script>
<template>
  {{ check }}
  <div
    :class="color"
    :style="{
      backgroundColor: check ? backgroundColor : 'transparent',
      color: check ? 'black' : 'white',
    }"
    class="my-2 flex h-16 w-10/12 items-center p-1 px-10 text-black"
  >
    <p class="w-1/3">{{ card.card }}</p>
    <p class="w-1/3">{{ card.location }}</p>
    <p class="w-1/3">{{ card.deck }}</p>
    <input
      v-model="check"
      :true-value="card.card"
      :id="card.id"
      type="checkbox"
    />
  </div>
</template>
<style scoped>
.clippy {
  clip-path: polygon(0 1%, 97% 0, 100% 100%, 0% 100%);
}

.yellow {
  @apply border-4 border-yellow-600 text-white;
}

.green {
  @apply border-4 border-green-600 text-white;
}

.blue {
  @apply border-4 border-blue-600 text-white;
}

.red {
  @apply border-4 border-red-600 text-white;
}

.white {
  @apply border-4 border-gray-600 text-white;
}

.violet {
  @apply border-4 border-violet-600 text-white;
}
</style>
