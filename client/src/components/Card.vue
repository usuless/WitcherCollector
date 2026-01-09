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
    color.value = "rgba(203, 213, 225, 0.5)";
    break;
  case "Potwory":
    color.value = "rgba(153, 27, 27, 0.5)";
    break;
  case "Królestwa Północy":
    color.value = "rgba(30,64,175,0.5)";
    break;
  case "Scoia'tael":
    color.value = "rgba(63,98,18,0.5)";
    break;
  case "Nilfgaard":
    color.value = "rgba(202,138,4,0.5)";
    break;
  case "Skellige":
    color.value = "rgba(107,33,168,0.5)";
    break;
}

const backgroundCheck: ComputedRef<{}> = computed(() => {
  if (check.value.includes(props.card.id)) {
    return {
      backgroundColor: color.value,
      border: `2px solid ${color.value}`,
      textShadow: "1px 1px 5px rgba(0,0,0,0.6)",
    };
  } else {
    return { border: `2px solid ${color.value}` };
  }
});
</script>
<template>
  <div
    :style="backgroundCheck"
    class="my-2 flex flex-col items-center justify-between rounded-xl px-10 py-5 text-xl shadow-md"
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
