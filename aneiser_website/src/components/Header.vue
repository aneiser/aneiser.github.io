<template>
    <v-app-bar :elevation="0">
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

<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink,
    },
};
</script>
