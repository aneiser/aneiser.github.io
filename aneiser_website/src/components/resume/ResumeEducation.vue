<script setup>
  defineProps(['education'])
</script>

<template>
  <div>
    <h3>{{ education.degree }}</h3>
    <h4>{{ education.institute }} <span v-if="education.graduated"> · {{ education.graduated }}</span></h4>
  </div>
</template>

<style scoped>
</style>
