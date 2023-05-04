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
        background: #ffffff;
        border-radius: 9px;
        box-shadow: 0px 2px 10px  rgba(0,0,0, 0.4), inset 0 0 50px rgba(0,0,0, 0.2);
        transform: rotate(-7deg);
        margin: auto;
        overflow: hidden;
    }

    .sticker div:first-child {
        padding: 5px;
        color: #fff;
        font-family: Helvetica, Arial, sans-serif;
        text-align: center;
        line-height: initial;
        background-color: #ee0000;
    }
    .sticker div:last-child {
        background-color: #ee0000;
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
        color: #0d0d0d;
    }

    .name:first-letter {
        font-size: 4.5rem;
    }

</style>