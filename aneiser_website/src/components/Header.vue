<script>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- <v-app-bar elevation="1" scroll-behavior="elevate" scroll-threshold="300" scroll-target="300"> -->
    <v-app-bar elevation="0">
        <v-container>
            <v-toolbar title="ANEISER" color="white">
                <v-toolbar-items>
                  <v-btn class="header__btn" :ripple="false" to="/">Home</v-btn>
                  <v-btn class="header__btn" :ripple="false" to="/about">About</v-btn>
                  <v-btn class="header__btn" :ripple="false" to="/resume">Resume</v-btn>
                  <v-btn class="header__btn" :ripple="false" to="/blog">Blog</v-btn>
                </v-toolbar-items>
                <v-btn icon href="https://www.linkedin.com/in/aneiser-ux/" target="_blank">
                    <font-awesome-icon icon="fab fa-linkedin"></font-awesome-icon>
                </v-btn>
                <v-btn icon href="mailto:a.neiser13@gmail.com" target="_blank">
                    <font-awesome-icon icon="fas fa-paper-plane"></font-awesome-icon>
                </v-btn>
            </v-toolbar>
        </v-container>
    </v-app-bar>
</template>

<style>
    .header__btn {
        text-transform: none !important;
    }
    a.header__btn::before {
        content: "";
        position: absolute;
        top: 73%;
        left: calc(50% - 5px);
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 8.660254px solid var(--color-black);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    a.header__btn.v-btn--active {
        font-weight: bold !important;
        color: var(--color-red);
    }

    a.header__btn.v-btn--active::before,
    a.header__btn:hover::before,
    a.header__btn:active::before {
        opacity: 1;
    }

    a.header__btn.v-btn--active::before {
        border-bottom: 8.660254px solid var(--color-red);
    }

    a.header__btn.v-btn--active > .v-btn__overlay,
    a.header__btn:hover > .v-btn__overlay {
        opacity: 0;
    }
</style>