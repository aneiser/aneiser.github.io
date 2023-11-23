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
    title: "UX Designer",
    contacts: [
      // { type: "Country", display: "Paris, France" },
      { type: "Portfolio", href: "https://aneiser.github.io/?en", display: "aneiser.github.io" },
      // { type: "Phone", href: "tel:+33650674677", display: "+33 6 50 67 46 77" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "UX/UI Designer with 4+ years of experience in crafting user-centric experiences. Holding a <strong>M.Sc. in HCI Design</strong>, I'm skilled in both <strong>design</strong> and <strong>research</strong> aspects. My <strong>frontend background</strong> bridges design with technology. Comfortable in <strong>Agile</strong> and thriving in <strong>remote</strong> and <strong>multicultural</strong> global settings, I've successfully collaborated with diverse teams worldwide. With a <strong>curious mindset</strong>, I am always eager to delve into new learning and growing opportunities.",
      // "Skilled at translating user research into high-quality UX/UI solutions, from wireframes to high-fidelity prototypes. Adept at collaborating with multidisciplinary teams to deliver user-centric and business-aligned designs."
    ],
    // competencies: [
    //   "Crafting and managing design artefacts.", // "such as wireframes, storyboards, flow diagrams, and prototypes.", "for both web and mobile applications.", "Utilizing Figma, Adobe Xd, etc.",
    //   "Conduct multi-phased, mixed-methods research and usability tests.", // "to optimize elements for improved user experience.",
    //   "Agile task tracking and collaboration with cross-functional teams."
    //   // "Leading design process and ensuring alignment with business objectives.",
    // ],
    experiences: [
      {
        title: "UX/UI Designer (Remote)",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Developed compelling UI for courses on an e-learning platform, meeting tight deadlines, using existing educational resources.",
        ]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "video games",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conducted 50+ user research sessions and playtests, gathering qualitative and biometric data to <strong>uncover gameplay issues</strong>.",
          "Delivered actionable insights to 15+ stakeholders, <strong>tackling player frustrations</strong> and <strong>enhancing gameplay engagement</strong>.",
        ]
      },
      {
        title: "UX Researcher & Designer",
        company: "University Paris 8",
        industry: "academia",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Led the design of a pioneering wearable prototype from concept to completion, involving 70 participants and 20+ research sessions.",
          "Crafted 3 initial prototypes, made 2 major updates to one, and executed 5 testing rounds, confirming potential for further work.",
        ]
      },
      {
        title: "UX/UI Designer",// & Frontend Developer",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Direct user-centred design efforts culminated in an <strong>increase of 11% in Net Promoter Score</strong> and <strong>annual savings of</strong> at least <strong>€7,500</strong>.", // by trimming down support service time.",
          "Led dozens of research activities with staff across several teams and a competitive analysis, <strong>driving design and feature decisions</strong>.",
          "Crafted and iterated <strong>hundreds of visual design artifacts</strong> to ensure clear communication of design intent and technical viability.",
          "<strong>Launched two new products</strong> using an MVP approach and <strong>merged 7 products into a unified platform</strong> serving 10,000+ users.",

          // "Crafted design artefacts that enhanced user experience and boosted Net Promoter Score by 11% for over 10,000 users.", // and features
          // "Demonstrated decision-making skills by balancing user needs, business goals, and technical constraints to steer product direction",
          // "Unified multiple products into a seamless cloud solution, fostering collaboration with developers teams.",
          // "Collaborated closely with product managers and developers to align UX/UI goals with product objectives, fostering synergy and achieving key milestones.",
          // "Established a style guide and a UI pattern library to maintain brand consistency and coherence across diverse products.",
        ]
      },
      {
        title: "UX/UI Designer",// & Frontend Developer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Conducted 40+ usability tests, <strong>raising the System Usability Scale (SUS) score by 12%</strong> and <strong>positive feedback by 72%</strong>.",
          "Created the UI for a QA platform used by 3,000+ educators, driven by strong user-centred and usability best practices."
        ]
      }
    ],
    skills: {
      research: [
        "Interviews", "Focus Groups", "Surveys", "Usability Testing", "Heuristic Evaluation", "Personas", "User Flows", "Card Sorting", "Design Thinking", // "Market Research", "Competitive Analysis"
      ],
      design: [
        "User-centred Design", "Wireframes", "Interactive Prototypes", "Mockups", "User Interfaces",
        "Information Architecture", "Accessible Design (WCAG 2)",
      ],
      tools: ["Figma", "Adobe XD", "Miro", "Notion", "Trello"],
      development: ["HTML", "CSS", "Javascript", "Vue.js", "Git", "npm"]
    },
    languages: [
      { language: "English", proficiency: "fluent - C1" },
      { language: "French", proficiency: "intermediate - B2" },
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
        degree: "M.Sc. Human-Computer Interaction & Design",// (Hybrid)",
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
    title: "Diseñador UX",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/?es", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Diseñador UX con 5 años de experiencia en la creación de experiencias centradas en el usuario. Con un <strong>Máster en Interacción Persona-Ordenador</strong>, tengo habilidades destacadas en <strong>todas las fases del proceso de diseño</strong>. Mi experiencia en <strong>frontend</strong> conecta el diseño con la tecnología y me familiariza con entornos <strong>Ágiles</strong> y <strong>remotos</strong>. Con una <strong>mentalidad curiosa</strong>, siempre estoy ansioso por sumergirme en nuevas oportunidades de aprendizaje y crecimiento.",
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
        title: "Diseñador UX/UI (Remoto)",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Desarrollar una interfaz de usuario para cursos de una plataforma de e-learning, cumpliendo con plazos ajustados."
        ]
      },
      {
        title: "Investigador de Usuarios",
        company: "Ubisoft",
        industry: "videojuegos",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Realizar 50+ sesiones de investigación de usuarios, recopilando datos de diversa naturaleza para <strong>descubrir problemas de jugabilidad</strong>.",
          "Ofrecer información accionables a 15 <em>stakeholders</em>, abordando las frustraciones y <strong>mejorando la participación en el juego</strong>."
        ]
      },
      {
        title: "Investigador y Diseñador UX",
        company: "Universidad París 8",
        industry: "Ámbito académico",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Liderar todas las fases del proceso de diseño de un prototipo <em>wearable</em> involucrando a 70 participantes y 20+ sesiones de investigación.",
          "Elaborar 3 prototipos, iterar y llevar a cabo 5 rondas de pruebas sobre uno de ellos, confirmando el potencial para trabajos futuros."
        ]
      },
      {
        title: "Diseñador UX/UI",// & Desarrollador Frontend",
        company: "DV Business Solutions",
        industry: "telecomunicaciones",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "<strong>Aumentar el <em>Net Promoter Score</em> en un 11%</strong> y lograr <strong>ahorros anuales</strong> de al menos <strong>€7,500</strong> mediante diseño centrado en el usuario.", // al reducir el tiempo de servicio de soporte.",
          "Liderar docenas de actividades de investigación con el personal de varios equipos, <strong>guiando decisiones de diseño y funcionalidad</strong>.",
          "Elaborar e iterar <strong>cientos de artefactos de diseño</strong> para garantizar una comunicación clara de la intención de diseño y viabilidad técnica.",
          "<strong>Lanzar dos nuevos productos</strong> utilizando un enfoque <em>MVP</em> y <strong>fusionar 7 productos en una única plataforma</strong> con 10,000+ usuarios.",

          // "Elaboré artefactos de diseño que mejoraron la experiencia del usuario y aumentaron el Net Promoter Score en un 11% para 10,000+ usuarios.", // y funciones
          // "Demostré habilidades de toma de decisiones al equilibrar las necesidades del usuario, los objetivos comerciales y las limitaciones técnicas para orientar la dirección del producto",
          // "Unifiqué varios productos en una solución en la nube sin problemas, fomentando la colaboración con equipos de desarrollo.",
          // "Colaboré estrechamente con gerentes de productos y desarrolladores para alinear objetivos de UX/UI con objetivos del producto, fomentando la sinergia y logrando hitos clave.",
          // "Establecí una guía de estilo y una biblioteca de patrones de UI para mantener la consistencia de marca y coherencia en diversos productos."
        ]
      },
      {
        title: "Diseñador UX/UI",// & Desarrollador Frontend",
        company: "Universidad Politécnica de Madrid",
        industry: "educación",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Realizar 40+ pruebas de usabilidad, <strong>aumentando la usabilidad (SUS) en un 12%</strong> y <strong>recibiendo un feedback positivo del 72%</strong>.",
          "Crear la UI de una plataforma de QA con 3,000+ educadores, aplicando sólidas prácticas centradas en el usuario y usabilidad."
        ]
      }
    ],
    skills: {
      research: [
        "Entrevistas", "Focus groups", "Encuestas", "Test de Usabilidad", "Evaluación Heurística", "Personas", "User journeys", "Análisis de Tareas", "Escenarios", "Modelos Mentales", "Card sorting", "Investigación de Mercado", "Análisis Competitivo"
      ],
      design: [
        "Diseño de Interacción", "Diseño de Interfaz de Usuario", "Diseño de Producto", "Arquitectura de Información", "Diseño Accesible (WCAG 2.0)", "Prototipado Rápido", "Wireframes", "Storyboards", "Prototipado de baja y alta fidelidad"
      ],
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "npm"],
      tools: ["Figma", "Adobe Xd", "Balsamiq", "Jira", "Notion", "Trello", "Wrike", "Office"]

    },
    languages: [
      { language: "Inglés", proficiency: "C1" },
      { language: "Francés", proficiency: "B2" },
      { language: "Español", proficiency: "nativo" },
      { language: "Lengua de signos española", proficiency: "nativo" }
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
    // █████ ████  █████ █   █  ████ █   █
    // █     █   █ █     ██  █ █     █   █
    // ████  ████  ████  █ █ █ █     █████
    // █     █   █ █     █  ██ █     █   █
    // █     █   █ █████ █   █  ████ █   █
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
      development: ["HTML", "CSS", "Javascript", "Vue", "React", "Bootstrap", "Git", "npm"],
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

const sectionTitles = computed(() => {
  switch (currentLanguage.value) {
    case 'en':
      return {
        competencies: "CORE COMPETENCIES",
        skills: "SKILLS",
          research: "User research",
          design: "Design",
          development: "Frontend development",
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
          research: "Recherche utilisateur",
          design: "Conception",
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
            <ResumeExperience v-for="(experience, index) in currentResume.experiences" :key="experience.id" :experience="experience" :class="{ highlight: index === 3 }" />
          </section>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.a4-page-bg {
  background: radial-gradient(var(--color-gray-lighter) 1px, transparent 1px);
  background-size: 24px 24px;
}
.a4-page {
    width: 210mm;
    height: 297mm;
    margin: auto;
    padding: 13mm;
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

article :deep(h4),
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

.side .section:first-child,
.main .section:first-child {
  margin-top: 0;
}

.side {
  width: 32.5%; /* EN */
  width: 32.1%; /* ES */
}

.main {
    width: 59.5%; /* EN */
    width: 61.8%; /* ES */
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
  background-color: var(--color-red-accent);
  margin-top: -4px;     /* Optional: adds a bit of space between the h2 text and the red line */
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
</style>