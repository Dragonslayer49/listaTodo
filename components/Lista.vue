<script setup lang="ts">
import {ref} from "vue";
defineProps(['napis'])
defineEmits(['usun', 'editMode'])

</script>

<template>

    <li>
      {{napis}}

      <br>
      <button type="button" @click="$emit('editMode')" class="btn btn-outline-info">edytuj</button>

      <button type="button" @click="$emit('usun')" class="btn btn-outline-danger">usun</button>
    </li>

</template>

<style scoped>

</style>