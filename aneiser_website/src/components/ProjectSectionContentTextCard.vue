<script></script>

<template>
    <v-row>
        <v-col cols="10" offset="1">
            <p class="explanation_card mb-10 pa-4">
                <slot></slot>
            </p>
        </v-col>
    </v-row>
</template>

<style scoped>
.explanation_card {
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    padding: 2rem;
    background-color: var(--color-gray-lighter);
    color: var(--color-gray-dark);
}
</style>