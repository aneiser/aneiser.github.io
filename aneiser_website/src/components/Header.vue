<script>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- <v-app-bar color="#f2f2f2" elevation="1" scroll-behavior="elevate" scroll-threshold="300" scroll-target="300"> -->
    <v-app-bar color="#f2f2f2" elevation="0" >
        <v-container>
            <v-row>
                <v-btn class="text-subtitle-1">ANEISER</v-btn>
                <v-spacer></v-spacer>
                <nav>
                    <v-btn class="text-subtitle-1"><RouterLink to="/">Home</RouterLink></v-btn>
                    <v-btn class="text-subtitle-1"><RouterLink to="/about">About</RouterLink></v-btn>
                    <v-btn class="text-subtitle-1"><RouterLink to="/resume">Resume</RouterLink></v-btn>
                    <v-btn class="text-subtitle-1"><RouterLink to="/blog">Blog</RouterLink></v-btn>
                </nav>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
