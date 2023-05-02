<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
    <v-footer>
      <v-container>
        <span>&copy; My UX Portfolio {{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style scoped>
</style>