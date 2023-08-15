<script>
import ProjectSection from "../components/ProjectSection.vue";
import ProjectSectionContentImage from "../components/ProjectSectionContentImage.vue";
import ProjectSectionContentImageCaption from "../components/ProjectSectionContentImageCaption.vue";
import ProjectSectionContentTable from "../components/ProjectSectionContentTable.vue";
import ProjectSectionContentText from "../components/ProjectSectionContentText.vue";
import ProjectSectionContentTextCard from "../components/ProjectSectionContentTextCard.vue";
import ProjectSectionContentTextH3 from "../components/ProjectSectionContentTextH3.vue";
import ProjectSectionContentTextH4 from "../components/ProjectSectionContentTextH4.vue";
import ProjectSectionContentTextH5 from "../components/ProjectSectionContentTextH5.vue";
import ProjectSectionContentTextH6 from "../components/ProjectSectionContentTextH6.vue";
import ProjectSectionContentTextP from "../components/ProjectSectionContentTextP.vue";
import ProjectSectionContentTextQuote from "../components/ProjectSectionContentTextQuote.vue";
import ProjectSectionContentVideo from "../components/ProjectSectionContentVideo.vue";

export default {
    components: {
        ProjectSection,
        ProjectSectionContentImage,
        ProjectSectionContentImageCaption,
        ProjectSectionContentTable,
        ProjectSectionContentText,
        ProjectSectionContentTextCard,
        ProjectSectionContentTextH3,
        ProjectSectionContentTextH4,
        ProjectSectionContentTextH5,
        ProjectSectionContentTextH6,
        ProjectSectionContentTextP,
        ProjectSectionContentTextQuote,
        ProjectSectionContentVideo,
    }
}
</script>

