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
        <div id="blok" class="d-flex flex-column text-light w-100">
          <div class="row p-4 justify-content-around">
            <template v-for="(day, index) in tyd.WEEK" class="">
              <div id="lista" v-if="index < 5" class="col-4 day">
                <Dzien
                  :title="day.name"
                  :key="index"
                  :items="day.items"
                  @donee="(zrobione) => dodajDone(zrobione)"
                />
              </div>
              <div v-else-if="index === 5" class="col-4 weekend">
                <div class="h-50">
                  <Dzien
                    :title="tyd.WEEK[5].name"
                    :items="tyd.WEEK[5].items"
                    @donee="(zrobione) => dodajDone(zrobione)"
                  />
                </div>
                <div>
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
  font-family: "Comic Sans MS";
  background-color: #fefae0;
  overflow-x: hidden;
}

#welcomeText {
  font-weight: 900;
  color: #283618;
}

#welcome {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -10%);
}

#blok {
  min-height: 80%;
  height: auto;

  width: calc(80%);
}

#blokDone {
  min-width: 20rem;
  min-height: 5rem;
  max-height: 25rem;
  background-color: #dda15e;
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

#lista {
  overflow-y: auto;
  column-count: auto;
  background-color: #fefae0;
}
#notatnik {
  min-height: 10rem;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #606c38;
  margin-top: 4rem;
}
textarea {
  background-color: #606c38;
  border-style: none;
  padding: 3px;
  width: 100%;
  color: white;
  min-height: 15rem;
  overflow-y: auto;
}
.day {
  min-height: 25rem;
  max-height: 25rem;
  outline-style: solid;
  border-width: 2px;
  border-radius: 2px;
  border-color: #606c38;
  background-color: #fefae0;
  color: #283618;
}
.weekend {
  min-height: 12.5rem;
  outline-style: solid;
  border-radius: 2px;
  border-width: 2px;
  border-color: #606c38;
  background-color: #fefae0;
  color: #283618;
}
</style>
