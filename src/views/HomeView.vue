<script setup lang="ts">
import CardsView from "./CardsView.vue";
const model = defineModel();
</script>
<template>
  <section>
    <header
      class="hero w-screen"
      style="
        background-image: url(https://cdn.mos.cms.futurecdn.net/DyEgjihUZNbqx3XAbRUzSd.jpg.webp);
      "
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Witcher Collector</h1>
          <p class="mb-5">
            Masz już dość zadania pełna kolekcja kart w twoim dzienniku? Zbierz
            wszystkie karty za pomocą naszej strony!
          </p>
          <button @click="model = CardsView" class="btn btn-primary">
            <p class="mb-2 text-2xl">Karty</p>
            <svg
              class="h-8 w-8 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </section>
  <!-- Królestwa północy -->
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl bg-blue-800 opacity-60 md:h-64"
    ></div>

    <div
      class="w-full rounded-2xl bg-blue-800 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        src="https://gwent.one/image/assets/cardback/default-northern_realms.png"
        alt="Northern Realms"
      />

      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">
          Za Temerię!
        </p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Potężne maszyny oblężnicze, horda szpiegów i cholernie dobre morale.
          To jest taktyka Królestw Północy, dzięki której nawet przy pomocy
          małych oddziałów potrafią pokonać przeciwnika. Daj Foltestowi
          poprowadzić się do zwycięstwa!
        </p>
      </div>
    </div>
  </main>
  <!-- Scoia' tael -->
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl bg-green-800 opacity-60 md:h-64"
    ></div>

    <div
      class="w-full rounded-2xl bg-green-800 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">Za Eithne!</p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Najpotężniejsza partyzantka kontynentu zjednoczona, by zdobyć
          niepodległość dla swojego ludu. Potężne jednostki wspierające i
          rotacja bohaterów pomoże ci zdobyć przewagę na polu bitwy!
        </p>
      </div>
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        src="https://gwent.one/image/assets/cardback/default-scoiatael.png"
        alt="Northern Realms"
      />
    </div>
  </main>
  <!-- Potwory -->
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl bg-red-800 opacity-60 md:h-64"
    ></div>

    <div
      class="w-full rounded-2xl bg-red-800 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        src="https://gwent.one/image/assets/cardback/default-monster.png"
        alt="Northern Realms"
      />

      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">
          Za Dziki Gon!
        </p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Hordy potworów zalewające arenę potrafią wyprowadzić przeciwnika z
          równowagi. Tym bardziej, jeżeli towarzyszą im potężne bonusy! Dlatego
          bez oporów naślij Wiedźmy z Krzywuchowych Moczarów, bądź hordę
          krwiożerczych wampirów na swojego oponenta. Niech rozpęta się rzeź!
        </p>
      </div>
    </div>
  </main>
  <!-- Nilfgaard -->
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl bg-yellow-600 opacity-60 md:h-64"
    ></div>

    <div
      class="w-full rounded-2xl bg-yellow-600 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">Za Emhyra!</p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Zorganizowane wojsko, potężni dowódcy i strategiczny balans to klucz
          do dominacji, a kto może ten klucz zapewnić lepiej, niż biały płomień
          tańczący na kurchanach wrogów, Emhyr van Emreis!
        </p>
      </div>
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        src="https://gwent.one/image/assets/cardback/default-nilfgaard.png"
        alt="Northern Realms"
      />
    </div>
  </main>
  <!-- Skellige -->
  <main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
    <div
      class="absolute -z-10 w-full rounded-2xl bg-violet-800 opacity-60 md:h-64"
    ></div>

    <div
      class="w-full rounded-2xl bg-violet-800 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
    >
      <img
        class="object-cover shadow-md md:mx-6 md:h-[16rem] md:rounded-2xl lg:h-[28rem]"
        src="https://gwent.one/image/assets/cardback/default-skellige.png"
        alt="Northern Realms"
      />

      <div class="flex flex-col justify-center md:mx-6">
        <p class="text-4xl font-medium tracking-tight text-white">
          Za Króla Brana!
        </p>
        <p class="mt-4 text-lg leading-relaxed text-white md:text-2xl">
          Lodowy klimat Skellige nie przeszkadza jego mieszkańcom na posiadanie
          rozgrzanej krwi, którą przelewają od wieków stając się przy tym
          mistrzami w bitewnym fachu. Teraz pod wodzą Caerys, potężniejsi
          bardziej niż kiedykolwiek stawią czoła każdemu wyzwaniu!
        </p>
      </div>
    </div>
  </main>
</template>
<style>
.url {
  background-image: url("https://preview.redd.it/9c1xi00eyj971.jpg?auto=webp&s=a7d81bc605c6a8b4f5f2b8fda894f698e1d6ca22");
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  background-size: cover;
}
</style>
