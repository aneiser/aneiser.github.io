<script setup>
import { ref, computed } from 'vue';
import ResumeExperience from '@/components/resume/ResumeExperience.vue';
import ResumeEducation from '@/components/resume/ResumeEducation.vue';
import ResumeSkill from '@/components/resume/ResumeSkill.vue';
import ResumeLanguage from '@/components/resume/ResumeLanguage.vue';
import ResumeCoreCompetencies from '@/components/resume/ResumeCoreCompetencies.vue';
import ResumeSummary from '@/components/resume/ResumeSummary.vue';

const currentLanguage = ref('en');

const resumes = ref([
  // en
  {
    // █████ █   █  ████ █     █████ █████ █   █
    // █     ██  █ █     █       █   █     █   █
    // ████  █ █ █ █  ██ █       █   █████ █████
    // █     █  ██ █   █ █       █       █ █   █
    // █████ █   █  ███  █████ █████ █████ █   █
    lang: "en",
    name: ["Adrian", "Neila", "Serrano"],
    title: "Product Designer",
    contacts: [
      // { type: "Country", display: "Paris, France" },
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=PERSON__COMPANY&utm_language=english", display: "aneiser.github.io" },
      // { type: "Phone", href: "tel:+330650674677", display: "+33 6.50.67.46.77" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "LinkedIn" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
    ],
    summary: [
      "Product Designer with 6+ years of experience designing digital products end-to-end in corporate and product environments. Strong background in ideation, prototyping, usability testing, supporting user research activities, and collaborating closely with product managers, developers, and researchers. Experienced refining solutions through feedback while balancing user needs, business goals, and technical constraints to deliver consistent user experiences.",
    ],
    experiences: [
      {
        title: "Digital Product Designer",
        company: "Procter & Gamble",
        industry: "ecommerce",
        startDate: "2024",
        endDate: "Present",
        tasks: [
          "Redesigned digital loyalty program across EU markets, achieving +17% SUS in testing and setting the base for an European app.",
          "Ideated, prototyped and validated solutions in Figma, collaborating closely with product managers, developers, legal and brand teams.",
          "Established a continuous user feedback loop adapting the HEART framework, to monitor UX impact and inform design decisions.",
        ]
      }, {
        title: "UI/UX Designer (Remote)",
        company: "Evoloom",
        industry: "elearning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Designed and implemented accessible UI components, flows, and layouts to support the creation and delivery of educational content."
        ]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "videogames",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conducted playtesting sessions & interviews to analyse qualitative, quantitative, and biometric data to assess player experience.",
          "Synthesized insights to support game design decisions by the team.",
        ]
      },
      {
        title: "UX Researcher",
        company: "University Paris 8",
        industry: "academia",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Designed & evaluated an experimental wearable from research to validation by prototyping & testing different interaction concepts.",
        ]
      },
      {
        title: "UX Researcher & Designer",// & Frontend Developer",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Unified six disconnected products into a single cloud platform, redesigning information architecture and interaction patterns.",
          "Improved usability and interaction quality, achieving a +11% NPS for the digital product and services",
          "Developed reusable UI components and a style guide to increase consistency and efficiency in design delivery.",
        ]
      },
      {
        title: "UX/UI Designer",// & Frontend Developer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Designed UI for a QA platform & conducted usability testing to achieve +12% improvement in SUS and +72% in positive feedback."
        ]
      }
    ],
    skills: {
      design: [
        "Interaction Design", "Usability", "UCD", "User Flows", "Wireframing", "Journey mapping", "Prototyping", "Information Architecture", "Accessibility (WCAG)"
      ],
      research: [
        "User interviews", "Usability Testing", "UX & Product metrics", "Feedback loops", "Heuristic evaluation", "Surveys",
      ],
      tools: ["Figma", "Miro", "Confluence", "Hotjar", "Jira", "Notion", "Trello"],
      development: ["Cross-functional collaboration", "Reqs. Documentation & Design Handover", "International settings"]
    },
    languages: [
      { language: "English",
        proficiency: "fluent - C1"
      },
      { language: "French",
        proficiency: "intermediate - B2"
      },
      { language: "Spanish",
        proficiency: "native"
      },
      { language: "Spanish Sign Language",
        proficiency: "native"
      }
    ],
    educations: [
      // {
      //   degree: "Blockchain / Web 3 developer",
      //   institute: "Alyra",
      //   graduated: "2023"
      // },
      {
        degree: "M.Sc. Human-Computer Interaction Design",// (Hybrid)",
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
    // █████ ████   ███  █   █ █████ █████ █   █
    // █     █   █ █   █ ██  █   █   █     █   █
    // █████ ████  █████ █ █ █   █   █████ █████
    //     █ █     █   █ █  ██   █       █ █   █
    // █████ █     █   █ █   █ █████ █████ █   █
    lang: "es",
    name: ["Adrian", "Neila", "Serrano"],
    title: "Product Designer",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=PERSON__COMPANY&utm_language=spanish", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Product Designer con 4+ años de experiencia creando experiencias centradas en el usuario. Con un <strong>Máster en Interacción Persona-Ordenador</strong>, tengo habilidades tanto en <strong>investigación con usuarios</strong> como en <strong>diseño UX</strong>. Mi <strong>pasado en frontend</strong> asegura una buena colaboración entre diseño y tecnología y me familiariza con <strong>entornos Agile y remotos</strong>. Con una <strong>mentalidad curiosa</strong>, me encanta descubrir nuevas oportunidades de aprendizaje y crecimiento.",
      // "Experto en traducir la investigación de usuarios en soluciones UX/UI de alta calidad, desde wireframes hasta prototipos de alta fidelidad. Hábil en colaborar con equipos multidisciplinares para entregar diseños centrados en el usuario y alineados con los objetivos empresariales."
    ],
    // competencies: [
    //   "Creación y gestión de artefactos de diseño.", // "como wireframes, storyboards, diagramas de flujo y prototipos.", "para aplicaciones web y mobiles.", "utilizando Figma, Adobe Xd, etc.",
    //   "Realizar investigaciones de múltiples fases y métodos mixtos y pruebas de usabilidad.", // "para optimizar elementos y mejorar la experiencia de usuario.",
    //   "Seguimiento ágil de tareas y colaboración con equipos multifuncionales." // interfuncionales
    //   // "Liderar el proceso de diseño y asegurar el alineamiento con los objetivos de negico.",
    // ],
    experiences: [
      {
        title: "UX/UI Designer (Remoto)",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Desarrollar una interfaz de usuario para cursos de una plataforma de e-learning, cumpliendo con plazos ajustados."
        ]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "videojuegos",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Realizar +50 sesiones de investigación de usuarios, recopilando datos de diversa naturaleza para <strong>descubrir problemas de jugabilidad</strong>.",
          "Ofrecer información procesable a 15 <em>stakeholders</em>, abordando las frustraciones y <strong>mejorando la participación en el juego</strong>."
        ]
      },
      {
        title: "UX Researcher/Designer",
        company: "Universidad París 8",
        industry: "Ámbito académico",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Liderar todas las fases del proceso de diseño de un prototipo <em>wearable</em> involucrando a 70 participantes y +20 sesiones de investigación.",
          "Elaborar 3 prototipos, iterar y llevar a cabo 5 rondas de pruebas sobre uno de ellos, confirmando el potencial para trabajos futuros."
        ]
      },
      {
        title: "UX/UI Designer",// & Desarrollador Frontend",
        company: "DV Business Solutions",
        industry: "telecomunicaciones",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "<strong>Aumentar el <em>Net Promoter Score</em> en un 11%</strong> y lograr <strong>ahorros anuales</strong> de al menos <strong>€7,500</strong> mediante diseño centrado en el usuario.", // al reducir el tiempo de servicio de soporte.",
          "Liderar docenas de actividades de investigación con el personal de varios equipos, <strong>guiando decisiones de diseño y funcionalidad</strong>.",
          "Elaborar e iterar <strong>cientos de artefactos de diseño</strong> para garantizar una comunicación clara de la intención de diseño y viabilidad técnica.",
          "<strong>Lanzar dos nuevos productos</strong> utilizando un enfoque <em>MVP</em> y <strong>fusionar 7 productos en una única plataforma</strong> con +10,000 usuarios.",

          // "Elaboré artefactos de diseño que mejoraron la experiencia del usuario y aumentaron el Net Promoter Score en un 11% para +10,000 usuarios.", // y funciones
          // "Demostré habilidades de toma de decisiones al equilibrar las necesidades del usuario, los objetivos comerciales y las limitaciones técnicas para orientar la dirección del producto",
          // "Unifiqué varios productos en una solución en la nube sin problemas, fomentando la colaboración con equipos de desarrollo.",
          // "Colaboré estrechamente con gerentes de productos y desarrolladores para alinear objetivos de UX/UI con objetivos del producto, fomentando la sinergia y logrando hitos clave.",
          // "Establecí una guía de estilo y una biblioteca de patrones de UI para mantener la consistencia de marca y coherencia en diversos productos."
        ]
      },
      {
        title: "UX/UI Designer",// & Desarrollador Frontend",
        company: "Universidad Politécnica de Madrid",
        industry: "educación",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Realizar +40 pruebas de usabilidad, <strong>aumentando la usabilidad (SUS) en un 12%</strong> y <strong>mejorando el feedback en un 72%</strong>.",
          "Crear la UI de una plataforma de QA con +3,000 educadores, aplicando sólidas prácticas centradas en el usuario y usabilidad."
        ]
      }
    ],
    skills: {
      research: [
        "Entrevistas", "Encuestas", "Focus Groups", "Test de Usabilidad", "Personas", "User Journeys & Flows", "Design Thinking", "Escenarios", "Evaluación Heurística", "Card Sorting", "Análisis Competitivo"
      ],
      design: [
        "Diseño Centrado en Usuario", "Diseño de Interacción", "Storyboards", "Arquitectura de Información", "Sistemas de Diseño", "Diseño Adaptativo", "Diseño Accesible (WCAG 2)", "Prototipado de Baja y Alta Fidelidad, Interactivo y de Video",
      ],
      tools: ["Figma", "Adobe XD", "Hotjar", "Miro", "Notion"],
      development: ["HTML", "CSS", "Javascript", "Vue.js", "Git"]
    },
    languages: [
      { language: "Inglés", proficiency: "fluido - C1" },
      { language: "Francés", proficiency: "intermedio - B2" },
      { language: "Español", proficiency: "nativo" },
      { language: "Lengua de Signos Española", proficiency: "nativo" }
    ],
    educations: [
      // {
      //   degree: "Desarrollador Blockchain / Web 3.0",
      //   institute: "Alyra",
      //   graduated: "2023"
      // },
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
    // █████ ████  █████ █   █  ████ █   █
    // █     █   █ █     ██  █ █     █   █
    // ████  ████  ████  █ █ █ █     █████
    // █     █   █ █     █  ██ █     █   █
    // █     █   █ █████ █   █  ████ █   █
    lang: "fr",
    name: ["Adrian", "NEILA", "SERRANO"],
    title: "UX Designer",
    contacts: [
      { type: "Country", display: "Paris, France" },
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=PERSON__COMPANY&utm_language=french", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+33650674677", display: "+33 6.50.67.46.77" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "UX Designer avec +4 ans d'expérience dans la création d'expériences centrées sur l'utilisateur. Titulaire d'un <strong>BAC+5 en Interaction Homme-Machine</strong>, je suis compétent dans les aspects de <strong>conception</strong> et de <strong>recherche</strong>. Mon expérience en <strong>développement frontend</strong> relie la conception à la technologie. À l'aise dans un environnement <strong>Agile</strong> et prospérant dans des contextes <strong>à distance</strong> et <strong>multiculturels</strong>, j'ai collaboré avec succès avec des équipes diversifiées à l'échelle mondiale. Avec un <strong>esprit curieux</strong>, je suis toujours impatient de m'investir dans de nouvelles opportunités d'apprentissage et de croissance.",
      // "UX Designer avec +4 ans d'expérience dans la création d'expériences centrées sur l'utilisateur. Titulaire d'un <strong>BAC+5 en Interaction Homme-Machine</strong> et ayant un passé en <strong>développement frontend</strong>, je suis compétent dans les aspects de la <strong>recherche utilisateur</strong> et du <strong>conception</strong>. Avec un <strong>esprit curieux</strong>, je suis toujours impatient de m'investir dans de nouvelles opportunités d'apprentissage et de croissance.",
      // "Doué pour traduire la recherche utilisateur en solutions UX/UI de haute qualité, des wireframes aux prototypes haute fidélité. Apte à collaborer avec des équipes multidisciplinaires pour livrer des conceptions centrées sur l'utilisateur et alignées sur les objectifs commerciaux.",
    ],
    // competencies: [
    //   "Création et gestion d'artefacts de conception.", // "tels que wireframes, storyboards, diagrammes de flux et prototypes.", "pour les applications web et mobiles.", "En utilisant Figma, Adobe Xd, etc.",
    //   "Conduire des recherches multi-phases avec des méthodes mixtes et des tests d'utilisabilité.", // "pour optimiser les éléments pour une meilleure expérience utilisateur.",
    //   "Suivi des tâches Agile et collaboration avec des équipes interfonctionnelles."
    //   // "Diriger le processus de conception et garantir l'alignement avec les objectifs commerciaux.",
    // ],
    experiences: [
      {
        title: "UX/UI Designer",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Développement d'une UI convaincante pour des cours sur une plateforme d'apprentissage en ligne, respectant des délais serrés."
        ]
      },
      {
        title: "User researcher",
        company: "Ubisoft",
        industry: "jeux vidéo",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conduction de +50 sessions de recherche utilisateur et playtests, collectant des données pour <strong>détecter des problèmes de gameplay</strong>.",
          "Fourniture d'informations exploitables à +15 parties prenantes, <strong>traitant les frustrations des joueurs</strong> et <strong>améliorant l'engagement</strong>."
        ]
      },
      {
        title: "User researcher et UX Designer",
        company: "Université Paris 8",
        industry: "milieu universitaire",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Conception d'un prototype portable de la phase conceptuelle à la réalisation, avec 70 participants et +20 sessions de recherche.",
          "Création de 3 prototypes, effectuation de 2 mises à jour sur l'un d'eux et réalisation de 5 rounds de tests, confirmant le potentiel."
        ]
      },
      {
        title: "UX Designer",// & Développeur Frontend",
        company: "DV Business Solutions",
        industry: "télécommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Les efforts de conception centrés sur l'utilisateur ont abouti à une <strong>augmentation de 11% du Net Promoter Score</strong> et à des <strong>économies annuelles d'au moins</strong> <strong>7500 €</strong>.", // en réduisant le temps de service d'assistance.",
          "Direction de nombreuses activités de recherche avec le personnel, <strong>orientant les décisions de conception et de fonctionnalités</strong>.",
          "Création et itération de <strong>centaines d'artefacts de conception visuelle</strong> pour assurer une communication claire de l'intention de conception et de la viabilité technique.",
          "<strong>Lancement de deux nouveaux produits</strong> et <strong>fusion de 7 produits en une plateforme unifiée</strong> desservant +10000  utilisateurs.",

          // "Création d'artefacts de conception qui ont amélioré l'expérience utilisateur et ont augmenté le Net Promoter Score de 11% pour +10000  utilisateurs.", // et fonctionnalités
          // "Démonstration de compétences en prise de décision en équilibrant les besoins des utilisateurs, les objectifs commerciaux et les contraintes techniques pour orienter la direction du produit",
          // "Unification de plusieurs produits en une solution cloud transparente, favorisant la collaboration avec les équipes de développeurs.",
          // "Collaboration étroite avec les chefs de produit et les développeurs pour aligner les objectifs UX/UI avec les objectifs du produit, favorisant la synergie et atteignant des jalons clés.",
          // "Établissement d'un guide de style et d'une bibliothèque de motifs d'interface utilisateur pour maintenir la cohérence de la marque et la cohérence à travers divers produits.",
        ]
      },
      {
        title: "UX/UI Designer",// & Développeur Frontend",
        company: "Universidad Politécnica Madrid",
        industry: "éducation",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Conduction de +40 tests de convivialité, <strong>augmentation du score de l'échelle SUS de 12%</strong> et <strong>retours positifs de 72%</strong>.",
          "Création de l'UI pour une plateforme QA utilisée par +3000 éducateurs, basée sur de solides pratiques centrées sur l'utilisateur et de convivialité."
        ]
      }
    ],

    skills: {
      design: [
        "Conception centrée sur l'humain", "Conception d'interaction", "Conception accessible (WCAG 2)", "Conception adaptative", "Création de wireframes", "Prototypage basse et haute fidélité", "Design Systems", "Scénarios", "Architecture de l'information", "Prototypage interactif"
      ],
      research: [
        "Études ethnographiques", "Entretiens", "Enquêtes", "Tests de convivialité", "Évaluation heuristique", "Groupes de discussion", "Design Thinking", "Personas", "Parcours et flux utilisateur", "Analyse concurrentielle", "Scénarios", "Tri de cartes"
      ],
      // development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "npm"],
      tools: ["Figma", "Adobe Xd", "Hotjar", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"],
    },
    languages: [
      { language: "Anglais", proficiency: "courant - C1" },
      { language: "Français", proficiency: "intermédiaire - B2" },
      { language: "Espagnol", proficiency: "maternelle" },
      { language: "Langue Signes Espagnole", proficiency: "maternelle" }
    ],
    educations: [
      // {
      //   degree: "Blockchain / Web 3 développer ",
      //   institute: "Alyra",
      //   graduated: "2023"
      // },
      {
        degree: "BAC+5 Human-Computer Interaction",
        institute: "Université Paris Saclay & KTH Royal Institute of Technology",
        graduated: "2021"
      },
      {
        degree: "BAC+3 Ingénierie Informatique",
        institute: "Universidad Politécnica Madrid",
        graduated: "2014"
      }
    ]
  }
]);

