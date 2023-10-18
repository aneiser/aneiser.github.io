<script setup>
  defineProps(['category', 'skills']);
</script>

<template>
  <div>
    <h3>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
    <p>{{ skills.join(', ') + '.' }}</p>
  </div>
</template>

<style scoped>
</style>
