<script setup lang="ts">
import { computed } from "vue";
import { VeProgress } from "vue-ellipse-progress";

const howManyCards = defineModel<number>("howManyCards", { required: true });
const howManyChecks = defineModel<number>("howManyChecks", { required: true });

const actualPercentage = computed(() => {
  return Math.floor((100 * howManyChecks.value) / howManyCards.value);
});
</script>

<template>
  <VeProgress class="my-5" :progress="actualPercentage" :thickness="15" />
</template>
