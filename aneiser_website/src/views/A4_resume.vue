<script setup>
import { ref } from 'vue'
import ResumeExperience from '../components/resume/ResumeExperience.vue';
import ResumeEducation from '../components/resume/ResumeEducation.vue';
import ResumeSkill from '../components/resume/ResumeSkill.vue';
import ResumeLanguage from '../components/resume/ResumeLanguage.vue';
import ResumeCoreCompetencies from '../components/resume/ResumeCoreCompetencies.vue';
import ResumeSummary from '../components/resume/ResumeSummary.vue';

const currentLanguage = ref('en');

const resumes = ref([
  // en
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
      "Experienced UX Designer with over 4 years of experience in crafting intuitive digital experiences for web and mobile platforms and an M.Sc. in Human-Computer Interaction Design. Proficient in prototyping and user research.",
      "Leveraging a front-end background, I bridge design with technical feasibility, fostering seamless collaboration with multidisciplinary teams. Continuously seeking avenues for growth and advancement.",
      // "Skilled at translating user research into high-quality UX/UI solutions, from wireframes to high-fidelity prototypes. Adept at collaborating with multidisciplinary teams to deliver user-centric and business-aligned designs."
    ],
    competencies: [
      "Crafting and managing design artefacts.", // "such as wireframes, storyboards, flow diagrams, and prototypes.", "for both web and mobile applications.", "Utilizing Figma, Adobe Xd, etc.",
      "Conduct multi-phased, mixed-methods research and usability tests.", // "to optimize elements for improved user experience.",
      "Agile task tracking and collaboration with cross-functional teams."
      // "Leading design process and ensuring alignment with business objectives.",
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
        tasks: ["Led the design process from research to prototyping and testing of a pioneering wearable prototype."]
      },
      {
        title: "UX Engineer",
        company: "DV Business Solutions",
        industry: "Telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crafted design artefacts and features, enhancing user experience and boosting Net Promoter Score by 11% for over 10,000 users.",
          "Balanced business, technical, and UX perspectives to inform decision making and product direction.",
          "Unified multiple products into a seamless cloud solution, fostering collaboration with multidisciplinary teams.",
          "Played a key role in product requirements creation and design advocacy (creating a style guide, a component library, etc.)."
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
  // es
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
      "Diseñador UX con más de 4 años de experiencia creando experiencias digitales intuitivas para plataformas web y móviles y un M.Sc. en Diseño de Interacción Humano-Computadora. Experto en prototipos e investigación de usuarios.",
      "Apoyandome en un pasado de desarrollo front-end, conecto el diseño con la viabilidad técnica, fomentando una colaboración fluida con equipos multidisciplinarios. Buscando continuamente oportunidades para crecimiento y avance.",
      // "Experto en traducir la investigación de usuarios en soluciones UX/UI de alta calidad, desde wireframes hasta prototipos de alta fidelidad. Hábil en colaborar con equipos multidisciplinarios para entregar diseños centrados en el usuario y alineados con los objetivos empresariales."
    ],
    competencies: [
      "Creación y gestión de artefactos de diseño.", // "como wireframes, storyboards, diagramas de flujo y prototipos.", "para aplicaciones web y mobiles.", "utilizando Figma, Adobe Xd, etc.",
      "Realizar investigaciones de múltiples fases y métodos mixtos y pruebas de usabilidad.", // "para optimizar elementos y mejorar la experiencia de usuario.",
      "Seguimiento de tareas ágiles y colaboración con equipos interfuncionales.",
      // "Liderar el proceso de diseño y asegurar el alineamiento con los objetivos de negico.",
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
        tasks: ["Liderar el proceso de diseño desde la investigación hasta el prototipado y la prueba de un prototipo de wearable pionero."]
      },
      {
        title: "UX Engineer",
        company: "DV Business Solutions",
        industry: "Telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crear artefactos de diseño y funcionalidades, mejorando la experiencia del usuario y aumentando el Net Promoter Score en un 11 % para más de 10000 usuarios.",
          "Equilibrar las perspectivas empresariales, técnicas y de UX para informar la toma de decisiones y la dirección del producto.",
          "Unificar múltiples productos en una solución cloud sin fisuras, fomentando la colaboración con equipos multidisciplinarios.",
          "Desempeñar un papel clave en la creación de requisitos del producto y la defensa del diseño (creando una guía de estilos, una biblioteca de componentes, etc.)."
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
          "Led the UI development for a quality assurance platform, trusted por más de 3000 educators."
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
  // fr
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
      "Designer UX expérimenté avec plus de 4 ans d'expérience dans la création d'expériences numériques intuitives pour plateformes web et mobiles et un BAC+5 en Design d'Interaction Homme-Machine. Compétent en prototypage et recherche utilisateur.",
      "Fort d'une expérience en front-end, je fais le lien entre le design et la faisabilité technique, favorisant une collaboration fluide avec des équipes multidisciplinaires. En quête constante d'opportunités pour progresser et évoluer.",
      // "Doué pour traduire la recherche utilisateur en solutions UX/UI de haute qualité, des wireframes aux prototypes haute fidélité. Apte à collaborer avec des équipes multidisciplinaires pour livrer des conceptions centrées sur l'utilisateur et alignées sur les objectifs commerciaux.",
    ],
    competencies: [
      "Création et gestion d'artefacts de conception.", // "tels que wireframes, storyboards, diagrammes de flux et prototypes.", "pour les applications web et mobiles.", "En utilisant Figma, Adobe Xd, etc.",
      "Conduire des recherches multi-phases avec des méthodes mixtes et des tests d'utilisabilité.", // "pour optimiser les éléments pour une meilleure expérience utilisateur.",
      "Suivi des tâches Agile et collaboration avec des équipes interfonctionnelles."
      // "Diriger le processus de conception et garantir l'alignement avec les objectifs commerciaux.",
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
        tasks: ["Diriger le processus de conception de la recherche au prototypage et au test d'un prototype wearable pionnier."]
      },
      {
        title: "Ingénieur UX",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Concevoir des artefacts de design et des fonctionnalités, améliorant l'UX et augmentant le Net Promoter Score de 11% pour plus de 10000 utilisateurs.",
          "Équilibrer les perspectives commerciales, techniques et UX pour éclairer la prise de décision et l'orientation du produit.",
          "Unifier plusieurs produits en une solution cloud fluide, favorisant la collaboration avec des équipes multidisciplinaires.",
          "Jouer un rôle clé dans la création des exigences du produit et la défense de la conception (création d'un style guide, d'une bibliothèque de composants, etc.)."
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
          "Diriger le développement UI pour une plateforme d'assurance qualité, approuvée par plus de 3000 éducateurs."
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
      { language: "Anglais", proficiency: "C1" },
      { language: "Français", proficiency: "B2" },
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
    width: 56%;
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