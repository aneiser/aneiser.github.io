<script setup>
import { ref } from 'vue'
import ResumeExperience from '../components/resume/ResumeExperience.vue';
import ResumeEducation from '../components/resume/ResumeEducation.vue';
import ResumeSkill from '../components/resume/ResumeSkill.vue';
import ResumeLanguage from '../components/resume/ResumeLanguage.vue';
import ResumeCoreCompetencies from '../components/resume/ResumeCoreCompetencies.vue';
import ResumeSummary from '../components/resume/ResumeSummary.vue';

const currentLanguage = ref('fr');

const resumes = ref([
  {
    lang: "en",
    name: ["Adrian", "Neila", "Serrano"],
    title: "UX Designer",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Experienced UX Designer boasting 4+ years in the field and an M.Sc. in Human-Computer Interaction Design. Proficient in prototyping and user research to craft intuitive experiences.",
      "Leveraging a front-end background, I bridge design with technical feasibility, fostering seamless collaboration with multidisciplinary teams. Continuously seeking avenues for growth and advancement."
    ],
    competencies: [
      "Crafting and managing design artefacts.",
      "Conduct multi-phased, mixed-methods research and usability tests.",
      "Agile task tracking and collaboration with cross-functional teams."
    ],
    experiences: [
      {
        title: "UX Engineer",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: ["Crafted compelling online courses for an e-learning platform leveraging existing educational resources."]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "Video games",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conducted user research, playtesting workshops and gathered qualitative, quantitative and biometric data.",
          "Synthesized research findings into actionable insights for different stakeholders in an agile environment."
        ]
      },
      {
        title: "UX Researcher / Designer",
        company: "University Paris 8",
        industry: "academia",
        startDate: "2021",
        endDate: "",
        tasks: ["Led the design process from research and conceptualization to prototyping and testing of a pioneering wearable prototype."]
      },
      {
        title: "UX Engineer",
        company: "DV Business Solutions",
        industry: "Telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crafted design artefacts and features, reducing complexity and enhancing user experience; boosted Net Promoter Score by 11% for a base of 10,000+ users.",
          "Balanced business, technical, and UX perspectives to inform decision making and product direction.",
          "Unified six products into a seamless cloud communications solution, fostering collaboration across teams and departments.",
          "Played a pivotal role in requirements creation, pioneered a style guide, and enriched a component library."
        ]
      },
      {
        title: "UX Engineer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Advocated user-centricity, driving UX excellence and promoting usability standards.",
          "Led and coordinated the user research and usability testing.",
          "Led the UI development for a quality assurance platform, trusted by over 3,000 educators."
        ]
      }
    ],
    skills: {
      research: [
        "User Research", "Interviews", "Focus Groups", "Surveys", "Usability Testing", "Heuristic Evaluation", "Personas", "User Journeys", "Task Analysis", "Scenarios", "Mental Models", "Card Sorting", "Market Research", "Competitive Analysis"
      ],
      design: [
        "Interaction Design", "UI Design", "Product Design", "Information Architecture", "Accessible Design (WCAG 2.0)", "Rapid Prototyping", "Wireframing", "Storyboards", "Low- and High-fidelity Prototyping"
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "NPM"],
      tools: ["Figma", "Adobe Xd", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"]
    },
    languages: [
      { language: "English", proficiency: "C1" },
      { language: "French", proficiency: "B2" },
      { language: "Spanish", proficiency: "native" },
      { language: "Spanish Sign Language", proficiency: "native" }
    ],
    educations: [
      {
        degree: "Blockchain / Web 3 developer",
        institute: "Alyra · 2023",
        graduated: ""
      },
      {
        degree: "M.Sc. Human-Computer Interaction & Design",
        institute: "KTH Royal Institute of Technology & Université Paris Saclay",
        graduated: "2021"
      },
      {
        degree: "B.Sc. Computer Science",
        institute: "Polytechnic University of Madrid",
        graduated: "2014"
      }
    ]
  },
  {
    lang: "es",
    name: ["Adrian", "Neila", "Serrano"],
    title: "UX Designer",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Experienced UX Designer boasting 4+ years in the field and an M.Sc. in Human-Computer Interaction Design. Proficient in prototyping and user research to craft intuitive experiences.",
      "Leveraging a front-end background, I bridge design with technical feasibility, fostering seamless collaboration with multidisciplinary teams. Continuously seeking avenues for growth and advancement."
    ],
    competencies: [
      "Crafting and managing design artefacts.",
      "Conduct multi-phased, mixed-methods research and usability tests.",
      "Agile task tracking and collaboration with cross-functional teams."
    ],
    experiences: [
      {
        title: "UX Engineer",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: ["Crafted compelling online courses for an e-learning platform leveraging existing educational resources."]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "Video games",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conducted user research, playtesting workshops and gathered qualitative, quantitative and biometric data.",
          "Synthesized research findings into actionable insights for different stakeholders in an agile environment."
        ]
      },
      {
        title: "UX Researcher / Designer",
        company: "University Paris 8",
        industry: "academia",
        startDate: "2021",
        endDate: "",
        tasks: ["Led the design process from research and conceptualization to prototyping and testing of a pioneering wearable prototype."]
      },
      {
        title: "UX Engineer",
        company: "DV Business Solutions",
        industry: "Telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crafted design artefacts and features, reducing complexity and enhancing user experience; boosted Net Promoter Score by 11% for a base of 10,000+ users.",
          "Balanced business, technical, and UX perspectives to inform decision making and product direction.",
          "Unified six products into a seamless cloud communications solution, fostering collaboration across teams and departments.",
          "Played a pivotal role in requirements creation, pioneered a style guide, and enriched a component library."
        ]
      },
      {
        title: "UX Engineer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Advocated user-centricity, driving UX excellence and promoting usability standards.",
          "Led and coordinated the user research and usability testing.",
          "Led the UI development for a quality assurance platform, trusted by over 3,000 educators."
        ]
      }
    ],
    skills: {
      research: [
        "User Research", "Interviews", "Focus Groups", "Surveys", "Usability Testing", "Heuristic Evaluation", "Personas", "User Journeys", "Task Analysis", "Scenarios", "Mental Models", "Card Sorting", "Market Research", "Competitive Analysis"
      ],
      design: [
        "Interaction Design", "UI Design", "Product Design", "Information Architecture", "Accessible Design (WCAG 2.0)", "Rapid Prototyping", "Wireframing", "Storyboards", "Low- and High-fidelity Prototyping"
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "NPM"],
      tools: ["Figma", "Adobe Xd", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"]
    },
    languages: [
      { language: "English", proficiency: "C1" },
      { language: "French", proficiency: "B2" },
      { language: "Spanish", proficiency: "native" },
      { language: "Spanish Sign Language", proficiency: "native" }
    ],
    educations: [
      {
        degree: "Blockchain / Web 3 developer",
        institute: "Alyra · 2023",
        graduated: ""
      },
      {
        degree: "M.Sc. Human-Computer Interaction & Design",
        institute: "KTH Royal Institute of Technology & Université Paris Saclay",
        graduated: "2021"
      },
      {
        degree: "B.Sc. Computer Science",
        institute: "Polytechnic University of Madrid",
        graduated: "2014"
      }
    ]
  },
  {
    lang: "fr",
    name: ["Adrian", "NEILA", "SERRANO"],
    title: "Designer UX",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+330650674677", display: "+33 06.50.67.46.77" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Designer UX expérimenté avec plus de 4 ans dans le domaine et un Bac+5 en Interaction Homme-Machine & Design. Compétent en prototypage et en recherche utilisateur pour créer des expériences intuitives.",
      "Fort d'une expérience en front-end, je fais le lien entre le design et la faisabilité technique, favorisant une collaboration fluide avec des équipes multidisciplinaires. En quête constante d'opportunités pour progresser et évoluer."
    ],
    competencies: [
      "Création et gestion d'artefacts de conception.",
      "Réaliser des recherches multi-phases et multi-méthodes ainsi que des tests d'utilisabilité.",
      "Suivi des tâches Agile et collaboration avec des équipes inter-fonctionnelles."
    ],
    experiences: [
      {
        title: "Ingénieur UX",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: ["Élaborer des cours en ligne captivants pour une plateforme d'e-learning en exploitant les ressources éducatives existantes."]
      },
      {
        title: "Chercheur utilisateur",
        company: "Ubisoft",
        industry: "jeux vidéo",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Réaliser des recherches utilisateurs, des ateliers de playtesting et collecté des données qualitatives, quantitatives et biométriques.",
          "Synthétiser les résultats de recherche en insights actionnables pour différents intervenants dans un environnement agile."
        ]
      },
      {
        title: "Chercheur / Designer UX",
        company: "Université Paris 8",
        industry: "milieu universitaire",
        startDate: "2021",
        endDate: "",
        tasks: ["Diriger la conception d'un wearable pour personnes sourdes, de la recherche au prototypage et tests, dans le cadre d'un projet personnel et academic."]
      },
      {
        title: "Ingénieur UX",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Concevoir des artefacts de design et des fonctionnalités, réduisant la complexité et améliorant l'UX; augmenté le Net Promoter Score de 11% pour plus de 10,000 utilisateurs.",
          "Équilibrer les perspectives commerciales, techniques et UX pour éclairer la prise de décision et l'orientation du produit.",
          "Unifier six produits en une solution de communication cloud intégrée, favorisant la collaboration entre équipes et départements.",
          "Jouer un rôle crucial dans la création des exigences, initié un guide de style, et enrichi une bibliothèque de composants."
        ]
      },
      {
        title: "Ingénieur UX",
        company: "Universidad Politécnica Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Prôner la centralité de l'utilisateur, favorisant l'excellence UX et promouvant les normes d'utilisabilité.",
          "Diriger et coordonner la recherche utilisateur et les tests d'utilisabilité.",
          "Diriger le développement UI pour une plateforme d'assurance qualité, approuvée par plus de 3,000 éducateurs."
        ]
      }
    ],
    skills: {
      research: [
        "Recherche utilisateur", "Entretiens", "Groupes de discussion", "Enquêtes", "Tests d'utilisabilité", "Évaluation heuristique", "Personas", "Parcours utilisateur", "Analyse de tâches", "Scénarios", "Modèles mentaux", "Tri de cartes", "Recherche de marché", "Analyse concurrentielle"
      ],
      design: [
        "Conception d'interaction", "Conception d'UI", "Conception de produit", "Architecture de l'information", "Conception accessible (WCAG 2.0)", "Prototypage rapide", "Wireframes", "Storyboards", "Prototypage basse et haute fidélité"
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "NPM"],
      tools: ["Figma", "Adobe Xd", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"],
    },
    languages: [
      { language: "Français", proficiency: "C1" },
      { language: "Anglais", proficiency: "B2" },
      { language: "Espagnol", proficiency: "maternelle" },
      { language: "Langue des signes", proficiency: "maternelle" }
    ],
    educations: [
      {
        degree: "Blockchain / Web 3 developer ",
        institute: "Alyra · 2023",
        graduated: ""
      },
      {
        degree: "BAC+5 en Interaction Homme-Ordinateur",
        institute: "Université Paris Saclay & KTH Royal Institute of Technology",
        graduated: "2021"
      },
      {
        degree: "BAC+3 en ingénierie informatique",
        institute: "Universidad Politécnica Madrid",
        graduated: "2014"
      }
    ]
  }
]);

