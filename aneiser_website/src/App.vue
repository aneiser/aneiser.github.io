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

<style>
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;

    --color-gray-darkest: #0D0D0D;
    --color-gray-dark: #333333;
    --color-gray-lighter: #E0E0E0;
    --color-gray-lightest: #F2F2F2;

    --color-red: #DE0000;
    --color-red: #F21905;
    --color-red-dark: #8C1F28;
    --color-red-darker: #591C21;
    --color-red-light: #F26F63;

    --color-green-dark: #044040;

    --color-blue-light: #ADC5D9;

    --color-yellow: #FFB30D;
    --color-yellow: #F2BE22;

    --text-shadow-soft: #00000033;
    --text-shadow-hard: #00000080;

    --box-shadow-soft: #00000033;
    --box-shadow-hard: #00000066;

    --gradient-warm-colors: linear-gradient(45deg, #FF9900 20%, #FF0000, #FF00B8 80%)

}
</style>