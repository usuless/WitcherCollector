<script setup lang="ts">
import { computed } from "vue";
import { VeProgress } from "vue-ellipse-progress";
import { colorCheck } from "../scripts/colorCheck";

const howManyCards = defineModel<number>("howManyCards", { required: true });
const howManyChecks = defineModel<number>("howManyChecks", { required: true });
const decksName = defineModel<string>("decksName", { required: false });

const actualPercentage = computed(() => {
  return Math.floor((100 * howManyChecks.value) / howManyCards.value);
});
</script>
<template>
  <VeProgress
    class="my-5"
    :progress="actualPercentage"
    :thickness="15"
    :color="colorCheck(decksName!)"
  >
    <template #default="{ counterTick }">
      <P class="text-2xl"> {{ counterTick.currentValue }}% </P>
    </template>
  </VeProgress>
</template>
