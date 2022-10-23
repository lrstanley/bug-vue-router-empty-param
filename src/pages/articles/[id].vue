<template>
  <div>This is a test: {{ route.params }}</div>
</template>

<script setup lang="ts">
const route = useRoute("/articles/[id]")
</script>
