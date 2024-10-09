<script setup lang="ts">
import { computed } from "vue";
import type { ComputedRef, Ref } from "vue";
const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
const check: Ref<Array<string>> = defineModel<Array<string>>("isChecked", {
  required: true,
});

let color: string = "";

switch (props.card.deck) {
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

const backgroundCheck: ComputedRef<string> = computed(() => {
  if (check.value.includes(props.card.id)) {
    return "bg-" + color + "-600";
  } else {
    return "border-4 border-" + color + "-600 text-white";
  }
});
</script>
<template>
  <div
    :class="backgroundCheck"
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
</style>
