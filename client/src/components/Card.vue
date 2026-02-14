<script setup lang="ts">
import { ref, computed } from "vue";
import type { ComputedRef, Ref } from "vue";
import { handlePutCards } from "../controllers/cards";
import { colorCheck } from "../scripts/colorCheck";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});
const check: Ref<Array<string>> = defineModel<Array<string>>("isChecked", {
  required: true,
});

let color: Ref<string> = ref(colorCheck(props.card.deck));

const handleCheck = async () => {
  const userId = localStorage.getItem("userId");
  console.log(userId);

  if (userId) {
    handlePutCards(props.card.id, Number(userId));
  }
};

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

const modalRef = ref<HTMLDialogElement | null>(null);

const openModal = () => {
  modalRef.value?.showModal();
};
</script>

<template>
  <div
    :style="backgroundCheck"
    class="my-4 grid grid-cols-5 text-start w-8/12 rounded-xl px-10 py-5 text-xl shadow-md cursor-pointer"
    @click="openModal"
  >
    <p class="card-title mb-2 font-bold col-span-2">{{ card.card }}</p>
    <p class="col-span-2">{{ card.location }}</p>

    <input
      v-model="check"
      :value="card.id"
      class="checkbox-accent checkbox size-10 justify-self-end"
      type="checkbox"
      @click.stop="handleCheck"
    />
  </div>

  <dialog ref="modalRef" class="modal">
    <div class="modal-box grid grid-cols-2">
      <img :src="card.image" alt="" />
      <div class="">
        <h3 class="text-lg font-bold">Karta: {{ card.card }}</h3>
        <p class="py-4">Lokalizacja: {{ card.location }}</p>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Zamknij</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button class="bg-inherit">close</button>
    </form>
  </dialog>
</template>