<template>
    <article class="bg--gray-lighter">
        <v-container-fluid>
            <header>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <!-- <ProjectSectionContentVideo>
                            <iframe
                                src="https://www.youtube.com/embed/ykNFnLnYPAY?cc_load_policy=1&fs=0&modestbranding=1&showinfo=0&rel=0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                frameborder="0">
                            </iframe>
                        </ProjectSectionContentVideo> -->
                        <v-img cover src="/assets/img/insignum/InSignum_logo.png"></v-img>
                    </v-col>
                </v-row>
            </header>
            <main>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <ProjectSection>
                            <div class="d-flex align-center justify-center">
                                <div>
                                    <h1 class="text-h1 mb-8">InSignum</h1>
                                    <h2 class="text-h2 mb-8">Prototyping for sound awareness</h2>
                                </div>
                            </div>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>As highlighted in my <a href="../resume.html">resume</a>, I am proficient in sign language. This comes from the fact that both my parents are deaf. Being a Child of Deaf Adults (CODA), I witnessed firsthand the challenges and inconveniences that missing sounds implied to them and how they had to make efforts and to develop alternative strategies to be aware of this environmental information that most of us take for granted.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>This inspired me to initiate <a href="https://www.facebook.com/insignum.tech/">InSignum</a>, a personal project—partially rooted in academia—that leverages alternative senses to compensate for the absence of hearing.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I am passionate about enhancing the quality of life for Deaf and Hard of Hearing (DHH) individuals through this project. Reflecting this commitment, I was featured in the <a href="https://alumni.eitdigital.eu/article/spotlight-insignum">European Institute of Techonolgy Startup Contest 2020</a>.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The problem</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Environmental sound awareness provides us with meaningful information about our surroundings, moreover, hearing is often the exclusive sense for the detection of many everyday life events. However, for Deaf and Hard of Hearing (DHH) individuals, perceiving these signals can be impossible or challenging, subsequently affecting their quality of life.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The process</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>While I have firsthand knowledge of the challenges, sign language, and deaf culture and its idiosyncrasies, I did not neglect the fundamental aspects of User-Centered Design. Being a proxy user helped me to empathize with users and being more conscious and closer to the problems they encounter and their needs.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>User research</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>While semi-structured interviews largely reaffirmed what I already knew, they did help validate certain insights and unveil a few new ones.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Throughout my life I have seen multitude of occasions where my parents were missing sound awareness from life-threatening events such an approaching car honking to everyday convenience like knowing when the washing machine is beeping to know when to take out the clothes.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Preferred modalities, contexts of use and social issues arose during this stage.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>Exploring some approaches with design artifacts</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The brainstorming sessions generated potential solutions (like light-emitting objects or embedded lighting in walls or floors) to address a range of issues, including missed sound alerts, accessibility challenges, and stigmatization.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/insignum/InSignum_Brainstorming.png"></v-img>
                                <ProjectSectionContentImageCaption>Different sketches with concept such a light emitting  objects, or light embedded on walls or floors or panels showing a top-view of a house with different colors representing sounds.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Smartlight system</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Upgrading already familiar lightbulb uses with newer technology such multi-coloured LED and, Internet of Things (IoT) capabilities to create a kind of smart home was one potential solution.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>To introduce the concept and elicit reactions some teammates and I, developed a hardware and software prototype of a house equipped with RGB LEDs which illuminate the path towards the sound source indicating the nature of the sound via the colour of the lights. The following video showcases the concept of how would a deaf person interact with the system.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>We also added some control features using a smartwatch to fulfil some needs and test ideas from our brainstorming sessions.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentVideo>
                                <iframe
                                    src="https://www.youtube.com/embed/Am3YoPo_fdM?cc_load_policy=1&fs=0&modestbranding=1&showinfo=0&rel=0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    frameborder="0">
                                </iframe>
                            </ProjectSectionContentVideo>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Wearable</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Touch sense was the option to go to offer a discreet and outdoors sound awareness solution.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Developing a prototype for a wearable device can be costly. To simplify, we opted to demonstrate the concept using a video prototype that illustrates the functionality of a vibrating wearable.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>At the beginning, it shows problematic situations for deaf people that are later repeated, this time, showing how they would look like using the wearable. You can also see me creating the wearable prototype.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentVideo>
                                <iframe
                                    src="https://www.youtube.com/embed/ykNFnLnYPAY?cc_load_policy=1&fs=0&modestbranding=1&showinfo=0&rel=0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    frameborder="0">
                                </iframe>
                            </ProjectSectionContentVideo>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Although both concepts were well received the "all-in-one" nature of a wearable was preferred as it would serve for both, indoors and outdoors contexts.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>From this point, I pursued the project independently. I delved into the wearables field. Research in this domain revealed a multitude of form factors, requirements depending on contexts and social considerations.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In parallel with this state-of-the-art research, I did more surveys, focus groups and, interviews as part of user research and User Centered Design.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/insignum/InSignum_surveys.png"></v-img>
                                <ProjectSectionContentImageCaption>Partial surveys screenshots.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>As with any iterative process, various outcomes and iterations emerged. However, this section shows the last outcome from the project.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>One of the most common answers when I asked for opinion for wearables was that without trying, they could not do more than guess. Recognizing that visualizing and experiencing are distinct, I conducted preliminary, rapid tests to determine if vibration was a suitable form of feedback and if mapping loudness with vibration intensity was adequate.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The outcome</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>The following image shows the prototype with eight vibration actuators distributed along a Velcro band which holds the box containing the circuitry and its placement around the waist.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/insignum/insignum_belt_prototype.png"></v-img>
                                <ProjectSectionContentImageCaption>The prototype.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>The results of the experiments indicate that the solution has potential, and I am actually working further on smartlight systems and wearable systems that provide deaf people with the perception of sound in everyday situations through haptic and sight feedback to make the life of Deaf and Hard of Hearing people easier.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Your support and engagement can make a difference in this venture. If you're intrigued and wish to know more, follow us on <a href="https://www.facebook.com/insignum.tech" target="_blank">Facebook</a> or <a href="https://www.instagram.com/insignumtech/" target="_blank">Instagram</a>. For those keen on contributing or participating in the project, don't hesitate to <a href="../contact.html">reach out</a>. I'd love to hear your insights and ideas!</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                    </v-col>
                </v-row>
            </main>
        </v-container-fluid>
    </article>
</template>

<style>
/* Estilos para las secciones pares */
section:nth-child(even) {
    background-color: var(--color-gray-lightest);
}

/* Estilos para las secciones impares */
section:nth-child(odd) {
    background-color: var(--color-white);
}

a {
    color: var(--color-red);
}

a:hover {
    text-decoration: none;
}

ol, ul {
    padding-left: 20px;
}
</style>