<script setup>
// import { ref } from 'vue'
// import ResumeExperienceBullet from './resume/ResumeExperienceBullet.vue'

defineProps(['education'])
</script>

<template>
  <div>
    <h3>{{ education.degree }}</h3>
    <h4>{{ education.institute }}</h4>
    <p v-if="education.graduated">Graduated ({{ education.graduated }})</p>
  </div>
</template>

<style scoped>
</style>
