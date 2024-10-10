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
    color.value = "white";
    break;
  case "Potwory":
    color.value = "red";
    break;
  case "Królestwa Północy":
    color.value = "blue";
    break;
  case "Scoia'tael":
    color.value = "green";
    break;
  case "Nilfgaard":
    color.value = "yellow";
    break;
  case "Skellige":
    color.value = "violet";
    break;
}

const backgroundCheck: ComputedRef<{}> = computed(() => {
  if (check.value.includes(props.card.id)) {
    return {
      backgroundColor: color.value,
      opacity: 0.2,
      color: "black",
      fontWeight: "bold",
    };
  } else {
    return { border: `2px solid ${color.value}` };
  }
});
</script>
<template>
  <div
    :style="backgroundCheck"
    class="text-yellow my-2 flex flex-col items-center px-10 py-5"
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
