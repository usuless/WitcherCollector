<script setup lang="ts">
import { ref, computed } from "vue";
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

let color: Ref<string> = ref("");

switch (props.card.deck) {
  case "Neutralne":
    color.value = "#cbd5e1";
    break;
  case "Potwory":
    color.value = "#991b1b";
    break;
  case "Królestwa Północy":
    color.value = "#1e40af";
    break;
  case "Scoia'tael":
    color.value = "#3f6212";
    break;
  case "Nilfgaard":
    color.value = "#ca8a04";
    break;
  case "Skellige":
    color.value = "#6b21a8";
    break;
}

const backgroundCheck: ComputedRef<{}> = computed(() => {
  if (check.value.includes(props.card.id)) {
    return {
      backgroundColor: color.value,
      color: "black",
    };
  } else {
    return { border: `2px solid ${color.value}` };
  }
});
</script>
<template>
  <div
    :style="backgroundCheck"
    class="my-2 flex flex-col items-center justify-between rounded-xl px-10 py-5 text-xl shadow-xl"
  >
    <img v-lazy="{ src: `${card.image}` }" />
    <p class="card-title mb-2">{{ card.card }}</p>
    <p class="">{{ card.location }}</p>
    <input
      v-model="check"
      :value="card.id"
      :id="card.id"
      class="checkbox-accent checkbox mt-4"
      type="checkbox"
    />
  </div>
</template>
