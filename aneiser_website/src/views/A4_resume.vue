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
      { type: "Portfolio", href: "https://aneiser.github.io/?en", display: "aneiser.github.io" },
      // { type: "Phone", href: "tel:+330650674677", display: "+33 06.50.67.46.77" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "UX Designer with over 5 years of experience translating user research into intuitive digital experiences that align with business goals. — Holding an M.Sc. in Human-Computer Interaction Design, I'm skilled in all aspects of the UX design process, including research, design and testing. — Leveraging a frontend background, I bridge design with technical feasibility in Agile environments, ensuring effective collaboration across multidisciplinary teams.",
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
        industry: "video games",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conducted user research, playtesting workshops and gathered qualitative, quantitative and biometric data.",
          "Synthesized research findings to provide actionable insights for diverse stakeholders in an Agile environment."
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
        title: "UX Designer",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crafted design artefacts that enhanced user experience and boosted Net Promoter Score by 11% for over 10,000 users.", // and features
          "Considered and balanced user, business, and technical aspects to inform decision making and product direction.",
          "Unified multiple products into a seamless cloud solution, fostering collaboration with developers teams.",
          "Played a key role in creating requirements and advocating for design by establishing a style guide and a UI pattern library.",
        ]
      },
      {
        title: "UX Engineer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Advocated for a user-centered approach and promoted design and usability best practices and standards.",
          "Led and coordinated the user research and usability testing.",
          "Led the UI development for a quality assurance platform, trusted by over 3,000 educators."
        ]
      }
    ],
    skills: {
      research: [
        "User Research", "Interviews", "Focus Groups", "Surveys", "Usability Testing", "Heuristic Evaluation", "Personas", "User Journeys", "Task Analysis", "Scenarios", "Mental Models", "Card Sorting", "Design thinking", // "Market Research", "Competitive Analysis"
      ],
      design: [
        "Interaction Design", "Interactive Prototyping", "Wireframes", "Storyboards", "User flows", "Journeys maps", "UI Design", "Product Design", "Information Architecture", "Accessible Design (WCAG 2.0)",
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "NPM"],
      tools: ["Figma", "Adobe XD & Creative Cloud", "Miro", "Balsamiq","Jira", "Notion", "Trello", "Wrike"]
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
        institute: "Alyra",
        graduated: "2023"
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
    title: "Diseñador UX",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/?es", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Diseñador UX con 5 años de experiencia traduciendo investigación de usuarios en experiencias digitales intuitivas que se alinean con objetivos de negocio. — Con un Máster en Diseño de Interacción Persona-Ordenador, tengo habilidades en todos los aspectos del proceso de diseño UX, incluyendo investigación, diseño y pruebas. — Aprovechando un pasado en frontend, conecto el diseño con la viabilidad técnica en ambientes Agiles, asegurando una colaboración efectiva entre equipos multidisciplinares.",
      // "Experto en traducir la investigación de usuarios en soluciones UX/UI de alta calidad, desde wireframes hasta prototipos de alta fidelidad. Hábil en colaborar con equipos multidisciplinares para entregar diseños centrados en el usuario y alineados con los objetivos empresariales."
    ],
    competencies: [
      "Creación y gestión de artefactos de diseño.", // "como wireframes, storyboards, diagramas de flujo y prototipos.", "para aplicaciones web y mobiles.", "utilizando Figma, Adobe Xd, etc.",
      "Realizar investigaciones de múltiples fases y métodos mixtos y pruebas de usabilidad.", // "para optimizar elementos y mejorar la experiencia de usuario.",
      "Seguimiento ágil de tareas y colaboración con equipos multifuncionales." // interfuncionales
      // "Liderar el proceso de diseño y asegurar el alineamiento con los objetivos de negico.",
    ],
    experiences: [
      {
        title: "Ingeniero UX",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: ["Elaborar una interfaz intuitiva para varios cursos online para una plataforma de e-learning."]
      },
      {
        title: "Investigador de usuarios",
        company: "Ubisoft",
        industry: "Video juegos",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Realizar investigación de usuarios, organizar playtesting y recopilar datos cualitativos, cuantitativos y biométricos.",
          "Sintetizar resultados de investigación en información práctica para diferentes stakeholders en un entorno ágil."
        ]
      },
      {
        title: "Investigador / Diseñador UX",
        company: "Universidad París 8",
        industry: "Mundo académico",
        startDate: "2021",
        endDate: "",
        tasks: ["Liderar el proceso de diseño desde la investigación hasta el prototipado y la prueba de un prototipo de wearable pionero."]
      },
      {
        title: "Ingeniero UX",
        company: "DV Business Solutions",
        industry: "Telecomunicación",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Crear artefactos de diseño y funcionalidades, mejorando la experiencia del usuario y aumentando el Net Promoter Score en un 11 % para más de 10000 usuarios.",
          "Equilibrar objetivos de UX, técnicos y empresariales para informar la toma de decisiones y la dirección del producto.",
          "Unificar varios productos en una solución cloud sin fisuras, fomentando la colaboración con equipos multidisciplinares.",
          "Desempeñar un papel clave en la creación de requisitos del producto y la promoción del diseño (creando una guía de estilos, una biblioteca de componentes, etc.)."
        ]
      },
      {
        title: "Ingeniero UX",
        company: "Universidad Politécnica de Madrid",
        industry: "educación",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Abogar por un diseño centrado en el usuario, promoviendo estándares de usabilidad y impulsando la excelencia UX.",
          "Liderar y coordinar la investigación de usuarios y los test de usabilidad.",
          "Liderar el desarrollo de la UI para una plataforma de aseguramiento de calidad, usada por más de 3000 educadores."
        ]
      }
    ],
    skills: {
      research: [
        "Investigación de Usuarios", "Entrevistas", "Focus groups", "Encuestas", "Test de Usabilidad", "Evaluación Heurística", "Personas", "User journeys", "Análisis de Tareas", "Escenarios", "Modelos Mentales", "Card sorting", "Investigación de Mercado", "Análisis Competitivo"
      ],
      design: [
        "Diseño de Interacción", "Diseño de Interfaz de Usuario", "Diseño de Producto", "Arquitectura de Información", "Diseño Accesible (WCAG 2.0)", "Prototipado Rápido", "Wireframes", "Storyboards", "Prototipado de baja y alta fidelidad"
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "NPM"],
      tools: ["Figma", "Adobe Xd", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"]

    },
    languages: [
      { language: "Inglés", proficiency: "C1" },
      { language: "Francés", proficiency: "B2" },
      { language: "Español", proficiency: "nativo" },
      { language: "Lengua de Signos Española", proficiency: "nativo" }
    ],
    educations: [
      {
        degree: "Desarrollador Blockchain / Web 3.0",
        institute: "Alyra",
        graduated: "2023"
      },
      {
        degree: "Máster en Diseño de Interacción Persona-Ordenador",
        institute: "KTH Royal Institute of Technology & Université Paris Saclay",
        graduated: "2021"
      },
      {
        degree: "Ingeniería Informática",
        institute: "Universidad Politécnica de Madrid",
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
      { type: "Portfolio", href: "https://aneiser.github.io/?fr", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+330650674677", display: "+33 06.50.67.46.77" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Designer UX avec 5 ans d'expérience traduisant la recherche utilisateur en expériences numériques intuitives alignées avec les objectifs commerciaux. — Titulaire d'un BAC+5 en Conception d'Interaction Homme-Ordinateur, je suis compétent dans tous les aspects du processus de conception UX, y compris la recherche, la conception et les tests. — Profitant d'une expérience en frontend, je fais le lien entre la conception et la faisabilité technique dans des environnements Agile, garantissant une collaboration efficace avec des équipes multidisciplinaires."
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
          "Réaliser des recherches utilisateurs, des playtesting et collecté des données qualitatives, quantitatives et biométriques.",
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
          "Unifier plusieurs produits en une solution cloud fluide, favorisant la collaboration avec plusieurs équipes.", // des équipes multidisciplinaires | des équipes cross-functional
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
          "Prôner la centralité de l'utilisateur, promouvant les normes d'utilisabilité et favorisant l'excellence UX.",
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
      { language: "Langue des signes espagnole", proficiency: "maternelle" }
    ],
    educations: [
      {
        degree: "Blockchain / Web 3 développer ",
        institute: "Alyra",
        graduated: "2023"
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
          <section v-if="currentResume.competencies">
            <h2 class="section">CORE COMPETENCIES</h2>
            <ResumeCoreCompetencies :competencies="currentResume.competencies" />
          </section>

          <section v-if="currentResume.skills">
            <h2 class="section">SKILLS</h2>
            <ResumeSkill v-for="(skillsList, category) in currentResume.skills" :key="category" :category="category" :skills="skillsList"/>
          </section>

          <section v-if="currentResume.languages">
            <h2 class="section">LANGUAGES</h2>
            <ResumeLanguage :languages="currentResume.languages" />
          </section>

          <section v-if="currentResume.educations">
            <h2 class="section">EDUCATION</h2>
            <ResumeEducation v-for="education in currentResume.educations" :key="education.id" :education="education" />
          </section>
        </aside>

        <!-- EXPERIENCE SECTION -->
        <section v-if="currentResume.experiences" class="main">
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