<script setup>
// import { ref } from 'vue'
// import ResumeExperienceBullet from './resume/ResumeExperienceBullet.vue'

defineProps(['summary']);
</script>

<template>
  <div class="summary">
    <blockquote v-for="sentence in summary">{{ sentence }}</blockquote>
  </div>
</template>

<style scoped>
.summary {
  margin: 32px 0;
  text-align: justify;
}
blockquote:first-child {
  margin-bottom: 4pt;
}
</style>
