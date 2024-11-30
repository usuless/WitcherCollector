<script setup lang="ts">
import { computed } from "vue";
import CircleProgress from "vue3-circle-progress";

const howManyCards = defineModel<number>("howManyCards", { required: true });
const howManyChecks = defineModel<number>("howManyChecks", { required: true });

const actualPercentage = computed(() => {
  return (100 * howManyChecks.value) / howManyCards.value;
});

console.log(actualPercentage.value);
</script>

<template>
  <CircleProgress :percent="actualPercentage" :show-percent="true" />
</template>
