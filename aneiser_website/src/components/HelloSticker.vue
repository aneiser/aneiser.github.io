<script>
</script>

<template>
    <article class="sticker">
        <div>
            <h1>Hello</h1>
            <p>my name is</p>
        </div>
        <div class="blank">
            <p class="name">Adrian  :)</p>
        </div>
        <div></div>
    </article>
</template>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise);

    html {-webkit-font-smoothing: antialiased;}

    article, div {
        box-sizing: border-box;
    }

    .sticker {
        width: 300px;
        height: 225px;
        background: var(--color-white);
        border-radius: 9px;
        box-shadow: 0px 2px 10px var(--box-shadow-hard), inset 0 0 50px var(--box-shadow-soft);
        transform: rotate(-7deg);
        margin: auto;
        overflow: hidden;
    }

    .sticker div:first-child {
        padding: 5px;
        color: var(--color-white);
        font-family: Helvetica, Arial, sans-serif;
        text-align: center;
        line-height: initial;
        background-color: var(--color-red);
    }
    .sticker div:last-child {
        background-color: var(--color-red);
        padding: 1rem;
    }

    h1, p {
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 3rem;
        letter-spacing: 0.6rem;
    }

    .blank {
        height: 120px;
        font-family: 'Waiting for the Sunrise', cursive;
        text-align: center;
        padding: 0.5rem;
    }

    .name {
        font-size: 4rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        transform: rotate(-3deg);
        color: var(--color-gray-darkest);
    }

    .name:first-letter {
        font-size: 4.5rem;
    }

    /* Media query -25% */
    @media (max-width: 960px) {
        .sticker {
            width: 225px;
            height: 168.75px;
        }

        .sticker div:first-child {
            padding: 3.75px;
        }

        .sticker div:last-child {
            padding: 0.75rem;
        }

        h1 {
            font-size: 2.25rem;
            letter-spacing: 0.45rem;
        }

        .blank {
            height: 90px;
            padding: 0.375rem;
        }

        .name {
            font-size: 3rem;
            letter-spacing: 0.15rem;
        }

        .name:first-letter {
            font-size: 3.375rem;
        }
    }
</style>