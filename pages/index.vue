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
  <Modalisko ref="modalElement" />
  <!--modalisko sie jeszcze nie pokazue-->
  <main class="bg-stone-900">
    <div class="d-flex w-100 position-relative p-3">
      <div id="welcome" class="p-3 text-5xl text-stone-100">
        <h1 id="welcomeText">MAM PLAN</h1>
      </div>
    </div>

    <div class="row">
      <div id="NaSrodek" class="d-flex col-9 h-100 p-5">
        <div class="d-flex flex-column text-light w-100">
          <div class="row p-4 justify-content-around">
            <template v-for="(day, index) in tyd.WEEK" class="">
              <div
                v-if="index < 5"
                class="col-4 day outline-emerald-700 outline outline-2"
              >
                <div
                  class="w-100 d-flex justify-content-center align-self-center p-1 text-stone-500 text-2xl mt-1"
                >
                  <tytul :title="day.name" />
                </div>
                <div
                  class="Przesuwanie scroll-smooth hover:scroll-auto touch-auto"
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
                class="col-4 weekend outline-emerald-700 outline outline-2"
              >
                <div class="w-100 d-flex justify-content-center">
                  <tytul :title="tyd.WEEK[5].name" />
                </div>
                <div class="week scroll-smooth hover:scroll-auto touch-auto">
                  <Dzien
                    :title="tyd.WEEK[5].name"
                    :items="tyd.WEEK[5].items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
                <div id="tytul" class="w-100 d-flex justify-content-center">
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
      <div class="d-flex flex-column col-3 p-5">
        <div id="done" class="d-flex flex-column p-4">
          <div id="blokDone" class="d-flex flex-column text-light">
            <h2 class="align-self-center p-1">Done</h2>
            <div class="d-flex flex-column Przesuwanie">
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

          <div id="notatnik" class="d-flex flex-column text-light">
            <h2 class="align-self-center p-2 text-emerald-500 text-xl">
              Notatki
            </h2>
            <form class="h-100 outline outline-offset-2 outline-cyan-500">
              <textarea
                class="caret-emerald-500 text-emerald-500 rounded-b-md focus:outline-none focus:ring focus-ring focus:ring-emerald-500 bg-stone-700 focus:bg-stone-600 focus:shadow-inner"
              ></textarea>
            </form>
            <div id="" class="d-flex flex-column"></div>
          </div>
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
}
main::-webkit-scrollbar {
  width: 16px;
}
main::-webkit-scrollbar-track {
  background-color: white;
}
#welcomeText {
  font-weight: 900;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -10%);
}

#blokDone {
  min-width: 5rem;
  min-height: 5rem;
  max-height: 25rem;
}
.Przesuwanie {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 90%;
}

#NaSrodek {
  min-height: calc(100vh - 89px);
}

#done {
  min-height: calc(100vh - 89px);
}

#notatnik {
  min-height: 10rem;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 4rem;
}
textarea {
  padding: 3px;
  width: 100%;
  min-height: 15rem;
  overflow-y: auto;
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
</style>
