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
                  industry: "Video games",
                  title: 'Memorable gaming experiences',
                  status: '',
                  theme: 'ubisoft',
                  img: '/assets/img/project_card/mario_rabbids_sparks_of_hope_screenshot_4__flip_vertical.webp',
                  link: 'projects/ubisoft'
                },
                { id: 4,
                  role: 'UX Research & Design',
                  industry: "Telecom",
                  title: 'The merge of several products into one',
                  status: '',
                  theme: 'smartcontact',
                  img: '/assets/img/project_card/smartcontact.png',
                  link: 'projects/smartcontact'
                },
                { id: 3,
                  role: 'UX Research & Design',
                  industry: "Academia",
                  title: 'Prototyping for sound awareness',
                  status: '',
                  theme: 'insignum',
                  img: '/assets/img/project_card/insignum.jpg',
                  link: 'projects/insignum'
                },
                { id: 2,
                  role: 'UX Research & Design',
                  industry: "Accesibility",
                  title: 'Prototyping an accessibility evaluation tool',
                  status: '',
                  theme: 'hera',
                  img: '/assets/img/project_card/hera.png',
                  link: 'projects/hera'
                },
                { id: 1,
                  role: 'User Research',
                  industry: "Digital media",
                  title: 'Usability & Accessibility evaluations',
                  status: '',
                  theme: 'el-mundo',
                  img: '/assets/img/project_card/el_mundo.png',
                  link: 'projects/el-mundo'
                },
            ]
        }
    }
}
</script>

<template>
    <ProjectCard v-for="project in projects" :key="project.id" :project=project />
</template>