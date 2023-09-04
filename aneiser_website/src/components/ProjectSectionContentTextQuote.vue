<script></script>

<template>
    <v-row>
        <v-col cols="10" offset="1">
            <blockquote class="quote mb-6">
                <slot></slot>
            </blockquote>
        </v-col>
    </v-row>
</template>

<style>
.quote {
    color: #B51A17;
    color: var(--color-red);
    font-weight: bold;
    font-style: italic;
    border: none;
    text-align: center;
    font-family: CallunaRegular, Georgia, serif;
    /* font-size: 1.25rem; */
    /* margin-bottom: 2.25rem;
    margin-top: 1.125rem;
    padding-left: 0;
    line-height: 3.375rem; */
}

/* blockquote.quote:before, */
blockquote.quote:after {
    content: "";
    display: block;
    width: 10%;
    height: 1px;
    background: var(--color-gray);
    margin: 1.125rem auto;
}
</style>