const currentResume = ref({});

const sectionTitles = computed(() => {
  switch (currentLanguage.value) {
    case 'en':
      return {
        competencies: "CORE COMPETENCIES",
        skills: "SKILLS",
        research: "User Research & Testing",
        design: "Product & Interaction Design",
        development: "Collaboration & Delivery",
        tools: "Tools",
        languages: "LANGUAGES",
        educations: "EDUCATION",
        experiences: "EXPERIENCE",
      };
    case 'es':
      return {
        competencies: "COMPETENCIAS",
        skills: "COMPETENCIAS",
        research: "Investigación de Usuarios",
        design: "Diseño",
        development: "Desarrollo Frontend",
        tools: "Herramientas",
        languages: "Idiomas",
        educations: "FORMACIÓN",
        experiences: "EXPERIENCIA",
      };
    case 'fr':
      return {
        competencies: "COMPÉTENCES",
        skills: "COMPÉTENCES",
        research: "User research",
        design: "Design",
        development: "Development Frontend",
        tools: "Outils",
        languages: "LANGUES",
        educations: "FORMATION",
        experiences: "EXPÉRIENCE",
      };
    default:
      return {
        competencies: "CORE COMPETENCIES",
        skills: "SKILLS",
        research: "Research",
        design: "Design",
        development: "Development",
        tools: "Tools",
        languages: "LANGUAGES",
        educations: "EDUCATION",
        experiences: "EXPERIENCE",
      };
  }
});

