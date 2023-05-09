<script setup>
    import Section from "../components/Section.vue";
    import HelloSticker from "../components/HelloSticker.vue";
    import ProjectsCarousel from "../components/ProjectsCarousel.vue";
</script>

<template>
    <section class="bg-grey-lighten-4" align-self="center">
        <v-container>
            <div class="section--comfort">
                <v-row>
                    <v-col cols="6" align-self="center">
                        <HelloSticker />
                    </v-col>
                    <v-col cols="6">
                        <h2 class="text-h4">I design for a diverse world</h2>
                        <h2 class="text-h4">—</h2>
                        <h2 class="text-h4">Bridging <span>technology</span> and <span>real</span> people through human-centered design</h2>
                        <h2 class="text-h6">(sometimes I also code)</h2>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg-grey-lighten-2">
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
    <section class="bg-grey-darken-4 bg-black">
        <v-container>
            <div class="section--compact">
                <v-row>
                    <v-col cols="8" offset="2">
                        <h3 class="text-h4 section__subtitle">Curious, open-minded, easy-going and eclectic, that’s me!</h3>
                        <p class="text-body-1 mb-4 text-justify">Currently based in Paris 🌦 but I have lived in Madrid 🌞 and Stockholm 🌙</p>
                        <p class="text-body-1 mb-4 text-justify">My passion for traveling 🧳 around the world 🌍 and exploring different cultures has allowed me to develop a diverse set of skills, including 4 languages, and an ability to adapt to different perspectives.</p>
                        <p class="text-body-1 mb-4 text-justify">As a [UX designer | professional], I bring this same sense of curiosity and adaptability to my work, seeking out new ideas and approaches to create designs that solve problems and enhance user experiences.</p>
                        <p class="text-body-1 mb-4 text-justify">I am always eager to learn more and excited to collaborate with people from different backgrounds and cultures, as I am looking for new opportunities to grow and expand my horizons.</p>
                    </v-col>
                </v-row>
                <v-row class="section__link">
                    <v-col cols="11" class="text-right">
                        <RouterLink to="/about" class="text-subtitle-1 font-weight-medium bg-grey-darken-4">Discover more about me →</RouterLink>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg-teal-darken-4">
        <v-container>
            <h3 class="text-h4 section__title">I can help with</h3>
            <div class="section">
                <v-row>
                    <v-col cols="8" offset="2">
                        <h4 class="text-h5 section__subtitle">I bring value to companies who need help with:</h4>
                        <ul class="pl-8 mb-4">
                            <li class="text-body-1 mb-2"><span class="font-weight-bold">User research</span>:  Better understand your users' needs, behaviors, and motivations.</li>
                            <li class="text-body-1 mb-2"><span class="font-weight-bold">UX design</span>: User-centered solutions that solve your users' problems and enhance their experiences with your products or services.</li>
                            <li class="text-body-1 mb-2"><span class="font-weight-bold">Frontend development</span>: Bring your designs to life and meet modern web standards and accessibility guidelines.</li>
                        </ul>
                        <p class="text-body-1">As a CODA, I also bring a special sensibility to universal design that's usable by all people.</p>
                    </v-col>
                </v-row>
                <v-row class="section__link">
                    <v-col cols="11" class="text-right">
                        <RouterLink to="/resume" class="text-subtitle-1 font-weight-medium bg-teal-darken-4">See more in my resume →</RouterLink>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg-red-darken-3">
        <v-container>
            <h3 class="text-h4 section__title">Experience</h3>
            <div class="section">
                <v-row>
                    <v-col cols="8" offset="2">
                        <v-row>
                            <v-col>
                                <div class="my-8">
                                    <p class="font-weight-bold">Ubisoft</p>
                                    <p class="d-flex justify-space-between">
                                        <span>User Researcher</span>
                                        <span>·</span>
                                        <span>2022</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">Paris 8</p>
                                    <p class="d-flex justify-space-between">
                                        <span>User Researcher & Interaction Designer</span>
                                        <span>·</span>
                                        <span>2021</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">DV Business Solutions</p>
                                    <p class="d-flex justify-space-between">
                                        <span>UX Designer - Frontend engineer </span>
                                        <span>·</span>
                                        <span> - 2019</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">Polytechnic University of Madrid</p>
                                    <p class="d-flex justify-space-between">
                                        <span>UI/UX Designer - Frontend engineer</span>
                                        <span>·</span>
                                        <span>2014 -</span>
                                    </p>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="my-8">
                                    <p class="font-weight-bold">Ubisoft</p>
                                    <p class="d-flex justify-space-between">
                                        <span>User Researcher</span>
                                        <span>·</span>
                                        <span>2022</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">Paris 8</p>
                                    <p class="d-flex justify-space-between">
                                        <span>User Researcher & Interaction Designer</span>
                                        <span>·</span>
                                        <span>2021</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">DV Business Solutions</p>
                                    <p class="d-flex justify-space-between">
                                        <span>UX Designer - Frontend engineer </span>
                                        <span>·</span>
                                        <span>2016 - 2019</span>
                                    </p>
                                </div>
                                <div class="my-8">
                                    <p class="font-weight-bold">Polytechnic University of Madrid</p>
                                    <p class="d-flex justify-space-between">
                                        <span>UI/UX Designer - Frontend engineer</span>
                                        <span>·</span>
                                        <span>2014 - 2016</span>
                                    </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="section__link">
                    <v-col cols="11" class="text-right">
                        <RouterLink to="/resume" class="text-subtitle-1 font-weight-medium bg-red-darken-3">See more in my resume →</RouterLink>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
    <section class="bg-red-darken-4">
        <v-container>
            <h3 class="text-h4 section__title">Let's get in touch</h3>
            <div class="section">
                <v-row>
                    <v-col cols="8" offset="2" class="text-center">
                        <h4 class="text-h5 section__subtitle">Wow! All the way down, that shows dedication!</h4>
                        <p class="text-body-1">Thank you for taking the time to review my work.</p>
                        <p class="text-body-1">Explore potential collaborations by connecting with me on LinkedIn.</p>
                        <p></p>
                        <p class="text-body-1"> If you'd like to talk more, share feedback or ask anything, feel free to reach me out at <a>hello@aneiser.com</a>, I'd love to hear your thoughts!</p>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    @import url(https://fonts.googleapis.com/css?family=Waiting+for+the+Sunrise);

    h2 span {
        color: #ee0000;
        text-shadow: 1px 1px 1px rgba(0 0 0 / 20%);
    }

    h2 span:first-child {
    }

    h2 span:last-child {
        font-family: 'Waiting for the Sunrise', cursive;
        font-size: 60px;
    }

    h2.text-h6 {
        color: #333333;
        font-family: 'Roboto Mono', monospace !important;
    }

    .ProjectsCarouselWrapper {
        overflow: auto;
    }

    .section {
        padding: 104px 0;
    }

    .section--comfort {
        padding: 136px 0;
    }

    .section--compact {
        padding: 72px 0;
    }

    .section__title {
        margin-top: -38px;
    }

    .section__subtitle {
        margin-bottom: 1.5rem;
    }

    .section__heading {}

    .section__link {
        margin-top: 44px !important;
    }
    .section__link a {
        text-decoration: none;
    }
    .section__link a:hover {
        text-decoration: underline;
    }
</style>