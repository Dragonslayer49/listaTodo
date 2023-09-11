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
  <main>
    <div class="d-flex w-100 position-relative p-3">
      <div id="welcome" class="p-3">
        <h1 id="welcomeText">MAM PLAN</h1>
      </div>
    </div>

    <div class="row">
      <div id="NaSrodek" class="d-flex col-9 h-100 p-5">
        <div class="d-flex flex-column text-light w-100">
          <div class="row p-4 justify-content-around">
            <template v-for="(day, index) in tyd.WEEK" class="">
              <div v-if="index < 5" class="col-4 day">
                <tytul :title="day.name" />
                <div class="przesuanie">
                  <Dzien
                    :title="day.name"
                    :key="index"
                    :items="day.items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
              </div>
              <div v-else-if="index === 5" class="col-4 weekend">
                <div class="w-100 d-flex justify-content-center">
                  <tytul :title="tyd.WEEK[5].name" />
                </div>
                <div class="week">
                  <Dzien
                    :title="tyd.WEEK[5].name"
                    :items="tyd.WEEK[5].items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
                <div class="w-100 d-flex justify-content-center">
                  <tytul :title="tyd.WEEK[6].name" />
                </div>
                <div class="week">
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
        <div id="done" class="d-flex flex-column">
          <div id="blokDone" class="d-flex flex-column text-light">
            <h2 class="align-self-center p-1">Done</h2>
            <div id="Przesuwanie" class="d-flex flex-column">
              <ul>
                <draggable :list="done.Doneitems" item-key="id">
                  <template #item="{ element }">
                    <DoneList
                      :key="element.idd"
                      :napis="element.text"
                      :items="done.Doneitems"
                    />
                  </template>
                </draggable>
              </ul>
            </div>
          </div>

          <div id="notatnik" class="d-flex flex-column text-light">
            <h2 class="align-self-center p-1">Notatki</h2>
            <form class="h-100"><textarea></textarea></form>
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
  font-family: "ＭＳ Ｐゴシック";
  background-color: #000000;
  overflow-x: hidden;
  color: #ffffff;
}

#welcomeText {
  font-weight: 900;
  color: #ffffff;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -10%);
}

#blokDone {
  min-width: 20rem;
  min-height: 5rem;
  max-height: 25rem;
  background-color: #ffffff;
}
#Przesuwanie {
  overflow-y: auto;
  overflow-x: hidden;
}

#NaSrodek {
  min-height: calc(100vh - 89px);
}

#done {
  min-height: calc(100vh - 89px);
}

#notatnik {
  color: black;
  min-height: 10rem;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #ffffff;
  margin-top: 4rem;
  border-bottom: 5px solid #ffa0a0;
}
textarea {
  background-color: #ffffff;
  border-style: none;
  padding: 3px;
  width: 100%;
  color: #000000;
  min-height: 15rem;
  overflow-y: auto;
}
.day {
  min-height: 25rem;
  max-height: 25rem;
  outline-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: #ffffff;
  background-color: #ffffff;
  color: #000000;
}
.weekend {
  max-height: 25rem;
  outline-style: solid;
  border-radius: 2px;
  border-width: 2px;
  border-color: #000000;
  background-color: #ffffff;
  color: #000000;
}
.week {
  height: 50%;
}
</style>
