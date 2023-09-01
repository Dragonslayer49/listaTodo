<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";

const { $bootstrap } = useNuxtApp();
const modalElement = ref();
const modalisko = ref();
const pokazskonczone = ref(false);
const nuxtApp = useNuxtApp();
let id = 0;
let idd = 0;
// const items = ref([{id: id++, text: 'One'}, {id: id++, text: 'Two'}, {id: id++, text: "Three"}])

const WEEK = ref([
  {
    name: "Monday",
    items: [
      { id: id++, text: "Onem" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Tuesday",
    items: [
      { id: id++, text: "Onet" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Wednsday",
    items: [
      { id: id++, text: "Onew" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Thursday",
    items: [
      { id: id++, text: "Oneth" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Friday",
    items: [
      { id: id++, text: "Onef" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Saturday",
    items: [
      { id: id++, text: "Ones" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
  {
    name: "Sunday",
    items: [
      { id: id++, text: "Onesu" },
      { id: id++, text: "Two" },
      { id: id++, text: "Three" },
    ],
  },
]);

const Doneitems = ref([
  { idd: idd++, text: "wyniesc smieci" },
  { idd: idd++, text: "posprzatac dom" },
  {
    idd: idd++,
    text: "dodac wiecej rzeczy do donelist",
  },
]);

function popup() {
  console.log("dzien dobry");
  modalisko.value = new nuxtApp.$bootstrap.Modal(modalElement.value, {});

  modalisko.value.show();
} //MA POKAZYWAC MODALISKO ALE NIE DZIALA JESZCZE
</script>

<template>
  <Modalisko ref="modalElement" />
  <!--modalisko sie jeszcze nie pokazue-->
  <main>
    <div class="d-flex w-100 position-relative">
      <div id="welcome" class="">
        <h1 id="welcomeText">WELCOME</h1>
      </div>
      <div class="align-self-end">
        <button
          type="button"
          class="btn btn-outline-info"
          @Click="pokazskonczone = true"
        >
          <b>Zapisz<br />notatki</b>
        </button>
      </div>
    </div>

    <div class="row">
      <div
        id="NaSrodek"
        class="d-flex justify-content-around align-items-center col-12 h-100"
      >
        <div id="blok" class="d-flex flex-column text-light">
          <h2 class="align-self-center">List</h2>

          <div class="row p-3">
            <Dzien
              v-for="(day, index) in WEEK"
              :title="day.name"
              :key="index"
              :items="day.items"
            />
          </div>
        </div>
      </div>

      <div
        id="done"
        class="d-flex justify-content-around align-items-center col-12 h-100"
      >
        <div id="blokDone" class="d-flex flex-column text-light">
          <h2 class="align-self-center">Done</h2>
          <div id="lista" class="d-flex flex-column">
            <ul>
              <draggable :list="Doneitems" item-key="id">
                <template #item="{ element }">
                  <DoneList
                    :key="element.idd"
                    :napis="element.text"
                    :items="Doneitems"
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
body {
  font-family: sans-serif;
}

main {
  min-height: 100vh;
}

#welcomeText {
  color: #edb7b7;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -30%);
}

#blok {
  background-color: #edb7b7;
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
  min-width: 30rem;
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

/*
#monday {
  background-color: cyan;
}

#tuesday {
  background-color: #008cff;
}

#wednsday {
  background-color: #8400ff;
}

#thurday {
  background-color: #ff00dd;
}

#friday {
  background-color: #ff0000;
}

#saturday {
  background-color: #ff8000;
}

#sunday {
  background-color: #ffdd00;
}

 */
</style>
