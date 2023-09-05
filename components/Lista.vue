<script setup lang="js">
import { ref } from "vue";

const props = defineProps(["napis", "ind"]);
const zmienic = ref();
const przyciski = ref(false);
const zmien = ref();
const dalej = ref(props.napis);
const emit = defineEmits(["usun", "edytuj", "doneitems"]);

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
  <div v-if="editMode == true">
    <form @submit.prevent="zmien">
      <input v-model="zmienic" type="text" />
    </form>
    <div v-if="zmienic != null">
      <button type="button" @click="Edycja()" class="btn btn-outline-info">
        Save
      </button>
      <button
        type="button"
        @click="editMode = !editMode"
        class="btn btn-outline-danger"
      >
        Cancel
      </button>
    </div>

    <div v-else>
      <button
        type="button"
        @click="Edycja()"
        class="btn btn-outline-info"
        disabled
      >
        Save
      </button>
      <button
        type="button"
        @click="editMode = !editMode"
        class="btn btn-outline-danger"
      >
        Cancel
      </button>
    </div>
  </div>
  <div v-else>
    <li class="text-start">
      <div class="list-group-item p-2">
        {{ napis }}
        {{ ind }}
        <button
          id="przyciskD"
          type="button"
          @click="emit('usun')"
          class="btn btn-sm btn-danger"
        >
          <i class="bi bi-x"> </i>
        </button>
        <div v-if="przyciski == false" class="d-flex justify-content-end">
          <button
            type="button"
            @click="przyciski = !przyciski"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-gear-fill"> </i>
          </button>
        </div>

        <div v-else class="d-flex justify-content-end">
          <button
            type="button"
            @click="editMode = true"
            class="btn btn-sm btn-dark"
          >
            <i class="bi bi-pencil-square"> </i>
          </button>

          <button type="button" @click="doDone" class="btn btn-sm btn-success">
            <i class="bi bi-check"> </i>
          </button>

          <button
            type="button"
            @click="przyciski = !przyciski"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-gear-fill"> </i>
          </button>
        </div>
      </div>
    </li>
  </div>
</template>

<style scoped>
li {
  width: 100%;
  color: #001524;
}

li:hover {
  opacity: 0.95;
  background-color: #8a6240;
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
