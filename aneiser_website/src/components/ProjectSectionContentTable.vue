<script></script>

<template>
    <v-row>
        <v-col cols="8" offset="2">
            <table class="chronology">
                <slot></slot>
            </table>
        </v-col>
    </v-row>
</template>

<style scoped>
/* Chronology table */
.chronology {
    width: 100%;
    border-right: 1px solid var(--color-gray);
    margin: 3rem 0;
    border-spacing: 0;
}

.chronology ::v-deep th,
.chronology ::v-deep td {
    padding: 0.5rem 1rem;
    border-left: 1px solid var(--color-gray);
}

.center-cell {
    text-align: center;
}
</style>