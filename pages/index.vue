<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";

import { useListStore } from "@/store/dni.js";
const done = useListStore(); //pinia
const { $bootstrap } = useNuxtApp();
const modalElement = ref();
const modalisko = ref();
const nuxtApp = useNuxtApp();
let id = 0;
let idd = 0;
// const items = ref([{id: id++, text: 'One'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])

const WEEK = ref([
  {
    name: "MONDAY",
    items: [],
  },
  {
    name: "TUESDAY",
    items: [],
  },
  {
    name: "WEDNSDAY",
    items: [],
  },
  {
    name: "THURDAY",
    items: [],
  },
  {
    name: "FRIDAY",
    items: [],
  },
  {
    name: "SATURDAY",
    items: [],
  },
  {
    name: "SUNDAY",
    items: [],
  },
]);

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
    <div class="d-flex w-100 position-relative">
      <div id="welcome" class="">
        <h1 id="welcomeText">MAM PLAN</h1>
      </div>
      <div class="align-self-end">
        <button type="button" class="btn btn-outline-info" @Click="">
          <b>Zapisz<br />notatki</b>
        </button>
      </div>
    </div>

    <div class="row">
      <div id="NaSrodek" class="d-flex col-10 h-100 p-5">
        <div id="blok" class="d-flex flex-column text-light">
          <div class="row p-5 justify-content-around">
            <Dzien
              v-for="(day, index) in WEEK"
              :title="day.name"
              :key="index"
              :items="day.items"
              :index="index"
              @donee="(zrobione) => dodajDone(zrobione)"
            />
          </div>
        </div>
      </div>

      <div
        id="done"
        class="d-flex justify-content-around align-items-center col-1 h-100"
      >
        <div id="blokDone" class="d-flex flex-column text-light">
          <h2 class="align-self-center">Done</h2>
          <div id="lista" class="d-flex flex-column">
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
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  font-family: sans-serif;
  background-color: #caba9c;
}

#welcomeText {
  color: #5e3023;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -30%);
}

#blok {
  background-color: #445d48;
  min-height: 80%;
  height: auto;
  min-width: 90%;
  width: auto;

  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#blokDone {
  background-color: #b7edc7;
  min-width: 20rem;
  min-height: 30rem;
  height: auto;

  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#NaSrodek {
  min-height: calc(100vh - 89px);
}

#done {
  min-height: calc(100vh - 89px);
}

#lista {
  column-count: auto;
}
</style>
