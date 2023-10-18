<script>
export default {
    props: {
        videoSrc: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="video-container">
        <iframe
            :src="videoSrc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            width="100%"
            height="100%">
        </iframe>
    </div>
</template>

<style scoped>
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* Aspecto 16:9 */
        height: 0;
        overflow: hidden;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>