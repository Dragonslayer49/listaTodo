<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <h3 class="p-1">
    {{ title }}
  </h3>
</template>

<style scoped></style>
