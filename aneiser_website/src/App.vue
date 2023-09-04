<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import PreFooter from "./components/PreFooter.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <v-app>
        <Header />
        <v-main>
            <RouterView />
        </v-main>
        <PreFooter />
        <Footer />
    </v-app>
</template>