<script setup lang="js">
import { ref } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  title: String,
  items: { type: Array, required: true },
});
const edycja = ref(false);
const tekst = ref();

function dodaj(arr) {
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
      arr.push({ id: id++, text: tekst.value });
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
</script>

<template>
  <div id="monday" class="col-1 dzientyg">
    <h3 class="align-self-center dzien">{{ title }}</h3>
    <div id="lista" class="d-flex flex-column">
      <ul class="ulul">
        <draggable :list="items" item-key="id">
          <template #item="{ element, index }">
            <Lista
              :napis="element.text"
              @usun="items.splice(index, 1)"
              @edytuj="(zmien) => edytujItemy(index, zmien, items)"
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
              @click="dodaj(items)"
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
