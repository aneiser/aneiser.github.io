<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import PreFooter from "./components/PreFooter.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <v-app>
        <Header v-if="$route.name !== 'resume'" />
        <v-main>
            <RouterView />
        </v-main>
        <PreFooter v-if="$route.name !== 'resume'" />
        <Footer v-if="$route.name !== 'resume'" />
    </v-app>
</template>