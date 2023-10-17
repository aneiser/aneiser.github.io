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
                        <v-img cover src="/assets/img/ubisoft/new-ubisoft-logo.jpg"></v-img>
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
                                    <h2 class="text-h2 mb-8">Memorable gaming experiences</h2>
                                </div>
                            </div>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Ubisoft isn't just another video game company. With its global reach spanning several development studios, it has made a big name for itself in the gaming world with hits like Assassin's Creed, Far Cry, Tom Clancy's and Just Dance.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>As user researchers, the magic happens behind the curtain. The essence of our work isn't always visible but is ever-present in the player experiences.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In line with my non-disclosure agreement, I can't share detailed examples from the three projects I worked on. Two extensions of iconic sagas and one eagerly anticipated, fresh new game!</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-row>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/MarioRabbids2_header.avif"></v-img></v-col>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/wild_header.jpg"></v-img></v-col>
                                    <v-col cols="4"><v-img cover src="../assets/img/ubisoft/JustDance2023_header.avif"></v-img></v-col>
                                </v-row>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <!-- <ProjectSectionContentTextP>Our Unified Approach</ProjectSectionContentTextP> -->
                                <ProjectSectionContentTextP>Across all projects, while methodologies were adjusted, our overarching research process remained consistent:</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ol>
                                        <li>Collaboration with product managers, designers, and fellow researchers to determine which aspects of the game to evaluate.</li>
                                        <li>Precision recruiting from our rich database to mirror the game's target audience.</li>
                                        <li>Defining playtests or workshops: from protocols and structures of the playtest to interview scripts and the diverse data to be gathered (qualitative, quantitative and biometric).</li>
                                        <li>Conducting the playtests, in-depth interviews and questionnaires.</li>
                                        <li>Crunching the data to distill meaningful insights.</li>
                                        <li>Translating insights into actionable directives presented to the rest of the stakeholders.</li>
                                    </ol>
                                </ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/MarioRabbids2_header.avif"></v-img>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Mario+Rabbids Sparks of Hope</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>In this tactical delight, players craft their teams and embark on a quest to rescue the "sparks" - entities giving unique powers that helps the player in battle.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>My participation here centered on usability tests. We examined the revamped battle system, mechanics, weaponry, user interface, and the onboarding and tutorial explanations to ensure they were clearly understood by the players. We conducted several feature- and mission-based playtests, followed by semi-structured interviews.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>An illustrative example from our study was the exploration of players' understanding and use of real-time elements woven into turn-based gameplay. For instance, players could grab a ticking Bob-omb (an exploding enemy character), move around for a few seconds, and strategically toss it —all within their own turn— before it detonated.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Another aspect of our study delved into players' understanding of game mechanics. For example, we explored their grasp of the 'area of movement', where players needed to gauge the range and limitations of character mobility. Additionally, we also examined their proficiency in using covers, which played a pivotal role in strategizing defense and planning ambushes against opponents.</ProjectSectionContentTextP>
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
                                <ProjectSectionContentImageCaption>Players' grasp of game mechanics: understanding the area of movement (left) and using covers for defense and ambush strategies (right).</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/JustDance2023_header.avif"></v-img>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Just Dance 2023</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Just Dance 2023 is a rhythm-based game where players mimic on-screen choreography to selected songs using either console controllers or a smartphone app.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>My participation was shaped around usability tests, delving into mechanics, user interface, and their intuitive appeal. We conducted playtests followed by semi-structured interviews to assess whether our designs met our intended objectives.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>User interface</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>In our evaluation of Just Dance 2023, particular attention was given to the game's user interface which had undergone a significant transformation:</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li><strong>Adoption of Streaming Services Aesthetics</strong>. The redesigned interface now mirrors the look and feel of popular streaming services. This change was initiated to make the navigation more intuitive for players familiar with such platforms, aiming to enhance user-friendliness and provide a modernized experience.</li>
                                        <li><strong>Revamped Dancer Cards and Emotes</strong>. The dancer cards, which serve as player profiles showcasing achievements and stats, received a design overhaul. Additionally, emotes were introduced, allowing players to express themselves and interact in a fun, engaging manner within the game's community.</li>
                                    </ul>
                                </ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Together, these changes aimed to elevate the player experience, making it more immersive, interactive, and in line with contemporary design trends.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-row>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/JD2023_song_layout.jpg"></v-img></v-col>
                                    <v-col cols="6"><v-img cover src="../assets/img/ubisoft/JD2023_dancer_card.jpg"></v-img></v-col>
                                </v-row>
                                <ProjectSectionContentImageCaption>Left: Interface inspired by popular streaming services aesthetics. Right: Updated dancer cards.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                    <ProjectSectionContentTextH4>New features</ProjectSectionContentTextH4>
                                    <ProjectSectionContentTextP>Additionally, we evaluated user reception of the cross-progression feature, online multiplayer mode, and the shiny new Just Dance+ subscription service.</ProjectSectionContentTextP>
                                    <ProjectSectionContentTextP>
                                        <ul>
                                            <li><strong>Introduction of Online Multiplayer</strong>. Beyond just the aesthetic updates, functional enhancements were also incorporated. A new online multiplayer feature was introduced, expanding the game's play modes. This allowed players to compete or cooperate with others around the globe, and its usability and performance were rigorously tested to ensure a smooth experience.</li>
                                            <li><strong>Cross-progression Functionality</strong>. This newly implemented feature empowered players to log high scores for individual songs and entire playlists. Furthermore, as players progressed, they could level up and unlock various in-game cosmetics, enhancing personalization and engagement.</li>
                                        </ul>
                                    </ProjectSectionContentTextP>
                                    <ProjectSectionContentTextP>During our playtests and interviews we incorporated a light appreciation evaluation for the Just Dance+ subscription service, launched alongside 2023 Edition of Just Dance. This was aimed at discerning player reception and understanding their sentiments regarding the new offering.</ProjectSectionContentTextP>
                                </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/ubisoft/wild_header.jpg"></v-img>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>WiLD</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>WiLD is an immersive survival game set in the prehistoric Neolithic era. Players can take control of either a human or, through shamanic powers, embody various animals. Once an animal is controlled, the gameplay transitions to that creature's perspective, leveraging its unique skills and attributes.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>During my time, the focus was on an appreciation test. I collaborated with fellow user researchers to assess the overall appeal of the game, diving deep into the aesthetics of its environment, characters, animals, and gameplay mechanics.</ProjectSectionContentTextP>
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
                                <ProjectSectionContentImageCaption>Diverse environments, characters, and animals from the game world.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>To ensure that players' emotional experiences aligned with the designers' intentions, we conducted an assessment where participants engaged in free gameplay sessions, after which we conducted structured interviews to capture their emotional reactions. Throughout this process, we utilized Plutchik's Wheel of Emotions as a reference tool to categorize and understand if the emotions expressed by the players resonated emotionally and aligned with the creative vision of the designers.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img src="../assets/img/ubisoft/plutchiks_wheel_of_emotions.jpg"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Plutchik's Wheel of Emotions used as a reference tool.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>
                    </v-col>
                </v-row>
            </main>
        </v-container-fluid>
    </article>
</template>