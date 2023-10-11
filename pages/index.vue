<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";

import { useListStore } from "@/store/dni.js";
import { useWEEKStore } from "@/store/tydzien.js";
const tyd = useWEEKStore();
const done = useListStore(); //pinia
const { $bootstrap } = useNuxtApp();
const modalElement = ref();
const modalisko = ref();
const nuxtApp = useNuxtApp();
let id = 0;
function popup() {
  console.log("dzien dobry");
  modalisko.value = new nuxtApp.$bootstrap.Modal(modalElement.value, {});

  modalisko.value.show();
} //MA POKAZYWAC MODALISKO ALE NIE DZIALA JESZCZE

function dodajDone(zrobione) {
  let i = 0;
  console.log(zrobione.value);

  done.dodaj(zrobione);
}
</script>

<template>
  <!--  <Modalisko ref="modalElement" />-->
  <!--modalisko sie jeszcze nie pokazue-->
  <main class="bg-stone-800">
    <div class="d-flex flex-col mb-2">
      <button
        type="button"
        class="text-emerald-500 text-4xl align-self-end mr-3 mt-3 position-relative"
      >
        <i class="bi bi-list"></i>
      </button>
      <div class="d-flex">
        <div id="welcome" class="text-4xl ml-1 text-stone-100">
          <h1 id="welcomeText">Week plan</h1>
        </div>
      </div>
    </div>

    <div
      class="row align-self-center justify-self-center justify-content-center"
    >
      <div id="NaSrodek" class="d-flex col-11 h-100 p-5">
        <div class="d-flex flex-column text-light w-100">
          <div class="row justify-content-around border-2 border-stone-600">
            <template
              v-for="(day, index) in tyd.WEEK"
              class="border-2 border-stone-100"
            >
              <div v-if="index < 5" class="col-4 day border-5 border-stone-600">
                <div
                  class="w-100 d-flex justify-content-center justify-self-center p-1 text-stone-100 text-3xl mt-1"
                >
                  <tytul :title="day.name" />
                </div>
                <div
                  class="Przesuwanie scroll-smooth hover:scroll-auto touch-auto h-100"
                >
                  <Dzien
                    :title="day.name"
                    :key="index"
                    :items="day.items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
              </div>
              <div
                v-else-if="index === 5"
                class="col-4 weekend border-5 border-stone-600"
              >
                <div
                  class="w-100 d-flex justify-self-center justify-content-center p-1 text-stone-100 text-3xl"
                >
                  <tytul :title="tyd.WEEK[5].name" />
                </div>
                <div class="week scroll-smooth hover:scroll-auto touch-auto">
                  <Dzien
                    :title="tyd.WEEK[5].name"
                    :items="tyd.WEEK[5].items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
                <div
                  id="tytul"
                  class="w-100 d-flex justify-self-center justify-content-center p-1 text-stone-100 text-3xl"
                >
                  <tytul :title="tyd.WEEK[6].name" />
                </div>
                <div class="week scroll-smooth hover:scroll-auto touch-auto">
                  <Dzien
                    :title="tyd.WEEK[6].name"
                    :items="tyd.WEEK[6].items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div
        id="done"
        class="d-flex mt-5 align-self-center justify-self-center justify-content-center"
      >
        <div id="blokDone" class="d-flex flex-column text-light">
          <h2 class="align-self-center p-5 text-4xl">Done this week</h2>
          <div
            class="d-flex flex-column Przesuwanie border-5 border-emerald-600 p-3"
          >
            <draggable
              tag="ul"
              :list="done.Doneitems"
              item-key="id"
              :animation="200"
              ghost-class="moving-card"
              filter=".action-button"
            >
              <template #item="{ element }">
                <DoneList
                  :key="element.idd"
                  :napis="element.text"
                  :items="done.Doneitems"
                />
              </template>
            </draggable>
          </div>
        </div>
      </div>

      <div
        id="notatnik"
        class="d-flex flex-column text-light align-self-center justify-self-center justify-content-center"
      >
        <h2 class="align-self-center text-4xl">Notes</h2>
        <form class="align-self-center d-flex flex-row gap-16 p-6">
          <textarea
            class="border-5 border-emerald-600 p-3 bg-stone-800"
          ></textarea>
          <textarea
            class="border-5 border-emerald-600 p-3 bg-stone-800"
          ></textarea>
          <textarea
            class="border-5 border-emerald-600 p-3 bg-stone-800"
          ></textarea>
        </form>
      </div>
      <div class="border-t-4 border-stone-700 lowbar d-flex flex-row">
        <div class="text-xl text-emerald-500 p-3 align-self-center">
          Natan Smołka
        </div>
        <div class="text-stone-400 align-self-center toright">
          <i class="bi bi-facebook p-2"></i>
          <i class="bi bi-discord p-1"></i>
          <i class="bi bi-github p-2"></i>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  overflow-x: hidden;
  scrollbar-width: thin;

  font-family: "Trebuchet MS", sans-serif;
}
main::-webkit-scrollbar {
  width: 16px;
}
main::-webkit-scrollbar-track {
  background-color: white;
}

#welcome {
  transform: translate(50%, 30%);
  padding: 5px;
}

#blokDone {
  min-width: 5rem;
  width: 60%;
  min-height: 5rem;
  max-height: 60rem;
  height: 30rem;
}
.Przesuwanie {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90%;
}

#NaSrodek {
  min-height: calc(100vh - 89px);
}

#notatnik {
  min-height: 10rem;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
}
textarea {
  padding: 3px;
  width: 100%;
  min-height: 15rem;
  overflow-y: auto;
}
textarea:focus {
  outline: none;
}
.day {
  min-height: 25rem;
  max-height: 25rem;
}
.weekend {
  max-height: 25rem;
}
.week {
  overflow-y: auto;
  overflow-x: hidden;
  height: 40%;
}
.lowbar {
  height: 4rem;
  width: 100%;
}
.toright {
  left: 5px;
}
ul {
  columns: 3 auto;
}
</style>
