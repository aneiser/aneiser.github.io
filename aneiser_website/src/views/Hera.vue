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
                        <!-- <v-img cover src="/assets/img/hera/aside_logo.png"></v-img> -->
                        <!-- <v-img cover src="/assets/img/hera/mefi_proto.png"></v-img> -->
                    </v-col>
                </v-row>
            </header>
            <main>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <!-- <ProjectSection> -->
                            <div class="d-flex align-center justify-center">
                                <div>
                                    <h1 class="text-h1 mb-8">Hera</h1>
                                    <h2 class="text-h2 mb-8">Prototyping an accessibility evaluation tool</h2>
                                </div>
                            </div>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>HERA is a semi-automatic accessibility evaluation tool originated from the Firefox plugin HERA-FFX.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        <!-- </ProjectSection> -->

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The problem</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Despite being a tool presenting many of the desired features by web accessibility consultants it was considered a tedious tool.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Usability analysis</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>I got to work and conducted a usability analysis to find that Hera-FFX had usability problems.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>This analysis consisted of three parts: A System Usability Satisfaction survey, an AttrakDiff survey and comments from the users.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH5>System Usability Satisfaction Survey</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Ten statements. Five positives and five negatives to which the user must respond on a scale from one to five what is his or her level of agreement with each sentence. This results in a score</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The average score of more than 500 SUS studies is 68. Hera-FFX scored 53'5. According to the percentile range, Hera-FFX did not reach a D. Which means it failed the survey.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="6" offset="3">
                                        <v-img cover src="../assets/img/hera/sus_survey.png"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Hera-FFX SUS Score. Minimum: 2'5, average: 53'49 and maximum: 90.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>AttrakDiff Survey</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Twenty-eight pairs of opposing concepts valued as positive or negative. Complicated Vs. Simple, Ugly vs. Attractive, etc.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The user indicates which concept is closer to his or her perception and how close it is.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Half of the concepts were positives and the other half negatives.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH5>Comments from users</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>The comments were collected through free response questions. In general, those were negatives.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>"It takes a too much time", "Too many clicks are needed", "The UI is ugly and obsolete" and "The tool is not friendly" are some examples.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Only one user, among 57 young Europeans, said positives comments.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>As a result, I made a series of improvements proposals. Those proposals were focus on efficiency, automatisms, accessibility, help and feedback and graphic design.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The process</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextH4>Context of Use Analysis</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>I also conducted a context of use  analysis consisted of three parts: Users, tasks, and the environment</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Users</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>I needed to know which were their characteristic and necessities</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I used the persona technique which led me to set up two clearly defined user profiles:</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li>Andrea as an expert user</li>
                                        <li>Nicolas as a novice user</li>
                                    </ul>
                                </ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Task</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>I also needed to know what the tasks of users of this kind of tools usually are and how were organized. Being these tasks: Browse, begin an automatic evaluation, test success criteria, etc.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I designed two different scenarios with essentials tasks.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Environment</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Although there were restrictions none of them were especially relevant to be mentioned at this point.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>Low fidelity prototype</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>Before designing the low fidelity prototype, I proposed a layout scheme, which characteristics satisfied many of the needs, and a Navigation map to describe the Information Architecture and connect the interaction contexts.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Layout scheme</ProjectSectionContentTextH5>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/hera/main_ui_interaction_context.jpg"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Main UI interaction context.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/hera/eval_window_&_fails_tech_list.jpg"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Main evaluation window (left) - List of faults and sufficient techniques (right).</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Navigation map</ProjectSectionContentTextH5>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/hera/nav_map.jpg"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Navigation map.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Paper-based prototype</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Now you can see some screens from the prototype used for the usability tests. It developed the scenarios. The user interacted with it by tapping the elements.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/hera/lofi_proto.png"></v-img>
                                <ProjectSectionContentImageCaption>Low fidelity prototype screens.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>User tests</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>One facilitator and an observer conducted the user tests.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In the test, we studied the interaction of five people with the low fidelity prototype. Three of them were accessibility expert and two novice students.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>We got ready the tasks list, the surveys, the observer sheet, and we even made an evaluation protocol. Oh! There was a pilot test too.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The outcome</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>I'm going to keep the same structure to facilitate the comparison. Let's recap:</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li>The System Usability Satisfaction Survey</li>
                                        <li>The AttrakDiff Survey</li>
                                        <li>The comments from users</li>
                                    </ul>
                                </ProjectSectionContentTextP>

                                <ProjectSectionContentTextH4>System Usability Satisfaction Survey</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The Hera-FFX average scored was 53'5. Hera standalone got an average of 65'6.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>This mean 7'5 points more, an improvement of 12% in the percentile range. Now it gets slightly over C, which mean Standalone Hera pass it, and almost reach the SUS average.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>But let's calm down. It is necessary to realize that these surveys were made with a considerable smaller sample. It is less representative. In addition, we are comparing a prototype with closed task and less time of use with a real tool with real tasks and more, more time of use.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="6" offset="3">
                                        <v-img cover src="../assets/img/hera/sus_survey_2.png"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Hera-FFX SUS Score. Minimum: 2'5, average: 53'49 and maximum: 90. Standalone Hera SUS Score. Minimum: 57'5, average: 65'63 and maximum: 77'5.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>AttrakDiff Survey</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>Remember pairs of opposing concepts valued as positive or negative, in which Hera-FFX obtained a 50/50.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>With the low fidelity prototype, these figures changed up to 86% positive concepts, 10% negative concepts and  4% of neutral concepts.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/hera/attrakdiff_2.png"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Two charts representings the values.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>

                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>Comments from users</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The comments were collected in the same way, free response questions.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>These comments were negative without any positive. We also collected some suggestions</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Medium fidelity prototype</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>In this iteration, some errors were fixed. It is computer-based, so it included colours, a higher level of detail and was interactive.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>At this point, the study finished. This prototype would serve as the basis for future design.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/hera/mefi_proto.png"></v-img>
                                <ProjectSectionContentImageCaption>Medium fidelity prototype screens.</ProjectSectionContentImageCaption>
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