const currentResume = ref({});

const updateCurrentResume = () => {
  currentResume.value = resumes.value.find(r => r.lang === currentLanguage.value);
};

updateCurrentResume();

</script>

<template>
  <div class="a4-page">
    <article>
      <header class="header">
        <div class="hero">
          <div class="header__image">
            <v-img cover src="/assets/img/resume/GDL_4210_Post.jpg" alt="Profile Image"></v-img>
          </div>

          <div class="header__fullname">
            <div class="header__name">
              <span class="header__name"><h1>{{ currentResume.name[0] }}</h1></span>
              <div class="header__surname">
                <span><h1>{{ currentResume.name[1] }}</h1></span>
                <span><h1>{{ currentResume.name[2] }}</h1></span>
              </div>
            </div>
            <span class="header__title"><h1>{{ currentResume.title }}</h1></span>
          </div>

          <div class="header__contact">
            <div v-for="item in currentResume.contacts" :key="item.type">
                <a :href="item.href">{{ item.display }}</a>
            </div>
          </div>
        </div>
        <ResumeSummary :summary="currentResume.summary" />
      </header>

      <div class="body">
        <!-- CORE COMPETENCIES, SKILLS, LANGUAGES, and EDUCATION SECTION -->
        <aside class="side">
          <section>
            <h2 class="section">CORE COMPETENCIES</h2>
            <ResumeCoreCompetencies :competencies="currentResume.competencies" />
          </section>

          <section>
            <h2 class="section">SKILLS</h2>
            <ResumeSkill v-for="(skillsList, category) in currentResume.skills" :key="category" :category="category" :skills="skillsList"/>
          </section>

          <section>
            <h2 class="section">LANGUAGES</h2>
            <ResumeLanguage :languages="currentResume.languages" />
          </section>

          <section>
            <h2 class="section">EDUCATION</h2>
            <ResumeEducation v-for="education in currentResume.educations" :key="education.id" :education="education" />
          </section>
        </aside>

        <!-- EXPERIENCE SECTION -->
        <section class="main">
          <h2 class="section">EXPERIENCE</h2>
          <ResumeExperience v-for="(experience, index) in currentResume.experiences" :key="experience.id" :experience="experience" :class="{ highlight: index === 3 }" />
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.a4-page {
    width: 210mm;
    height: 297mm;
    margin: 20px auto;
    padding: 13mm;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    overflow: hidden; /* Oculta el contenido que desborda el contenedor */
    position: relative; /* Establece la posición relativa para los elementos internos */
  }

  article {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-size: 13px;
    font-size: 14px;
    font-size: 10pt;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    line-height: 1.35;
}

