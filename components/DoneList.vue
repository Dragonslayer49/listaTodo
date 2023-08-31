<script setup lang="ts">
import draggable from "vuedraggable";
const prop=defineProps(['napis','items'])
const emits=defineEmits(['item'])
</script>

<template>

      <li>
        <h4>
          {{ napis}}
        </h4>
      </li>






</template>

<style scoped>
li {

  padding:1px;
  width: 100%;
}
</style>