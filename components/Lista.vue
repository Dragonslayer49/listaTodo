<script setup lang="js">
import { ref } from "vue";

const props = defineProps(["napis", "ind", "element"]);
const zmienic = ref();
const przyciski = ref(false);
const zmien = ref();
const dalej = ref(props.napis);
const emit = defineEmits(["usun", "edytuj", "doneitems"]);

import { useWEEKStore } from "~/store/tydzien";
const tyd = useWEEKStore();

const editMode = ref(false);

function Edycja() {
  zmien.value = zmienic.value;
  emit("edytuj", zmien);
  editMode.value = false;
  zmienic.value = null;
}

function doDone() {
  dalej.value = props.napis;
  emit("doneitems", dalej);
}
</script>

<template>
  <div v-if="editMode === true">
    <form @submit.prevent="zmien">
      <input v-model="zmienic" type="text" />
    </form>
    <div v-if="zmienic != null">
      <button type="button" @click="Edycja()" class="btn btn-outline-info">
        Save
      </button>
      <button type="button" @click="editMode = !editMode" class="btn delete">
        Cancel
      </button>
    </div>

    <div v-else>
      <button type="button" @click="Edycja()" class="btn done" disabled>
        Save
      </button>
      <button type="button" @click="editMode = !editMode" class="btn delete">
        Cancel
      </button>
    </div>
  </div>
  <div v-else>
    <div id="task" class="list-group-item p-2 d-flex flex-row">
      <li class="">
        {{ napis }}
      </li>

      <button
        id="przyciskD"
        type="button"
        @click="emit('usun')"
        class="btn btn-sm delete align-self-end przyciski"
      >
        <i class="bi bi-calendar-x-fill"> </i>
      </button>
      <div
        v-if="przyciski == false"
        class="d-flex flex-row justify-content-end przyciski"
      >
        <button
          type="button"
          @click="przyciski = !przyciski"
          class="btn btn-sm cog align-self-end"
        >
          <i class="bi bi-gear-fill"> </i>
        </button>
      </div>

      <div v-else class="d-flex justify-content-end">
        <button type="button" @click="editMode = true" class="btn btn-sm write">
          <i class="bi bi-pencil-square"> </i>
        </button>

        <button type="button" @click="doDone" class="btn btn-sm done">
          <i class="bi bi-clipboard-check-fill"> </i>
        </button>

        <button
          type="button"
          @click="przyciski = !przyciski"
          class="btn btn-sm cog"
        >
          <i class="bi bi-gear-fill"> </i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  min-width: 20px;
  max-width: 1000px;
  width: calc(98%);
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-bottom-width: 0.5px;

  padding: 1px;
  border-bottom-color: #b9b7ac;
  border-bottom-style: solid;
  background-color: #f8f6e5;
}
#przyciski {
  width: 30%;
}
input[type="text"]:focus {
  border: 3px solid #555;
}
li:hover {
  opacity: 0.95;
  background-color: #000000;
  color: #ffffff;
}
#task {
  padding: 1px;
}

.list-group-item {
  cursor: grab;
}
#przyciskD {
  opacity: 0;
}
#przyciskD:hover {
  opacity: 1;
}

.cog {
  border: 2px solid #000000;
  color: #000000;
}
.cog:hover {
  border: 2px solid black;
  color: black;
  opacity: 0.6;
}
.done {
  border: 2px solid #000000;
  color: #000000;
}
.done:hover {
  border: 2px solid #47ce77;
  color: #47ce77;
}
.write {
  border: 2px solid #000000;
  color: #000000;
}
.write:hover {
  border: 2px solid #56cad3;
  color: #56cad3;
}
.delete {
  border: 2px solid #000000;
  color: #000000;
}
.delete:hover {
  border: 2px solid #c53f3f;
  color: #c53f3f;
}
</style>
