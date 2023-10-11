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
  <div id="lista" class="d-flex flex-column h-100">
    <ul class="ulul">
      <draggable
        :list="items"
        item-key="key"
        :animation="200"
        ghost-class="moving-card"
        filter=".action-button"
      >
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

      <div
        v-if="edycja == false"
        class="d-flex justify-content-center hover:outline outline-2 hover:outline-emerald-500 rounded-md hover:text-emerald-500 hover:shadow-sm"
      >
        <button
          type="button"
          @click="edycja = true"
          class="plusIcon btn btn-sm bg-stone-900 transition duration-300 ease-in-out hover:transition-all shadow-inner w-100"
        >
          <i class="bi bi-plus-lg opacity-100"></i>
        </button>
        <!--        button edit mode plus-->
      </div>
      <div v-else class="">
        <div class="w-100 d-flex justify-content-center">
          <form @submit.prevent="dodaj(tekst)">
            <input
              class="focus:ring-emerald-500"
              id="inp"
              v-model="tekst"
              type="text"
              name="email"
              placeholder=""
            />
          </form>
        </div>

        <div class="d-flex justify-content-center">
          <button
            v-if="tekst == null"
            type="button"
            @click="dodaj(items)"
            class="btn btn-sm cog"
            disabled
          >
            <i class="bi bi-plus"></i>
          </button>
          <!--button add new text-->
          <button
            v-else
            type="button"
            @click="dodaj(tekst)"
            class="btn btn-sm btn-primary"
          >
            <i class="bi bi-plus"></i>
          </button>
          <!--          button exit editmode-->
          <button type="button" @click="edycja = false" class="btn btn-sm cog">
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
  height: 100%;
}
#inp {
  min-width: 20px;
  max-width: 1000px;
  width: calc(98%);
  display: inline-block;
}
.plusIcon {
  opacity: 0;
}

.ulul:hover .plusIcon {
  opacity: 0.5;
}

h3 span {
  outline-offset: -20px;
}
</style>
