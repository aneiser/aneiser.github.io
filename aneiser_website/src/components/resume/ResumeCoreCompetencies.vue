<script setup>
  defineProps(['competencies']);
</script>

<template>
  <div>
    <!-- <ul>
      <li v-for="(competency, index) in competencies" :key="index">{{ competency }}</li>
    </ul> -->
    <p v-for="(competency, index) in competencies" :key="index">{{ competency }}</p>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 4pt;
}
</style>
