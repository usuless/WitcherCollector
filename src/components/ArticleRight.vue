<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
const props = defineProps({
  data: { type: Object, required: true },
});

let color: Ref = ref("");

switch (props.data.color) {
  case "blue":
    color.value = "#1e40af";
    break;
  case "green":
    color.value = "#166534";
    break;
  case "yellow":
    color.value = "#ca8a04";
    break;
  case "red":
    color.value = "#991b1b";
    break;
  case "violet":
    color.value = "#701a75";
}

const background = {
  backgroundColor: color.value,
};

let col = "blue";
</script>
<template>
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl md:h-96"
      :style="background"
    ></div>

    <div
      :class="`bg-${col}-800`"
      class="w-full rounded-2xl p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <img
        class="h-24 w-24 rounded-full object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
        :src="data.image"
        alt="client photo"
      />

      <div class="mt-2 md:mx-6">
        <div>
          <p class="text-xl font-medium tracking-tight text-white">
            {{ data.title }}
          </p>
        </div>

        <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">
          {{ data.description }}
        </p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.blue {
  @apply bg-blue-800;
}
</style>
