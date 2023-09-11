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
  <div v-if="editMode === true" class="list-group-item p-2 d-flex flex-row">
    <form @submit.prevent="zmien">
      <input v-model="zmienic" type="text" />
    </form>

    <div v-if="zmienic != null">
      <div class="d-flex flex-row justify-content-end">
        <button
          type="button"
          @click="editMode = !editMode"
          class="btn btn-sm cog"
        >
          <i class="bi bi-arrow-left-square"></i>
        </button>

        <button type="button" @click="Edycja()" class="btn btn-sm write">
          <i class="bi bi-pencil-square"> </i>
        </button>
      </div>
    </div>

    <div v-else>
      <div class="d-flex flex-row justify-content-end">
        <button
          type="button"
          @click="editMode = !editMode"
          class="btn btn-sm cog"
        >
          <i class="bi bi-arrow-left-square"></i>
        </button>
        <button
          type="button"
          @click="Edycja()"
          class="btn btn-sm write"
          disabled
        >
          <i class="bi bi-pencil-square"> </i>
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <div id="task" class="list-group-item p-2 d-flex flex-row">
      <li
        class="shadow-md rounded-b-md border-t-2 border-sky-500 hover:bg-slate-900"
      >
        {{ napis }}
      </li>

      <button
        id="przyciskD"
        type="button"
        @click="emit('usun')"
        class="btn btn-sm delete align-self-end"
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
          <div
            class="md:hover:animate-spin transition duration-150 ease-in-out"
          >
            <i class="bi bi-gear-fill"> </i>
          </div>
        </button>
      </div>

      <div v-else class="d-flex justify-content-end przyciski">
        <button type="button" @click="editMode = true" class="btn btn-sm write">
          <i class="bi bi-pencil-square"> </i>
        </button>

        <button type="button" @click="doDone" class="btn btn-sm done">
          <i class="bi bi-clipboard-check-fill"> </i>
        </button>
        <div class="md:hover:animate-spin">
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
  padding: 1px;
}
input[type="text"]:focus {
  border: 3px solid #555;
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
</style>
