<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";
const props = defineProps({
  title: String,
  items: { type: Array, required: true },
});
import { useWEEKStore } from "@/store/tydzien.js";
const tyd = useWEEKStore();
const emit = defineEmits(["donee"]);

const edycja = ref(false);
const tekst = ref();

function DoDone(zrobione, arr, index) {
  console.log(zrobione.value);
  emit("donee", zrobione);
  arr.splice(index, 1);
}
function dodaj(tekst) {
  tyd.dodaj(tekst, props.items);
  tekst = null;
  edycja.value = false;
}
function edytujItemy(index, zmien, arr) {
  arr[index].text = zmien;
} //edytuje tekst
</script>

<template>
  <h3 class="align-self-center dzien p-3">{{ title }}</h3>
  <div id="lista" class="d-flex flex-column">
    <ul class="ulul">
      <draggable :list="items" item-key="key">
        <template #item="{ element, index }">
          <Lista
            :napis="element.text"
            :ind="element.id"
            :element="element"
            @usun="items.splice(index, 1)"
            @edytuj="(zmien) => edytujItemy(index, zmien, items)"
            @doneitems="(zrobione) => DoDone(zrobione, items, index)"
          />
        </template> </draggable
      ><!--LISTA-->

      <div v-if="edycja == false" class="d-flex justify-content-center">
        <button
          type="button"
          @click="edycja = true"
          class="plusIcon btn btn-sm btn-success w-100"
        >
          <i class="bi bi-plus-lg"></i>
        </button>
      </div>
      <div v-else class="">
        <div class="w-100 d-flex justify-content-center">
          <form @submit.prevent="tyd.dodaj(tekst)">
            <input v-model="tekst" type="text" />
          </form>
        </div>

        <div class="d-flex justify-content-center">
          <button
            v-if="tekst == null"
            type="button"
            @click="tyd.dodaj(items)"
            class="btn btn-sm btn-primary"
            disabled
          >
            <i class="bi bi-plus"></i>
          </button>
          <button
            v-else
            type="button"
            @click="dodaj(tekst)"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-plus"></i>
          </button>
          <button
            type="button"
            @click="edycja = false"
            class="btn btn-sm btn-danger"
          >
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  text-align: start;
  padding: 1rem;
  width: 100%;
}
#lista {
}

.plusIcon {
  opacity: 0;
}

.ulul:hover .plusIcon {
  opacity: 1;
}

.dzien {
  text-align: center;
}
</style>