article h1, article h2 {
  font-family: 'Bebas Neue', Impact, 'Arial Black', 'Helvetica Neue Bold', 'Helvetica Bold', Tahoma, 'Trebuchet MS', sans-serif;
  font-weight: normal;
}

article :deep(h3) {
  font-weight: bold;
}

article :deep(h4) {
  font-style: italic;
  font-weight: normal;
}

article :deep(ul) {
  /* padding-left: 0; */
}

article :deep(li) {
  margin-bottom: 4pt;
  /* list-style-type: none; */
}

/* article :deep(li::before) {
    content: '-';
    margin-left: -10px;
    /* content: '\2013';
    margin-left: -12px; *
    margin-right: 6px;
    display: inline-block;
} */

.header {
}

.hero {
  display: flex;
  justify-content: space-between; /* This ensures that the space between the three main children is maximized. */
  align-items: center; /* Vertically aligns items in the middle. */
}
.header__image {
  width: 128px; /* Or whatever size you prefer. */
  height: 128px; /* Make sure it's square to keep the circle shape. */
  overflow: hidden;
  margin-right: 24px;
  border-radius: 50%; /* Makes the image rounded. */
  transform: rotate(5deg);
}

.header__image :deep(img) {
  top: 0;
  position: relative;
}

.header__fullname {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-grow: 1;
}

