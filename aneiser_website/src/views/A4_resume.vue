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
    title: "Frontend Dev.",
    contacts: [
      // { type: "Country", display: "Paris, France" },
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=PERSON__COMPANY&utm_language=english", display: "aneiser.github.io" },
      // { type: "Phone", href: "tel:+330650674677", display: "+33 6.50.67.46.77" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "<strong>Computer engineer</strong> with 4 years of <strong>frontend experience</strong> and <strong>master's degree in Human-Computer Interaction</strong>. Specialized in user-centered methodologies to <strong>improve user satisfaction and experience</strong>, whose user research aspect is transferable to <strong>developing solutions for clients and employees</strong>. My <strong>international background</strong> in <strong>agile environments</strong> and multidisciplinary teams demonstrates my <strong>adaptability</strong>."
    ],
    // competencies: [
    //   "Crafting and managing design artefacts.", // "such as wireframes, storyboards, flow diagrams, and prototypes.", "for both web and mobile applications.", "Utilizing Figma, Adobe Xd, etc.",
    //   "Conduct multi-phased, mixed-methods research and usability tests.", // "to optimize elements for improved user experience.",
    //   "Agile task tracking and collaboration with cross-functional teams."
    //   // "Leading design process and ensuring alignment with business objectives.",
    // ],
    experiences: [
      {
        title: "UI Frontend Developer (Remote)",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          // "Develop user interface for e-learning platform courses, meeting tight deadlines."
          "Develop the front end of an e-learning platform application."
        ]
      },
      {
        title: "User Researcher",
        company: "Ubisoft",
        industry: "video games",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Analyze research findings and provide practical insights to 15+ stakeholders addressing issues, frustrations, and engagement.",
          // "Conduct 50+ user research sessions, collecting data of diverse nature to <strong>uncover gameplay issues</strong>.",
          // "Provide actionable insights to 15 stakeholders, addressing frustrations and <strong>enhancing game engagement</strong>."
        ]
      },
      {
        title: "Developer & UX Researcher",
        company: "University Paris 8",
        industry: "academia",
        startDate: "2021",
        endDate: "",
        tasks: [
          // "Lead all phases of the design process for a wearable prototype involving 70 participants and 20+ research sessions.",
          // "Develop 3 prototypes, iterate and conduct 5 rounds of testing on one of them, confirming potential for future work.",
          "Develop and program software for prototypes with Arduino, integrating components to validate concepts and functionalities."
        ]
      },
      {
        title: "UX/UI Frontend Developer",
        company: "DV Business Solutions",
        industry: "telecommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          // "Develop and iterate <strong>hundreds of design artifacts</strong> to ensure clear communication of design intent and technical feasibility.",
          "Develop the frontend (Vue.js) of <strong>3 new products and integrate 7 products</strong> into a single platform with 10000+ users. With an <em>MVP</em> approach and <strong>aligned with business needs</strong>.",
          // "Demonstrated decision-making skills by balancing user needs, business objectives, and technical constraints to guide product direction",
          // "Collaborated closely with product managers and developers to align UX/UI goals with product objectives, fostering synergy and achieving key milestones.",
          "Implement a <strong>component library</strong> to <strong>maintain brand consistency</strong> and coherence across various products.",
          "<strong>Increase Net Promoter Score by 11%</strong> and achieve annual savings of at least <strong>€7500</strong> by reducing support time.", // through user-centered design.", // by reducing support service time.",
        ]
      },
      {
        title: "UX/UI Frontend Developer",
        company: "Polytechnic University of Madrid",
        industry: "education",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Conduct 40+ usability tests, <strong>increasing usability by 12%</strong> and <strong>improving feedback by 72%</strong>.",
          "Develop the frontend of a quality teaching platform with 3000+ users, applying development best practices and quality."
        ]
      }
    ],
    skills: {
      development: [
        "HTML", "CSS", "Javascript ES6", "Vue.js", "Git", "npm (Node Package Manager)", "Yarn", "Bootstrap", "React", "SASS", "PostCSS", "Webcomponents", "Automatic Testing", "Application Delivery Process, CI & CD, PWA",
        // "Communication and teamwork: Effective communication skills and ability to work collaboratively with designers, backend developers, and other team members.",
      ],
      web3: [
        "Solidity", "Web3.js", "Truffle", "Hardhat", "ERC-20", "ERC-721", "IPFS (Inter Planetary File System)", "Wagmi", "RainbowKit", "Remix", "Hardhat", "Ganache"
      ],
      design: [
        "User-Centered Design (UCD), Responsive and Adaptive Design, Atomic Design, Design Systems, Information Architecture, and Accessibility Standard (WCAG 2) to develop highly functional, usable, and accessible software",
        // "User-Centered Design", "Interaction Design", "Storyboards",  "Adaptive Design", "Accessible Design (WCAG 2)", "Low and High Fidelity Prototyping, Interactive and Video Prototyping",
      ],
      // research: [
      //   "Interviews", "Surveys", "Focus Groups", "Usability Testing", "Personas", "User Journeys & Flows", "Design Thinking", "Scenarios", "Heuristic Evaluation", "Card Sorting", "Competitive Analysis"
      // ],
      tools: [
        "Visual Studio Code", "Sublime Text", "GitHub", "GitLab", "Bitbucket", "Google Chrome developer tools", "Figma", "Adobe XD", "Hotjar", "Miro", "Jira", "Notion", "Slack", "Microsoft Teams", "Zoom", "Vercel", "GitHub Pages",
      ],
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
      {
        degree: "Blockchain / Web 3 developer",
        institute: "Alyra",
        graduated: "2023"
      },
      {
        degree: "M.Sc. Human-Computer Interaction",// (Hybrid)",
        institute: "KTH & Paris Saclay",
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
    title: "Frontend Dev.",
    contacts: [
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=santander&utm_language=spanish", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+34649874542", display: "+34 649 87 45 42" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "<strong>Ingeniero informático</strong> con 4 años de <strong>experiencia en frontend</strong> y <strong>máster en Interacción Persona-Ordenador</strong>. Especializado en diseño centrado en el usuario para <strong>mejorar su satisfacción y la experiencia de usuario</strong>, cuyo aspecto de investigación de usuario es transferible al <strong>desarrollo de soluciones para clientes y empleados</strong>. Mi <strong>trayectoria internacional</strong> en <strong>entornos <em>agile</em></strong> y multidisciplinares demuestra mi <strong>capacidad de adaptación</strong>.",
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
        title: "Desarrollador UI",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          // "Desarrollar la interfaz de usuario para los cursos de una plataforma de e-learning, cumpliendo con plazos ajustados."
          "Desarrollar el front de la aplicación de una plataforma de e-learning."
        ]
      },
      {
        title: "Investigador de Usuarios",
        company: "Ubisoft",
        industry: "videojuegos",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Analizar resultados de investigación y ofrecer información práctica a 15+ <em>stakeholders</em> abordando problemas, frustraciones y el <em>engagement</em>.",
          // "Realizar 50+ sesiones de investigación de usuarios, recopilando datos de diversa naturaleza para <strong>descubrir problemas de jugabilidad</strong>.",
          // "Ofrecer información procesable a 15 <em>stakeholders</em>, abordando las frustraciones y <strong>mejorando la participación en el juego</strong>."
        ]
      },
      {
        title: "UX Researcher / developer",
        company: "Universidad París 8",
        industry: "Ámbito académico",
        startDate: "2021",
        endDate: "",
        tasks: [
          // "Liderar todas las fases del proceso de diseño de un prototipo <em>wearable</em> involucrando a 70 participantes y 20+ sesiones de investigación.",
          // "Elaborar 3 prototipos, iterar y llevar a cabo 5 rondas de pruebas sobre uno de ellos, confirmando el potencial para trabajos futuros.",
          "Desarrollar y programar software para prototipos con Arduino, integrando componentes para validar conceptos y funcionalidades."
        ]
      },
      {
        title: "UX/UI Frontend developer",// & Desarrollador Frontend",
        company: "DV Business Solutions",
        industry: "telecomunicaciones",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          // "Elaborar e iterar <strong>cientos de artefactos de diseño</strong> para garantizar una comunicación clara de la intención de diseño y viabilidad técnica.",
          "Desarrollar el frontend (Vue.js) de <strong>3 nuevos productos e integrar en una única plataforma 7 productos</strong> con 10000+ usuarios. Con enfoque <em>MVP</em> y <strong>alineado a las necesidades de negocio</strong>",
          // "Demostré habilidades de toma de decisiones al equilibrar las necesidades del usuario, los objetivos comerciales y las limitaciones técnicas para orientar la dirección del producto",
          // "Colaboré estrechamente con gerentes de productos y desarrolladores para alinear objetivos de UX/UI con objetivos del producto, fomentando la sinergia y logrando hitos clave.",
          "Implementar una <strong>biblioteca de componentes</strong> para <strong>mantener la consistencia</strong> de marca y coherencia en diversos productos.",
          "<strong>Aumentar el <em>Net Promoter Score</em> en un 11%</strong> y lograr <strong>ahorros anuales</strong> de al menos <strong>€7500</strong> al reducir el tiempo de soporte.", // mediante diseño centrado en el usuario.", // al reducir el tiempo de servicio de soporte.",
        ]
      },
      {
        title: "UX/UI Frontend developer",// & Desarrollador Frontend",
        company: "Universidad Politécnica de Madrid",
        industry: "educación",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Realizar 40+ pruebas de usabilidad, <strong>aumentando la usabilidad en un 12%</strong> y <strong>mejorando el feedback en un 72%</strong>.",
          "Desarrollar el frontend de una plataforma de calidad docente con 3000+ usuarios, aplicando buenas practicas de desarrollosó y calidad."
        ]
      }
    ],
    skills: {
      development: [
        "HTML", "CSS", "Javascript ES6", "Vue.js", "Git", "npm (Node Package Manager)", "Yarn", "Bootstrap", "React", "SASS", "PostCSS",  "Webcomponents", "Testing automático","Application Delivery Process, CI & CD, PWA",
        // "Comunicación y trabajo en equipo: Habilidades de comunicación efectiva y capacidad para trabajar en colaboración con diseñadores, desarrolladores backend y otros miembros del equipo.",
      ],
      web3: [
        "Solidity", "Web3.js", "Truffle", "Hardhat", "ERC-20", "ERC-721", "IPFS (Inter Planetary File System)", "Wagmi", "RainbowKit", "Remix", "Hardhat", "Ganache"
      ],
      design: [
        "Experiencia en Diseño Centrado en Usuario (UCD), Diseño Responsive y Adaptativo, Atomic Design, Design Systems, Arquitectura de la Información y Estándar de accesibilidad (WCAG 2) para desarrollar software altamente funcional, usable y accesible",
        // "Diseño Centrado en Usuario", "Diseño de Interacción", "Storyboards",  "Diseño Adaptativo", "Diseño Accesible (WCAG 2)", "Prototipado de Baja y Alta Fidelidad, Interactivo y de Video",
      ],
      // research: [
        //   "Entrevistas", "Encuestas", "Focus Groups", "Test de Usabilidad", "Personas", "User Journeys & Flows", "Design Thinking", "Escenarios", "Evaluación Heurística", "Card Sorting", "Análisis Competitivo"
      // ],
      tools: [
        "Visual Studio Code", "Sublime Text", "GitHub", "GitLab", "Bitbucket", "Google Chrome developer tools", "Figma", "Adobe XD", "Hotjar", "Miro", "Jira", "Notion", "Slack", "Microsoft Teams", "Zoom", "Vercel", "GitHub Pages",
      ],
    },
    languages: [
      { language: "Inglés", proficiency: "fluido - C1" },
      { language: "Francés", proficiency: "intermedio - B2" },
      { language: "Español", proficiency: "nativo" },
      { language: "Lengua de signos española", proficiency: "nativo" }
    ],
    educations: [
      {
        degree: "Desarrollador Blockchain / Web 3",
        institute: "Alyra",
        graduated: "2023"
      },
      {
        degree: "Máster Interacción Persona-Ordenador",
        institute: "KTH y Paris Saclay",
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
      { type: "Country", display: "Paris, France" },
      { type: "Portfolio", href: "https://aneiser.github.io/?utm_source=resume&utm_campaign=PERSON__COMPANY&utm_language=french", display: "aneiser.github.io" },
      { type: "Phone", href: "tel:+33650674677", display: "+33 6.50.67.46.77" },
      { type: "Email", href: "mailto:a.neiser13@gmail.com", display: "a.neiser13@gmail.com" },
      { type: "LinkedIn", href: "https://www.linkedin.com/in/aneiser-ux", display: "linkedin.com/in/aneiser-ux" }
    ],
    summary: [
      "Designer UX avec 4+ ans d'expérience dans la création d'expériences centrées sur l'utilisateur. Titulaire d'un <strong>BAC+5 en Interaction Homme-Machine</strong>, je suis compétent dans les aspects de <strong>conception</strong> et de <strong>recherche</strong>. Mon expérience en <strong>développement frontend</strong> relie la conception à la technologie. À l'aise dans un environnement <strong>Agile</strong> et prospérant dans des contextes <strong>à distance</strong> et <strong>multiculturels</strong>, j'ai collaboré avec succès avec des équipes diversifiées à l'échelle mondiale. Avec un <strong>esprit curieux</strong>, je suis toujours impatient de m'investir dans de nouvelles opportunités d'apprentissage et de croissance.",
      // "Designer UX avec 4+ ans d'expérience dans la création d'expériences centrées sur l'utilisateur. Titulaire d'un <strong>BAC+5 en Interaction Homme-Machine</strong> et ayant un passé en <strong>développement frontend</strong>, je suis compétent dans les aspects de la <strong>recherche utilisateur</strong> et du <strong>conception</strong>. Avec un <strong>esprit curieux</strong>, je suis toujours impatient de m'investir dans de nouvelles opportunités d'apprentissage et de croissance.",
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
        title: "Designer UX/UI",
        company: "Evoloom",
        industry: "e-learning",
        startDate: "2023",
        endDate: "",
        tasks: [
          "Développement d'une UI convaincante pour des cours sur une plateforme d'apprentissage en ligne, respectant des délais serrés."
        ]
      },
      {
        title: "Chercheur Utilisateur",
        company: "Ubisoft",
        industry: "jeux vidéo",
        startDate: "2022",
        endDate: "",
        tasks: [
          "Conduction de 50+ sessions de recherche utilisateur et playtests, collectant des données pour <strong>détecter des problèmes de gameplay</strong>.",
          "Fourniture d'informations exploitables à 15+ parties prenantes, <strong>traitant les frustrations des joueurs</strong> et <strong>améliorant l'engagement</strong>."
        ]
      },
      {
        title: "Chercheur et Designer UX",
        company: "Université Paris 8",
        industry: "milieu universitaire",
        startDate: "2021",
        endDate: "",
        tasks: [
          "Conception d'un prototype portable de la phase conceptuelle à la réalisation, avec 70 participants et 20+ sessions de recherche.",
          "Création de 3 prototypes, effectuation de 2 mises à jour sur l'un d'eux et réalisation de 5 rounds de tests, confirmant le potentiel."
        ]
      },
      {
        title: "Designer UX/UI",// & Développeur Frontend",
        company: "DV Business Solutions",
        industry: "télécommunications",
        startDate: "2016",
        endDate: "2019",
        tasks: [
          "Les efforts de conception centrés sur l'utilisateur ont abouti à une <strong>augmentation de 11% du Net Promoter Score</strong> et à des <strong>économies annuelles d'au moins</strong> <strong>7500 €</strong>.", // en réduisant le temps de service d'assistance.",
          "Direction de nombreuses activités de recherche avec le personnel, <strong>orientant les décisions de conception et de fonctionnalités</strong>.",
          "Création et itération de <strong>centaines d'artefacts de conception visuelle</strong> pour assurer une communication claire de l'intention de conception et de la viabilité technique.",
          "<strong>Lancement de deux nouveaux produits</strong> et <strong>fusion de 7 produits en une plateforme unifiée</strong> desservant 10000+  utilisateurs.",

          // "Création d'artefacts de conception qui ont amélioré l'expérience utilisateur et ont augmenté le Net Promoter Score de 11% pour 10000+  utilisateurs.", // et fonctionnalités
          // "Démonstration de compétences en prise de décision en équilibrant les besoins des utilisateurs, les objectifs commerciaux et les contraintes techniques pour orienter la direction du produit",
          // "Unification de plusieurs produits en une solution cloud transparente, favorisant la collaboration avec les équipes de développeurs.",
          // "Collaboration étroite avec les chefs de produit et les développeurs pour aligner les objectifs UX/UI avec les objectifs du produit, favorisant la synergie et atteignant des jalons clés.",
          // "Établissement d'un guide de style et d'une bibliothèque de motifs d'interface utilisateur pour maintenir la cohérence de la marque et la cohérence à travers divers produits.",
        ]
      },
      {
        title: "Designer UX/UI",// & Développeur Frontend",
        company: "Universidad Politécnica Madrid",
        industry: "éducation",
        startDate: "2014",
        endDate: "2016",
        tasks: [
          "Conduction de 40+ tests de convivialité, <strong>augmentation du score de l'échelle SUS de 12%</strong> et <strong>retours positifs de 72%</strong>.",
          "Création de l'UI pour une plateforme QA utilisée par 3000+ éducateurs, basée sur de solides pratiques centrées sur l'utilisateur et de convivialité."
        ]
      }
    ],

    skills: {
      research: [
        "Études ethnographiques", "Entretiens", "Enquêtes", "Tests de convivialité", "Évaluation heuristique", "Groupes de discussion", "Design Thinking", "Personas", "Parcours et flux utilisateur", "Analyse concurrentielle", "Scénarios", "Tri de cartes"
      ],
      design: [
        "Conception centrée sur l'humain", "Conception d'interaction", "Conception accessible (WCAG 2)", "Conception adaptative", "Création de wireframes", "Prototypage basse et haute fidélité", "Design Systems", "Scénarios", "Architecture de l'information", "Prototypage interactif"
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
          design: "Accessibility & UX Design",
          development: "Frontend development",
          web3: "Web 3 development",// "Blockchain / Web 3 development",
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
          design: "Diseño UX y Accesibilidad",
          development: "Desarrollo Frontend",
          web3: "Desarrollo Blockchain / Web 3",
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
          </aside>

          <!-- EXPERIENCE SECTION -->
          <section class="main">
            <section v-if="currentResume.experiences">
              <h2 class="section">{{ sectionTitles.experiences }}</h2>
              <ResumeExperience v-for="(experience, index) in currentResume.experiences" :key="experience.id" :experience="experience" :class="{ highlight: index === 9 }" />
            </section>

            <section v-if="currentResume.educations" class="education-section">
              <h2 class="section">{{ sectionTitles.educations }}</h2>
              <ResumeEducation v-for="education in currentResume.educations" :key="education.id" :education="education" />
            </section>
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

article :deep(h4),
article :deep(li) {
  margin-bottom: 4.3pt;
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

.side > section:first-child > h2,
.main h2.section {
  margin-top: 0;
}
.main > section:last-child > h2 {
  margin-top: 35px;
}

.side > section:first-child > div:last-child {
  margin-top: 15px;
}

.side {
  width: 31.1%;
  /*width: 34.1%; /* ES */
  /*width: 33.9%; /* FR */
}

.main {
  width: 61.8%; /* FR */
  width: 59.3%; /* EN */
  width: 61.5%; /* ES y Frontend */
}

section {
    background-color: var(--color-white);
}

.section {
  font-size: 22pt;
  margin: 35px 0 10px;
  padding: 0;
}
.education-section div {
  margin: 5px 0 8px;
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
}
</style>