<script setup>
  defineProps(['languages']);
</script>

<template>
  <div>
    <p v-for="(language, index) in languages" :key="index">
      <span class="language-item">
        <span class="language-name">{{ language.language }}</span>
        <span class="language-proficiency">({{ language.proficiency }})</span>
      </span>
    </p>
  </div>
</template>

<style scoped>
.language-item {
  display: flex;
}

.language-name {
  flex-grow: 1; /* Language name takes up available space */
}
</style>
