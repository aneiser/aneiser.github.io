<script>
import ProjectSection from "../components/project/ProjectSection.vue";
import ProjectSectionContentImage from "../components/project/ProjectSectionContentImage.vue";
import ProjectSectionContentImageCaption from "../components/project/ProjectSectionContentImageCaption.vue";
import ProjectSectionContentTable from "../components/project/ProjectSectionContentTable.vue";
import ProjectSectionContentText from "../components/project/ProjectSectionContentText.vue";
import ProjectSectionContentTextCard from "../components/project/ProjectSectionContentTextCard.vue";
import ProjectSectionContentTextH3 from "../components/project/ProjectSectionContentTextH3.vue";
import ProjectSectionContentTextH4 from "../components/project/ProjectSectionContentTextH4.vue";
import ProjectSectionContentTextH5 from "../components/project/ProjectSectionContentTextH5.vue";
import ProjectSectionContentTextH6 from "../components/project/ProjectSectionContentTextH6.vue";
import ProjectSectionContentTextP from "../components/project/ProjectSectionContentTextP.vue";
import ProjectSectionContentTextQuote from "../components/project/ProjectSectionContentTextQuote.vue";
import ProjectSectionContentVideo from "../components/project/ProjectSectionContentVideo.vue";

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
                        <v-img cover src="/assets/img/smartcontact/smartcontact__header.png"></v-img>
                    </v-col>
                </v-row>
                <div class="d-flex align-center justify-center">
                    <div>
                        <h1 class="text-h1 mb-8">SmartContact</h1>
                        <h2 class="text-h2 mb-8">The merge of several products into one</h2>
                    </div>
                </div>
            </header>
            <main>
                <slot>
                    <!-- <v-row no-gutters>
                        <v-col md="8" offset-md="2" class="ma-0"></v-col>
                    </v-row> -->
                </slot>
            </main>
        </v-container-fluid>
    </article>
</template>