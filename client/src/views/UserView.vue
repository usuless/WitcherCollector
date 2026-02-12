<script setup lang="ts">
import { onMounted, ref } from "vue";
import { handleCardInfos } from "../controllers/cards";
import ProgressCircle from "../components/ProgressCircle.vue";
import type { Ref } from "vue";

interface stat {
  deck: string;
  total_count: number;
  owned_count: number;
}

const stats: Ref<stat[]> = ref([]);

onMounted(async () => {
  stats.value = await handleCardInfos(Number(localStorage.getItem("userId")));
});
</script>
<template>
  <div class="grid grid-col-3">
    <div class="" v-for="stat in stats">
      <ProgressCircle
        :how-many-cards="stat.total_count"
        :how-many-checks="stat.owned_count"
        :decks-name="stat.deck"
      />
      <p>{{ stat.deck }}</p>
    </div>
  </div>
</template>
