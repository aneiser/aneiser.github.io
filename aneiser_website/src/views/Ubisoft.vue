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
                        <v-img cover src="/assets/img/project_card/mario_rabbids_sparks_of_hope_screenshot_1.webp"></v-img>
                        <!-- <v-img cover src="/assets/img/ubisoft/h_ubisoft.jpg"></v-img> -->
                    </v-col>
                </v-row>
            </header>
            <main>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <ProjectSection>
                            <div class="d-flex align-center justify-center">
                                <div>
                                    <h1 class="text-h1 mb-8">Ubisoft</h1>
                                    <h2 class="text-h2 mb-8">Memorables gaming experiences</h2>
                                </div>
                            </div>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Ubisoft is one of the biggest video games companies in the world and several development studios across the world. Its video game franchises include Assassin's Creed, Far Cry, Just Dance, Rabbids, Rayman, Tom Clancy's, and Watch Dogs among others.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Due to the secrecy around what we worked on and the less visual nature of our work as user researchers I will not provide many specific examples of the processes or content of the three different projects I was involved with.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Two were videogames continuation of well known sagas and the other was a long-awaited brand new game!</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Despite we adjusted methodologies to meet que requiriments specification we take an overarching common process for all three projects:</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-row>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/MarioRabbids2_header.avif"></v-img></v-col>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/wild_header.jpg"></v-img></v-col>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/JustDance2023_header.avif"></v-img></v-col>
                                </v-row>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>
                                    <ol>
                                        <li>Determine with the product managers, designers and other researches the requirement specification, what parts of the game we wanted to test</li>
                                        <li>Screen and recuit participants in our database that matched the targer player of the games</li>
                                        <li>Define and prepare the playtest and/or workshops. This included protocols, structure of the playtest (what needed to be tested and how), scripts for interviews, what data should be gathered (qualitative, quantitative and biometric), etc.</li>
                                        <li>Conduct the playtest, interviews and/or survey</li>
                                        <li>Analyse and synthesise the test and/or workshops results</li>
                                        <li>Deliver and present actionable results to the rest of the stakeholders</li>
                                    </ol>
                                </ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Mario + Rabbids 2: Sparks of Hope</ProjectSectionContentTextH3>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/MarioRabbids2_header.avif"></v-img>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Mario + Rabbids 2: Sparks of Hope is a 2022 action-adventure turn-based tactic/strategy video game. Players are able create their team of characters and must rescue the sparks, who provide different powers that helps the player in battle.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I participated in this proyect with a usability test to determine if the new improvements to the battle system, the different mechanics and weaponery, the interface and the onboarding and tutorial exaplanations were clearly understood by the players. We conducted several feature- and mission-based playtest followed by semi-structured interviews.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>For example we evaluated the understunding and use of real-time elements introduced within the turn-based gameplay along its explanation tutorial. Players had this time the ability to grab a Bob-omb (an exploding enemy character) move around for a few seconds and throw it to an enemy (preferably) before it explodes.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/MR2_Area_1.png"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/MR2_Cover_1.png"></v-img></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/MR2_Area_2.png"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/MR2_Cover_2.png"></v-img></v-col>
                                </v-row>
                                <ProjectSectionContentImageCaption>Other examples may be the understunding of area of movement (left) and use of covers (right).</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Just Dance 2023</ProjectSectionContentTextH3>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/JustDance2023_header.avif"></v-img>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Just Dance 2023 is a dance rhythm game where players must mimic the on-screen dancer's choreography to a chosen song using either the console's controllers or the smartphone app.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I participated in this proyect with a usability test to determine if mechanics, interface and exaplanations were clearly understood by the players. We conducted several playtest followed by semi-structured interviews.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>User interface</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>We evaluated the redesign of the user interface of the game that</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li>underwent a significant change that aimed to emulate the interfaces of streaming services (left)</li>
                                        <li>added a new online multiplayer feature, which also was tested</li>
                                        <li>revamped dancer cards and added emotes (right)</li>
                                    </ul>
                                </ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/JD2023_song_layout.jpg"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/JD2023_dancer_card.jpg"></v-img></v-col>
                                </v-row>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                    <ProjectSectionContentTextH4>New features</ProjectSectionContentTextH4>
                                    <ProjectSectionContentTextP>We evaluated the understunding and of</ProjectSectionContentTextP>
                                    <ProjectSectionContentTextP>
                                        <ul>
                                            <li>the online multiplayer mode</li>
                                            <li>the cross-progression feature that allowed players to set their high scores for each song and playlist, advance their player level, and unlock cosmetics</li>
                                        </ul>
                                    </ProjectSectionContentTextP>
                                    <ProjectSectionContentTextP>During the playtest and interviews we also included a small apreciation evaluation for the new subscription service launched alongside 2023 Edition Just Dance+</ProjectSectionContentTextP>
                                </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Wild</ProjectSectionContentTextH3>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/wild_header.jpg"></v-img>
                                <!-- <v-img cover src="../assets/img/ubisoft/wild_snow_logo.jpg"></v-img> -->
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>WiLD is an immersive survival game set in the prehistoric Neolithic era. Players can take control of either a human or, using shamanic powers, inhabit various animals. Once an animal is controlled, the gameplay transitions to that creature's perspective, capitalizing on its unique skills and attributes.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>For this project, I collaborated with fellow user researchers to conduct an appreciation test. Our goal was to assess the overall appeal of the game, diving deep into the aesthetics of its environment, characters, animals, and gameplay mechanics.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/wild_shamans_concept_art.png"></v-img>
                                <ProjectSectionContentImageCaption>Shaman characters, each boasting a unique personality, within the game world.</ProjectSectionContentImageCaption>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/wild-screen-01-ps4-eu-25nov14.jpg"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/wild-screen-03-ps4-eu-25nov14.jpg"></v-img></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/wild-screen-05-ps4-eu-25nov14.jpg"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/wild-screen-07-ps4-eu-25nov14.jpg"></v-img></v-col>
                                </v-row>
                                <ProjectSectionContentImageCaption>Diverse environments, characters, and animals from the game world."</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>To ensure that players' emotional experiences aligned with the designers' intentions, we conducted an assessment. Participants engaged in free gameplay sessions, after which we conducted structured interviews to capture their emotional reactions. Throughout this process, we utilized Plutchik's Wheel of Emotions as a reference framework to categorize and understand the emotions expressed by the players.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img src="../assets/img/ubisoft/plutchiks_wheel_of_emotions.jpg"></v-img>
                                    </v-col>
                                </row>
                            </ProjectSectionContentImage>
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