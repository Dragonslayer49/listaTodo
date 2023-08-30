<script setup lang="ts">
import {ref} from "vue";

defineProps(['napis'])
const zmienic = ref()
const emit = defineEmits(['usun','edytuj'])

const editMode = ref(false);
function Edycja(){
  emit('edytuj',{zmienic})
  editMode.value=false;
}
</script>

<template>
  <ul>
    <div v-if="editMode==true">
      <form @submit.prevent="zmien">

        <input v-model="zmienic" type="text"/>

      </form>
      <button type="button" @click="Edycja()" class="btn btn-outline-info">zapisz</button>

      <button type="button" @click="editMode=!editMode" class="btn btn-outline-danger">anuluj</button>
    </div>
    <div v-else>
      <li>
        {{ napis }}

        <br>
        <button type="button" @click="editMode=true" class="btn btn-outline-info">edytuj</button>

        <button type="button" @click="emit('usun')" class="btn btn-outline-danger">usun</button>
      </li>
    </div>
  </ul>

</template>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  padding: 1rem;
  width: 100%;
  background-color:black;

}

li {
  width: 100%;
  background-color:white;
}
</style>