const updateCurrentResume = () => {
  currentResume.value = resumes.value.find(r => r.lang === currentLanguage.value);
};

updateCurrentResume();

</script>

<template>
  <div class="a4-page-bg">
    <div class="a4-page">
      <article>
        <header class="header">
          <div class="hero">
            <div class="header__image">
              <v-img cover src="/assets/img/resume/GDL_4210_Post.jpg" alt="Profile Image"></v-img>
            </div>

            <div class="header__fullname">
              <div class="header__name">
                <span class="header__name">
                  <h1>{{ currentResume.name[0] }}</h1>
                </span>
                <div class="header__surname">
                  <span>
                    <h1>{{ currentResume.name[1] }}</h1>
                  </span>
                  <span>
                    <h1>{{ currentResume.name[2] }}</h1>
                  </span>
                </div>
              </div>
              <span class="header__title">
                <h1>{{ currentResume.title }}</h1>
              </span>
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
              <h2 class="section">{{ sectionTitles.competencies }}</h2>
              <ResumeCoreCompetencies :competencies="currentResume.competencies" />
            </section>

            <section v-if="currentResume.skills">
              <h2 class="section">{{ sectionTitles.skills }}</h2>
              <ResumeSkill v-for="(skillsList, category) in currentResume.skills" :key="category" :category="sectionTitles[category]" :skills="skillsList"/>
            </section>

            <section v-if="currentResume.languages">
              <h2 class="section">{{ sectionTitles.languages }}</h2>
              <ResumeLanguage :languages="currentResume.languages" />
            </section>

            <section v-if="currentResume.educations">
              <h2 class="section">{{ sectionTitles.educations }}</h2>
              <ResumeEducation v-for="education in currentResume.educations" :key="education.id" :education="education" />
            </section>
          </aside>

          <!-- EXPERIENCE SECTION -->
          <section v-if="currentResume.experiences" class="main">
            <h2 class="section">{{ sectionTitles.experiences }}</h2>
            <ResumeExperience v-for="(experience, index) in currentResume.experiences" :key="experience.id" :experience="experience" :class="{ highlight: index === 9 }" />
          </section>
        </div>
      </article>
    </div>
    <v-btn class="floating-button" to="/Adrian_UX_Designer.pdf" target="_blank">Download CV</v-btn>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.a4-page-bg {
  background: radial-gradient(var(--color-gray-lighter) 1px, transparent 1px);
  background-size: 24px 24px;
  overflow: auto;
}

