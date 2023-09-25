<script setup>
    import HelloSticker from "../components/HelloSticker.vue";
    import ProjectsCarousel from "../components/ProjectsCarousel.vue";
</script>

<template>
    <section class="bg--gray-lightest" align-self="center">
        <v-container>
            <div class="section--comfort">
                <v-row class="hero">
                    <v-col cols="12" sm="6">
                        <HelloSticker />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <!-- Contenido para pantallas pequeñas (small) -->
                        <div class="hidden-md-and-up" aria-hidden="false">
                            <!-- <h2 class="text-h5">I design for a diverse world</h2>
                            <h2 class="text-h5">—</h2> -->
                            <!-- <h2 class="text-h5">UX Designer bridging <span>real</span> and <span>technology</span> people through human-centered design</h2> -->
                            <h2 class="text-h5">UX Designer bridging <span>people</span> and <span>technology</span> through human-centered design</h2>
                            <h2 class="text-h6">(sometimes I also code)</h2>
                        </div>
                        <!-- Contenido para pantallas medium y superiores -->
                        <div class="hidden-sm-and-down" aria-hidden="true">
                            <!-- <h2 class="text-h4">I design for a diverse world</h2>
                            <h2 class="text-h4">—</h2> -->
                            <!-- <h2 class="text-h4">UX Designer bridging <span>diverse</span> and <span>technology</span> people through human-centered design</h2>
                            <br> -->
                            <h2 class="text-h4">UX Designer bridging <span>people</span> and <span>technology</span> through human-centered design</h2>
                            <h2 class="text-h6">(sometimes I also code)</h2>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg-gray-skyline">
        <v-container>
            <h3 class="text-h4 section__title">Projects use cases</h3>
        </v-container>
        <v-container class="ProjectsCarouselWrapper" fluid>
            <div class="section--compact">
                <v-row>
                    <v-col class="d-flex">
                        <ProjectsCarousel />
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg--gray-darkest">
        <v-container>
            <div class="section--compact">
                <v-row>
                    <v-col
                        cols="10" offset="1"
                        sm="8" offset-sm="2"
                        md="6" offset-md="3">
                        <h3 class="text-h4 text-center section__subtitle gradient-warm">Curious, easy-going and eclectic, that's me!</h3>
                        <p class="text-body-1 mb-4 text-justify">Currently based in Paris 🗼, I've had the privilege of calling both Madrid 🌞 and Stockholm ❄️ my home in the past.</p>
                        <p class="text-body-1 mb-4 text-justify">My love for travel ✈️ and cultural immersion 🌍 has equipped me with a unique set of skills. Not only am I fluent in four languages, but my experiences have honed my ability to understand and adapt to diverse perspectives.</p>
                        <p class="text-body-1 mb-4 text-justify">As a professional, I bring this same sense of curiosity and adaptability to my work, seeking out new ideas and approaches to craft designs that not only solve problems but also elevate user experiences.</p>
                        <p class="text-body-1 mb-4 text-justify">I am always eager to learn more and excited to collaborate with people from varied backgrounds and cultures, as I am looking for new opportunities to grow and expand my horizons. 🚀</p>
                    </v-col>
                </v-row>
                <!-- <v-row class="section__link">
                    <v-col class="text-right">
                        <RouterLink to="/about" class="text-subtitle-1 font-weight-medium bg--gray-darkest">Discover more about me →</RouterLink>
                    </v-col>
                </v-row> -->
            </div>
        </v-container>
    </section>
    <section class="bg--green-dark">
        <v-container>
            <h3 class="text-h4 section__title">I can help with</h3>
            <div class="section">
                <v-row>
                    <v-col
                        cols="10" offset="1"
                        sm="8" offset-sm="2"
                        md="6" offset-md="3">
                        <h4 class="text-h5 section__subtitle">I bring value to companies who need help with:</h4>
                        <ul class="pl-8 mb-8">
                            <li class="text-body-1 mb-4"><span class="font-weight-bold">UX design</span>: User-centered solutions that solve your users' problems and enhance their experiences with your products or services.</li>
                            <li class="text-body-1 mb-4"><span class="font-weight-bold">User research</span>:  Better understand your users' needs, behaviors, and motivations.</li>
                            <li class="text-body-1 mb-4"><span class="font-weight-bold">Product Design</span>: Crafting holistic, end-to-end product experiences that seamlessly align with user needs and business objectives</li>
                            <li class="text-body-1 mb-4"><span class="font-weight-bold">Frontend development</span>: Bring your designs to life and meet modern web standards and accessibility guidelines.</li>
                        </ul>
                        <p class="text-body-1">As a <abbr title="Child Of Deaf Adults">CODA</abbr>, I also bring a special sensibility to accessible and universal design that's usable by all people.</p>
                    </v-col>
                </v-row>
                <v-row class="section__link">
                    <v-col class="text-right">
                        <RouterLink to="/resume" class="text-subtitle-1 font-weight-medium bg--green-dark">See more in my resume →</RouterLink>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg--red-dark">
        <v-container>
            <h3 class="text-h4 section__title">Professional experience</h3>
            <div class="section">
                <v-row class="section__logos">
                    <!-- First block -->
                    <v-col cols="12" sm="6" md="3" class="d-flex align-center justify-center">
                        <svg role="img" class="logos" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-labelledby="Ubisoft logo" viewBox="0 0 99.2 31.6">
                            <title>Ubisoft</title>
                            <path class="st0" d="M30.4,15.8C30.1-0.4,8.6-6.4,0.3,8.7C0.7,9,1.2,9.4,1.5,9.6c-0.6,1.3-1.1,2.7-1.3,4C0.1,14.5,0,15.4,0,16.4 c0,8.4,6.8,15.2,15.2,15.2s15.2-6.8,15.2-15.2C30.4,16.2,30.4,16,30.4,15.8L30.4,15.8z M3.8,18.5c-0.2,1.6-0.1,2.2-0.1,2.4L3.3,21 c-0.1-0.3-0.5-1.2-0.6-2.5c-0.4-4.9,2.9-9.3,8-10.1c4.7-0.7,9.1,2.2,10.2,6.3l-0.4,0.1c-0.1-0.1-0.3-0.4-1-1.2 C13.9,7.9,5,10.5,3.8,18.5L3.8,18.5z M18.2,21.2c-0.8,1.1-2,1.8-3.4,1.8c-2.3,0-4.2-1.9-4.2-4.2c0-2.2,1.7-4,3.9-4.1l0,0 c1.3-0.1,2.6,0.7,3.2,1.8c0.6,1.3,0.4,2.8-0.6,3.9C17.5,20.7,17.9,21,18.2,21.2L18.2,21.2z M26.9,21.4c-2.2,5-6.7,7.6-11.5,7.5 c-9.3-0.5-12-11.1-5.8-15l0.3,0.3c-0.1,0.1-0.5,0.4-1,1.6c-0.7,1.4-0.9,2.7-0.8,3.6c0.5,7.5,10.9,9,14.5,1.6 C27.1,10.8,15,0.5,4.2,8.4L4,8.1C6.8,3.7,12.3,1.7,17.6,3C25.7,5.1,30.1,13.5,26.9,21.4z"></path>
                            <path class="st0" d="M45.2,9.8v7c0,2.8-1.7,4.9-4.8,4.9s-4.8-2.1-4.8-4.9v-7h2.5v6.8c0,1.7,0.8,2.7,2.3,2.7c1.5,0,2.3-1,2.3-2.7V9.8 C42.7,9.8,45.2,9.8,45.2,9.8z M54.7,18.2c0,2-1.6,3.5-4.2,3.5h-4.1V9.9h3.9c2.3,0,3.8,1.1,3.8,2.8c0,1.3-0.6,2.1-1.5,2.5 C53.8,15.7,54.7,16.6,54.7,18.2L54.7,18.2z M49,12.2v2.5h1.3c0.8,0,1.3-0.5,1.3-1.2s-0.5-1.2-1.3-1.2L49,12.2L49,12.2z M50.4,19.4 c1.1,0,1.7-0.5,1.7-1.5s-0.6-1.5-1.7-1.5H49v2.9L50.4,19.4L50.4,19.4z M55.7,9.9h2.5v11.7h-2.5V9.9z M64.3,14.7c2,0.7,3,1.6,3,3.4 c0,2.4-1.9,3.8-4.1,3.8c-2,0-3.6-0.9-4.2-2.6l2-1.5c0.4,1.1,1.3,1.7,2.3,1.7c0.8,0,1.4-0.5,1.4-1.2c0-0.7-0.5-1.1-2.1-1.7 c-1.8-0.7-3.2-1.6-3.2-3.5c0-1.9,1.6-3.3,3.8-3.3c1.8,0,3.2,0.7,3.8,2.1l-2,1.4c-0.4-0.9-1-1.4-1.9-1.4c-0.8,0-1.3,0.4-1.3,1 C61.9,13.6,62.6,14.1,64.3,14.7z M80,15.8c0,3.4-2.5,6-6,6c-3.6,0-6-2.6-6-5.6c0-2,0.8-3.5,1.9-4.4l-0.4-0.4 c0.9-0.9,2.5-1.6,4.4-1.6C77.5,9.7,80,12.4,80,15.8L80,15.8z M77.4,15.8c0-2.1-1.3-3.6-3.4-3.6c-1.2,0-2.1,0.5-2.6,1l0.4,0.4 c-0.6,0.5-1.2,1.2-1.2,2.5c0,1.8,1.3,3.3,3.4,3.3C76.1,19.4,77.4,17.9,77.4,15.8L77.4,15.8z M83.6,12.4v2.7h5V17h-5v4.6H81V9.9h8 v2.4H83.6L83.6,12.4z M99.2,12.4h-3.3v9.3h-2.5v-9.3H90V9.9h9.1V12.4z"></path>
                        </svg>
                    </v-col>

                    <!-- Second block -->
                    <v-col cols="12" sm="6" md="3" class="d-flex align-center justify-center">
                        <v-img class="logos" src="/assets/img/logos/paris8-logo.png" alt="Université Paris 8 Vincennes-Saint-Denis logo"></v-img>
                    </v-col>

                    <!-- Third block -->
                    <v-col cols="12" sm="6" md="3" class="d-flex align-center justify-center">
                        <v-img class="logos" src="/assets/img/logos/smartcontact-logo.png" alt="SmartContact a Digital Virgo tool logo"></v-img>
                    </v-col>

                    <!-- Fourth block -->
                    <v-col cols="12" sm="6" md="3" class="d-flex align-center justify-center">
                        <v-img class="logos" src="/assets/img/logos/upm-bar-logo.png" alt="Universidad Politécnica de Madrid logo"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                        cols="10" offset="1"
                        sm="8" offset-sm="2"
                        md="6" offset-md="3">
                        <v-row>
                            <v-col>
                                <div class="my-8">
                                    <p class="font-weight-bold">UX engineer</p>
                                    <p class="d-flex justify-space-between">
                                        <span>Evoloom</span>
                                        <span>2023</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">User Researcher</p>
                                    <p class="d-flex justify-space-between">
                                        <span>Ubisoft</span>
                                        <span>2022</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">User Researcher & Designer</p>
                                    <p class="d-flex justify-space-between">
                                        <span>Paris 8</span>
                                        <span>2021</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">UX engineer</p>
                                    <p class="d-flex justify-space-between">
                                        <span>DV Business Solutions</span>
                                        <span>2016 - 2019</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">UX engineer</p>
                                    <p class="d-flex justify-space-between">
                                        <span>Polytechnic University of Madrid</span>
                                        <span>2014 - 2016</span>
                                    </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="section__link">
                    <v-col class="text-right">
                        <RouterLink to="/resume" class="text-subtitle-1 font-weight-medium bg--red-dark">See more in my resume →</RouterLink>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise');

    h2 span {
        color: var(--color-red);
        text-shadow: 1px 1px 1px var(--text-shadow-soft);
    }

    h2 span:first-child {
        font-family: 'Waiting for the Sunrise', cursive;
        font-size: 2.7rem;
    }

    h2 span:last-child {
        font-family: 'Roboto Mono';
    }

    h2.text-h6 {
        color: var(--color-gray-dark);
        font-family: 'Roboto Mono', monospace !important;
    }

    .ProjectsCarouselWrapper {
        overflow: auto;
    }

    .gradient-warm {
        background: var(--gradient-warm-colors);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    /* Media query -25% */
    @media (max-width: 960px) {
        h2.text-h6 {
            font-size: 1rem !important;
        }

        h2 span:first-child {
            font-size: 2.1rem !important;
        }
    }

    .hero > div {
        margin: 16px auto;
    }

</style>