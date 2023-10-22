<script setup>
  defineProps(['summary']);
</script>

<template>
  <div class="summary">
    <blockquote v-for="sentence in summary" v-html="sentence"></blockquote>
  </div>
</template>

<style scoped>
.summary {
  margin: 32px 0;
  text-align: justify;
}
blockquote,
blockquote:first-child {
  margin-bottom: 4pt;
}
</style>