.header__name {
    display: flex;
    align-items: flex-start;
}
.header__name {
    font-size: 36px;
    line-height: 0.9;
    margin-right: 6px; /* Espacio entre "Adrian" y los otros dos nombres */
}

.header__surname {
    display: flex;
    flex-direction: column;
    margin-top: 2px;
    letter-spacing: 0.5px;
}

.header__surname span {
    font-size: 16px;
    line-height: 21px;
}

.header__title {
    font-size: 32px;
    line-height: 32px;
    line-height: 0.9;
    letter-spacing: 1px;
    color: white;
    -webkit-text-stroke: 1px black;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
}

.header__contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  font-family: "calluma";
  color: #888888;
}
.header__contact a {
    color: inherit; /* This will use the color of the parent element */
}

.body {
    display: flex;
    justify-content: space-between;
}
.body :deep(div) {
  margin: 5px 0 10px;
}

.side .section:first-child,
.main .section:first-child {
  margin-top: 0;
}

.side {
  width: 36%;
}

.main {
    width: 55%;
}

.section {
  font-size: 22pt;
  margin: 20px 0 10px;
}

.section::after {
  content: "";
  display: block;      /* To ensure the line takes up its own space */
  width: 16pt;
  height: 3px;
  background-color: #AD1519;
  margin-top: -4px;     /* Optional: adds a bit of space between the h2 text and the red line */
}

article .highlight {
  padding: 10px 50px 10px 20px;
  background-color: rgb(173 21 25 / 10%);
  margin: 0 -50px 0 -20px;
  position: relative;
}

article .highlight::before {
  content: "Highlight";
  position: absolute;
  top: 50%;
  top: calc(50% + (0.5em * 5)); /* Ajuste para tomar en cuenta la longitud del texto */
  right: 10px;
  transform: rotate(-90deg) translateX(105%);
  transform-origin: right bottom;
  white-space: nowrap;

  font-family: 'Bebas Neue', sans-serif; /* Usando Bebas Neue como tipo de letra */
  font-size: 10px;
  letter-spacing: 0.5em; /* Espaciado entre letras del 50% */
  color: #AD1519;
}
</style>