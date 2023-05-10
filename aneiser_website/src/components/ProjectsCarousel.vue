<script>
import ProjectCard from "./ProjectCard.vue";

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: [
                { id: 5,
                  role: 'User Research',
                  date: '2022',
                  title: 'Memorable gaming experiences',
                  status: 'Coming soon',
                  theme: 'ubisoft',
                  img: '/src/assets/img/project_card/mario_rabbids_sparks_of_hope_screenshot_4__flip_vertical.webp',
                  link: 'ubisoft'
                },
                { id: 4,
                  role: 'UX Design & Research',
                  date: '2016-19',
                  title: 'The merge of several products into one',
                  status: 'Coming soon',
                  theme: 'smartcontact',
                  img: '/src/assets/img/project_card/smartcontact.png',
                  link: 'smartcontact'
                },
                { id: 3,
                  role: 'UX Design & Research',
                  date: '2019-21',
                  title: 'Prototyping for sound awareness',
                  status: 'Coming soon',
                  theme: 'insignum',
                  img: '/src/assets/img/project_card/insignum.jpg',
                  link: 'insignum'
                },
                { id: 2,
                  role: 'UX Design & Research',
                  date: '? - ?',
                  title: 'Prototyping an accessibility evaluation tool',
                  status: 'Coming soon',
                  theme: 'hera',
                  img: '/src/assets/img/project_card/hera.png',
                  link: 'hera'
                },
                { id: 1,
                  role: 'User Research',
                  date: '? - ?',
                  title: 'Usability & Accessibility evaluations',
                  status: 'Coming soon',
                  theme: 'el-mundo',
                  img: '/src/assets/img/project_card/el_mundo.png',
                  link: 'el-mundo'
                },
            ]
        }
    }
}
</script>

<template>
    <ProjectCard v-for="project in projects" :key="project.id" :project=project />
</template>

<style scoped></style>