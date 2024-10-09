<script setup lang="ts">
import { computed } from "vue";
import type { Ref } from "vue";
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
const check: Ref<Array<string>> = defineModel<Array<string>>("isChecked", {
  required: true,
});

const deck: string = props.card.deck;

let color: string | {} = "";
switch (deck) {
  case "Neutralne":
    color = "white";
    break;
  case "Potwory":
    color = "red";
    break;
  case "Królestwa Północy":
    color = "blue";
    break;
  case "Scoia'tael":
    color = "green";
    break;
  case "Nilfgaard":
    color = "yellow";
    break;
  case "Skellige":
    color = "violet";
    break;
}

const backgroundCheck = computed(() => {
  if (check.value.includes(props.card.id)) {
    return "background-color: red";
  } else {
    return "background-color: green";
  }
});
</script>
<template>
  <div
    :style="backgroundCheck"
    :class="color"
    class="my-2 flex flex-col items-center px-10 py-5 text-black"
  >
    <img :src="card.image" alt="" />
    <p class="">{{ card.card }}</p>
    <p class="">{{ card.location }}</p>
    <p class="">{{ card.deck }}</p>
    <input
      v-model="check"
      :value="card.id"
      :id="card.id"
      class="checkbox"
      type="checkbox"
    />
  </div>
</template>
<style scoped>
.checkbox {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 5px;
  border: 2px solid #555;
  @apply my-3;
}

.checkedCard {
  color: yellow;
}

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
