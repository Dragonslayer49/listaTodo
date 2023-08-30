<script setup lang="ts">
import draggable from "vuedraggable";
defineProps(['napis','items'])
const emits=defineEmits([''])
</script>

<template>
  <draggable
      :list="items"
  >
    <template #item="{ element }">
      <li>
        <h4>
          {{ element.text }}
        </h4>
      </li>
    </template>
  </draggable>



</template>

<style scoped>
li {

  padding:1px;
  width: 100%;
}
</style>