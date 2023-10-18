<script>
import ProjectSection from "../components/ProjectSection.vue";
import ProjectSectionTitle from "../components/ProjectSectionTitle.vue";
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
        ProjectSectionTitle,
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
                            <ProjectSectionTitle>
                                <template #title>El Mundo</template>
                                <template #subtitle>Usability & Accessibility evaluations</template>
                            </ProjectSectionTitle>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Orbyt is the first Spanish digital newspapers platform where one can access all the information within a variety of leading publications in Spain.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>

                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>Objective</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The primary objective was to assess and optimize the usability and accessibility of El Mundo's digital presence on the Orbyt platform.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>For this, both usability and accessibility studies were carried out and are described next.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Usability study</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>I conducted an in-depth usability assessment of the Orbyt platform, through a browser in a personal computer, covering multiple interaction touchpoints — from platform access and newspaper content to supplementary multimedia features. This assessment was divided into two main evaluations: user-centric testing and heuristic analysis. Both evaluations culminated in a detailed report, which I then presented to the client.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH6>Evaluation with user</ProjectSectionContentTextH6>
                                <ProjectSectionContentTextP>First, I commenced by examining the user environment, detailing their tasks, preferences, and potential challenges.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Second, I defined a list of eight tasks that recruited users had to carry out. These tasks range from familiarizing with the interface, to more complex functions such as search, finding articles, managing notes and bookmarks, working with different display modes, and making use of social network options.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>To flow smoothly through these eight tasks, I defined a protocol for the evaluation: welcome information, description of the tasks that the user had to perform, data collection during the execution of the tasks, questionnaire on aspects of usability and, finally, a brief interview.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Third, I conducted four pilot tests with users to test and to refine the evaluation process. From the list of tasks to be performed to possible errors in the documents used in the evaluations as well as in the procedures employed.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Fourth, 45 users were recruited to fit the profile needed.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Finally, we performed the usability tests with all 45 users, obtaining quantitative data as well as relevant qualitative information. Each user spent, on average, an hour to perform the tests and answer the questionnaires.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH6>Heuristic evaluation</ProjectSectionContentTextH6>
                                <ProjectSectionContentTextP>Complementing the user-centric approach, I implemented Jakob Nielsen's 10 usability heuristics for a structured and comprehensive evaluation.</ProjectSectionContentTextP>

                                <ProjectSectionContentTextH5>Accessibility study</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Parallel to the usability evaluation, I rigorously assessed El Mundo's accessibility on the Orbyt platform, ensuring adherence to international standards.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The accessibility requirements set out in the World Wide Web Consortium Recommendation WCAG 2.0 (World Content Accessibility Guidelines) were applied. This document defines four principles, 12 guidelines and 61 criteria for success. Each criterion has a level of conformity associated, which can be A (the most important), AA or AAA (the least important).</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>In this study, the scope of the study covered from A up to the AA level. This level was chosen as the minimum required by law in official governmental pages.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Like in the usability study, an analysis and a report of the results were also delivered to the client.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Conclusion</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The results of these evaluations not only provided El Mundo with actionable insights but also positioned the publication for a more inclusive and user-friendly digital experience. My role reaffirmed the importance of aligning business goals with user needs, ultimately driving user satisfaction and engagement.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>
                    </v-col>
                </v-row>
            </main>
        </v-container-fluid>
    </article>
</template>