.a4-page {
  width: 210mm;
  height: 297mm;
  margin: auto;
  padding: 13mm;
  padding: 10mm 13mm; /* ES */
  /*padding: 7mm 13mm; /* FR */
  background-color: var(--color-white);
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

article h1,
article h2 {
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

article :deep(h4),
article :deep(li) {
  margin-bottom: 4pt;
  /* list-style-type: none; */
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
  /*line-height: 21px;*/
}

.header__title {
  font-size: 24px;
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
  color: var(--color-gray);
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
  text-align: justify;
}

.side>section:first-child>h2,
.main h2.section {
  margin-top: 0;
}

.side>section:first-child>div:last-child {
  margin-top: 15px;
}

.side {
  width: 31.4%;
  /*width: 34.1%; /* ES */
  /*width: 33.9%; /* FR */
}

.main {
  width: 61.8%; /* FR */
  width: 59.3%; /* EN */
  width: 61.1%; /* ES */
}

section {
  background-color: var(--color-white);
}

.section {
  font-size: 22pt;
  margin: 35px 0 10px;
  padding: 0;
}

.section::after {
  content: "";
  display: block; /* To ensure the line takes up its own space */
  width: 16pt;
  height: 3px;
  background-color: var(--color-red-accent);
  margin-top: -4px; /* Optional: adds a bit of space between the h2 text and the red line */
}

article .highlight {
  padding: 10px 50px 10px 20px; /* EN */
  padding: 10px 50px 10px 10px; /* ES */
  background-color: rgb(173 21 25 / 10%);
  margin: 0 -50px 0 -20px; /* EN */
  margin: 0 -50px 0 -10px; /* ES */
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
  color: var(--color-red-accent);
}

.floating-button {
  color: var(--color-red);
  border: 1px solid var(--color-red);
  border-radius: 2rem;
  text-shadow: none;
  text-transform: none;
  font-size: 1.2rem;

  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}</style>