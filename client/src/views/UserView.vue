<script setup lang="ts">
import { onMounted, ref } from "vue";
import { handleCardInfos } from "../controllers/cards";
import ProgressCircle from "../components/ProgressCircle.vue";
import type { Ref } from "vue";

interface stat {
  deck: string;
  count: number;
  maxCount: number;
}

const stats: Ref<stat[]> = ref([]);

onMounted(async () => {
  stats.value = await handleCardInfos(Number(localStorage.getItem("userId")));
});
</script>
<template>
  <ProgressCircle
    v-for="stat in stats"
    :how-many-cards="stat.maxCount"
    :how-many-checks="stat.count"
    :decks-name="stat.deck"
  />
</template>
