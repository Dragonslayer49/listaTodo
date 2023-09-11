<script setup lang="js">
import draggable from "vuedraggable";
const prop = defineProps(["napis", "items"]);
const emits = defineEmits(["item"]);
</script>

<template>
  <li class="list-group-item">
    <h4>
      {{ napis }}
    </h4>
  </li>
</template>

<style scoped>
li {
  padding: 1px;
  width: 100%;
  color: black;
}
.list-group-item {
  cursor: grab;
}

.list-group-item i {
  cursor: pointer;
}
</style>
