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
</script>
<template>
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl md:h-64"
      :style="background"
    ></div>

    <div
      :style="background"
      class="w-full rounded-2xl p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        :src="data.image"
        alt="Northern Realms"
      />

      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">
          {{ data.title }}
        </p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          {{ data.description }}
        </p>
      </div>
    </div>
  </main>
</template>
