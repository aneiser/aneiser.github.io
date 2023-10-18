<script setup>
  defineProps(['experience'])
</script>

<template>
  <div>
    <h3>{{ experience.title }}</h3>
    <h4>
      <span>{{ experience.company }}</span>
      <span> ({{ experience.industry }}) </span>
      <span> · </span>
      <span>{{ experience.startDate }}</span>
      <!-- <span v-if="experience.endDate"> - {{ experience.endDate }}</span> -->
      <span v-if="experience.endDate">&ndash;{{ experience.endDate }}</span>
    </h4>
    <ul>
      <li v-for="task in experience.tasks" :key="task">
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
