<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";
import { id } from "postcss-selector-parser";
import { indexOf } from "vuedraggable/dist/vuedraggable.common";

const props = defineProps({
  title: String,
  items: { type: Array, required: true },
});
const emit = defineEmits(["donee"]);
const edycja = ref(false);
const tekst = ref();
let idd = 0;
function dodaj(arr, index) {
  const czyjest = arr.filter((i) => i.text === tekst.value);
  if (czyjest.length) {
    popup();
  }
  // if (items.value.indexOf((i) => i.text === tekst.value) >= 0) {
  //   popup()
  //
  // }
  else {
    if (tekst.value != null) {
      arr.push({ id: idd++, text: tekst.value });
      tekst.value = null;
    } else {
      console.log("nie");
    }
  }
  let i = 0;
  for (i; i < arr.length; i++) {
    console.log(arr[i].text);
  }
  edycja.value = false;
} //DODAJE NOWY TEKST DO ARRAYA
function edytujItemy(index, zmien, arr) {
  arr[index].text = zmien;
} //edytuje tekst

function DoDone(zrobione, arr, index) {
  console.log(zrobione.value);
  emit("donee", zrobione);
  arr.splice(index, 1);
}
</script>

<template>
  <div class="col-1 dzientyg">
    <h3 class="align-self-center dzien">{{ title }}</h3>
    <div id="lista" class="d-flex flex-column">
      <ul class="ulul">
        <draggable :list="items" item-key="key">
          <template #item="{ element, index }">
            <Lista
              :napis="element.text"
              :ind="element.id"
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
            <form @submit.prevent="dodaj">
              <input v-model="tekst" type="text" />
            </form>
          </div>
          <div class="d-flex justify-content-center">
            <button
              v-if="tekst == null"
              type="button"
              @click="dodaj(items, index)"
              class="btn btn-sm btn-primary"
              disabled
            >
              <i class="bi bi-plus"></i>
            </button>
            <button
              v-else
              type="button"
              @click="dodaj(items)"
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
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  text-align: start;
  padding: 1rem;
  width: 100%;
}

li {
  width: 100%;
}

.plusIcon {
  opacity: 0;
}

.ulul:hover .plusIcon {
  opacity: 1;
}

.dzientyg {
  flex-basis: 14.2%;
  min-height: 40rem;
}

.dzien {
  text-align: center;
}
</style>
