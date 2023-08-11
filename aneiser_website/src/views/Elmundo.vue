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
                        <v-img cover src="/assets/img/project_card/el_mundo.png"></v-img>
                    </v-col>
                </v-row>
            </header>
            <main>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <ProjectSection>
                            <div class="d-flex align-center justify-center">
                                <div>
                                    <h1 class="text-h1 mb-8">El Mundo</h1>
                                    <h2 class="text-h2 mb-8">Usability & Accessibility evaluations</h2>
                                </div>
                            </div>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Orbyt is the first Spanish digital newspapers platform where one can access all the information within a variety of leading publications in Spain.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>Objective</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The client need was to analyze the degree of usability and accessibility of the national newspaper El Mundo through the Orbyt platform.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>For this, both usability and accessibility studies, were carried out and are described next.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Usability study</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>The evaluation was performed on the Orbyt platform, through a browser in a personal computer. The evaluation covered the access to the platform, the content of the newspaper, the complementary multimedia content and a variety of elements resulting from the interaction with any of the previous parts.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The usability evaluation was compound out of two parts: an evaluation with users and a usability heuristics evaluation resulting on an analysis and a report of the results that were delivered to the client.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH6>Evaluation with user</ProjectSectionContentTextH6>
                                <ProjectSectionContentTextP>First, I analyzed the context of use, including information about users, tasks, and the environment.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Second, I defined a list of eight tasks that recruited users had to carry out. These tasks range from familiarizing with the interface, to more complex functions such as search, finding articles, managing notes and bookmarks, working with different display modes, and making use of social network options.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>To flow smoothly through these eight tasks, I defined a protocol for the evaluation: welcome information, description of the tasks that the user had to perform, data collection during the execution of the tasks, questionnaire on aspects of usability and, finally, a brief interview.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Third, I carried out four pilot tests with users to test and to refine the evaluation process. From the list of tasks to be performed to possible errors in the documents used in the evaluations as well as in the procedures employed.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Fourth, 45 users were recruited to fit the profile needed.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Finally, we performed the usability tests with all 45 users, obtaining quantitative data as well as relevant qualitative information. Each user spends, on average, an hour to perform the tests and answer the questionnaires.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH6>Heuristic evaluation</ProjectSectionContentTextH6>
                                <ProjectSectionContentTextP>On the other hand, to complement this user-based evaluation I followed the 10 heuristics of Jakob Nielsen on a heuristic evaluation.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Accessibility study</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Similarly, the evaluation of the accessibility of the online newspaper El Mundo was done through the Orbyt platform.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The accessibility requirements set out in the World Wide Web Consortium Recommendation WCAG 2.0 (World Content Accessibility Guidelines) were applied. This document defines four principles, 12 guidelines and 61 criteria for success. Each criterion has a level of conformity associated, which can be A (the most important), AA or AAA (the least important).</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In this study, the scope of the study covered from A up to the AA level. This level was chosen as the minimum required by law in official governmental pages.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Like in the usability study, an analysis and a report of the results were also delivered to the client.</ProjectSectionContentTextP>
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