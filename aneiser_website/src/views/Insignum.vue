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
                                <ProjectSectionContentTextP>As you can see in my <a href="../resume.html">Resume</a> I know how to sign language. This is because both of my parents are deaf. As a Child of Deaf Adults (CODA) I grew up seeing the problems and inconveniences of missing sounds implied to them and how they had to made efforts and to develop alternative strategies to be aware of this environmental information that most of us take for granted.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>This led me to work on <a href="https://www.facebook.com/insignum.tech/">InSignum</a>, a personal project (partially framed within academia) that exploit other senses as a substitution for hearing.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I would love to increases Deaf and hard of Hearing people (DHH) quality of life for real with this project, as such I have been featured in the <a href="https://alumni.eitdigital.eu/article/spotlight-insignum">European Institute of Techonolgy Startup Contest 2020</a>.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The problem</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Environmental sound awareness provides us with meaningful information about our surroundings, moreover, hearing is often the exclusive sense for the detection of many everyday life events. However, Deaf and Hard of Hearing (DHH) people have the impossibility, or at least the challenge, to perceive these informative signals decreasing their quality of life consequently.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The process</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Although I know first-hand the problem, sign language and the deaf culture and its idiosyncrasy I did not neglect the fundamental aspects of User Centered Design Being a proxy user helped me to empathize with users and being more conscious and closer to the problems they encounter and their needs.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>User research</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>Semi-structured interviews regarding their problems and needs did not add much more information that the one I already had; however, it was a good to confirm insights and discover some others.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Throughout my life I have seen multitude of occasions where my parents were missing sound awareness from life-threatening events such an approaching car honking to everyday convenience like knowing when the washing machine is beeping to know when to take out the clothes.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Preferred modalities, contexts of use and social issues arose during this stage.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>Exploring some approaches with design artifacts</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>For the different problems (missing sound warnings, accessibility, and stigmatization...) and need founds several potential solutions (light emitting objects, or light embedded on walls or floors...) came from the brainstorming sessions.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/insignum/InSignum_Brainstorming.png"></v-img>
                                <ProjectSectionContentImageCaption>Different sketches with concept such a light emitting  objects, or light embedded on walls or floors or panels showing a top-view of a house with different colors representing sounds.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Smartlight system</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Upgrading already familiar lightbulb uses with newer technology such multi-coloured LED and, Internet of Things (IoT) capabilities creating a kind of a smarts home was one potential solution.</ProjectSectionContentTextP>
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
                                <ProjectSectionContentTextP>Develop a prototype for a wearable device is costly. To keep it simple we decided just to represent the concept in a video prototype showing how a vibrating wearable would work.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>At the beginning, it shows problematic situations for deaf people that are later repeated, this time, showing how they would look like using the wearable. You can also see me hands on the wearable prototype</ProjectSectionContentTextP>
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
                                <ProjectSectionContentTextP>I continued solo with the project from this moment on. I delved into the wearables field. Research in this aspect throw multitude of form factors, requirements depending on contexts and social considerations.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In parallel with this state-of-the-art research, I did more surveys, focus groups and, interviews as part of user research and User Centered Design.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>

                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/insignum/InSignum_surveys.png"></v-img>
                                <ProjectSectionContentImageCaption>Partial surveys screenshots.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>As in any iterative process there are many outcomes and loops within. However, this section shows the last outcome from the project.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>One of the most common answers when I asked for opinion for wearables was that without trying, they could not do more than guess. Being conscious about that imagining and experiment are two different things I started to test fast if vibration was suitable feedback and if mapping loudness with vibration intensity was adequate.</ProjectSectionContentTextP>
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
                                <ProjectSectionContentTextP>If you want to know more follow us on <a href="https://www.facebook.com/insignum.tech" target="_blank">Facebook</a> or <a href="https://www.instagram.com/insignumtech/" target="_blank">Instagram</a>. If you want to participate in the project feel free to <a href="../contact.html">contact me</a>, I will be glad to hear from you!</ProjectSectionContentTextP>
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