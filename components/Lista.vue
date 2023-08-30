<script setup lang="ts">
import {ref} from "vue";

const props =defineProps(['napis','items'])
const zmienic = ref()
const zmien=ref()
const zrobiony=ref(props.napis)
const emit = defineEmits(['usun','edytuj','Doneitems'])

const editMode = ref(false);
function Edycja(){
  zmien.value=zmienic.value;
  emit('edytuj',zmien)
  editMode.value=false;
  zmienic.value=null;
}
function doDone(){

  emit('Doneitems',zrobiony);
}
</script>

<template>
    <div v-if="editMode==true">
      <form @submit.prevent="zmien">

        <input v-model="zmienic" type="text"/>

      </form>
      <div v-if="zmienic!=null">
      <button type="button" @click="Edycja()" class="btn btn-outline-info">Save</button>
        <button type="button" @click="editMode=!editMode" class="btn btn-outline-danger">Cancel</button>
      </div>
      <div v-else>
        <button type="button" @click="Edycja()" class="btn btn-outline-info" disabled>Save</button>
        <button type="button" @click="editMode=!editMode" class="btn btn-outline-danger">Cancel</button>
      </div>

    </div>
    <div v-else>

      <li>
        {{ napis }}

        <br>
        <button type="button" @click="editMode=true" class="btn btn-outline-info">Edit</button>
        <button type="button" @click="doDone" class="btn btn-outline-success">Done</button>
        <button type="button" @click="emit('usun')" class="btn btn-outline-danger">Delete</button>
      </li>
    </div>

</template>

<style scoped>

li {
  width: 100%;
}

</style>