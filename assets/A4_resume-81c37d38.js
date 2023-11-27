import{o as s,c as t,a as e,t as i,d as g,F as l,r as d,_ as p,e as b,f as y,g as D,h as k,i as h,j as _,n as C}from"./index-736e8cd1.js";const U=e("span",null," · ",-1),I={key:0},x=["innerHTML"],E={__name:"ResumeExperience",props:["experience"],setup(a){return(c,u)=>(s(),t("div",null,[e("h3",null,i(a.experience.title),1),e("h4",null,[e("span",null,i(a.experience.company),1),e("span",null," ("+i(a.experience.industry)+") ",1),U,e("span",null,i(a.experience.startDate),1),a.experience.endDate?(s(),t("span",I,"–"+i(a.experience.endDate),1)):g("",!0)]),e("ul",null,[(s(!0),t(l,null,d(a.experience.tasks,n=>(s(),t("li",{key:n,innerHTML:n},null,8,x))),128))])]))}};const S={key:0},A={__name:"ResumeEducation",props:["education"],setup(a){return(c,u)=>(s(),t("div",null,[e("h3",null,i(a.education.degree),1),e("h4",null,[b(i(a.education.institute)+" ",1),a.education.graduated?(s(),t("span",S," · "+i(a.education.graduated),1)):g("",!0)])]))}},P=p(A,[["__scopeId","data-v-20dc6229"]]),R={__name:"ResumeSkill",props:["category","skills"],setup(a){return(c,u)=>(s(),t("div",null,[e("h3",null,i(a.category.charAt(0).toUpperCase()+a.category.slice(1)),1),e("p",null,i(a.skills.join(", ")+"."),1)]))}};const T={class:"language-item"},M={class:"language-name"},L={class:"language-proficiency"},N={__name:"ResumeLanguage",props:["languages"],setup(a){return(c,u)=>(s(),t("div",null,[(s(!0),t(l,null,d(a.languages,(n,o)=>(s(),t("p",{key:o},[e("span",T,[e("span",M,i(n.language),1),e("span",L,"("+i(n.proficiency)+")",1)])]))),128))]))}},X=p(N,[["__scopeId","data-v-875fbb89"]]);const w={__name:"ResumeCoreCompetencies",props:["competencies"],setup(a){return(c,u)=>(s(),t("div",null,[(s(!0),t(l,null,d(a.competencies,(n,o)=>(s(),t("p",{key:o},i(n),1))),128))]))}},q=p(w,[["__scopeId","data-v-b0a9e4c3"]]);const O={class:"summary"},B=["innerHTML"],j={__name:"ResumeSummary",props:["summary"],setup(a){return(c,u)=>(s(),t("div",O,[(s(!0),t(l,null,d(a.summary,n=>(s(),t("blockquote",{innerHTML:n},null,8,B))),256))]))}},H=p(j,[["__scopeId","data-v-7cfae8d0"]]);const F={class:"a4-page-bg"},$={class:"a4-page"},z={class:"header"},G={class:"hero"},V={class:"header__image"},W={class:"header__fullname"},J={class:"header__name"},K={class:"header__name"},Q={class:"header__surname"},Y={class:"header__title"},Z={class:"header__contact"},ee=["href"],se={class:"body"},ne={class:"side"},te={key:0},ae={class:"section"},ie={key:1},re={class:"section"},oe={key:2},ce={class:"section"},le={key:3},de={class:"section"},ue={key:0,class:"main"},ge={class:"section"},pe={__name:"A4_resume",setup(a){const c=y("en"),u=y([{lang:"en",name:["Adrian","Neila","Serrano"],title:"UX Designer",contacts:[{type:"Portfolio",href:"https://aneiser.github.io/?en",display:"aneiser.github.io"},{type:"Phone",href:"tel:+34649874542",display:"+34 649 87 45 42"},{type:"Email",href:"mailto:a.neiser13@gmail.com",display:"a.neiser13@gmail.com"},{type:"LinkedIn",href:"https://www.linkedin.com/in/aneiser-ux",display:"linkedin.com/in/aneiser-ux"}],summary:["UX/UI Designer with 4+ years of experience in crafting user-centric experiences. Holding a <strong>M.Sc. in HCI Design</strong>, I'm skilled in both <strong>design</strong> and <strong>research</strong> aspects. My <strong>frontend background</strong> bridges design with technology. Comfortable in <strong>Agile</strong> and thriving in <strong>remote</strong> and <strong>multicultural</strong> global settings, I've successfully collaborated with diverse teams worldwide. With a <strong>curious mindset</strong>, I am always eager to delve into new learning and growing opportunities."],experiences:[{title:"UX/UI Designer (Remote)",company:"Evoloom",industry:"e-learning",startDate:"2023",endDate:"",tasks:["Developed compelling UI for courses on an e-learning platform, meeting tight deadlines, using existing educational resources."]},{title:"User Researcher",company:"Ubisoft",industry:"video games",startDate:"2022",endDate:"",tasks:["Conducted 50+ user research sessions and playtests, gathering qualitative and biometric data to <strong>uncover gameplay issues</strong>.","Delivered actionable insights to 15+ stakeholders, <strong>tackling player frustrations</strong> and <strong>enhancing gameplay engagement</strong>."]},{title:"UX Researcher & Designer",company:"University Paris 8",industry:"academia",startDate:"2021",endDate:"",tasks:["Led the design of a pioneering wearable prototype from concept to completion, involving 70 participants and 20+ research sessions.","Crafted 3 initial prototypes, made 2 major updates to one, and executed 5 testing rounds, confirming potential for further work."]},{title:"UX/UI Designer",company:"DV Business Solutions",industry:"telecommunications",startDate:"2016",endDate:"2019",tasks:["Direct user-centred design efforts culminated in an <strong>increase of 11% in Net Promoter Score</strong> and <strong>annual savings of</strong> at least <strong>€7,500</strong>.","Led dozens of research activities with staff across several teams and a competitive analysis, <strong>driving design and feature decisions</strong>.","Crafted and iterated <strong>hundreds of visual design artifacts</strong> to ensure clear communication of design intent and technical viability.","<strong>Launched two new products</strong> using an MVP approach and <strong>merged 7 products into a unified platform</strong> serving 10,000+ users."]},{title:"UX/UI Designer",company:"Polytechnic University of Madrid",industry:"education",startDate:"2014",endDate:"2016",tasks:["Conducted 40+ usability tests, <strong>raising the System Usability Scale (SUS) score by 12%</strong> and <strong>positive feedback by 72%</strong>.","Created the UI for a QA platform used by 3,000+ educators, driven by strong user-centred and usability best practices."]}],skills:{research:["Interviews","Focus Groups","Surveys","Usability Testing","Heuristic Evaluation","Personas","User Flows","Card Sorting","Design Thinking"],design:["User-centred Design","Wireframes","Interactive Prototypes","Mockups","User Interfaces","Information Architecture","Accessible Design (WCAG 2)"],tools:["Figma","Adobe XD","Miro","Notion","Trello"],development:["HTML","CSS","Javascript","Vue.js","Git","npm"]},languages:[{language:"English",proficiency:"fluent - C1"},{language:"French",proficiency:"intermediate - B2"},{language:"Spanish",proficiency:"native"},{language:"Spanish Sign Language",proficiency:"native"}],educations:[{degree:"Blockchain / Web 3 developer",institute:"Alyra",graduated:"2023"},{degree:"M.Sc. Human-Computer Interaction & Design",institute:"KTH Royal Institute of Technology & Université Paris Saclay",graduated:"2021"},{degree:"B.Sc. Computer Science",institute:"Polytechnic University of Madrid",graduated:"2014"}]},{lang:"es",name:["Adrian","Neila","Serrano"],title:"Diseñador UX",contacts:[{type:"Portfolio",href:"https://aneiser.github.io/?es",display:"aneiser.github.io"},{type:"Phone",href:"tel:+34649874542",display:"+34 649 87 45 42"},{type:"Email",href:"mailto:a.neiser13@gmail.com",display:"a.neiser13@gmail.com"},{type:"LinkedIn",href:"https://www.linkedin.com/in/aneiser-ux",display:"linkedin.com/in/aneiser-ux"}],summary:["Diseñador UX con 5 años de experiencia en la creación de experiencias centradas en el usuario. Con un <strong>Máster en Interacción Persona-Ordenador</strong>, tengo habilidades destacadas en <strong>todas las fases del proceso de diseño</strong>. Mi experiencia en <strong>frontend</strong> conecta el diseño con la tecnología y me familiariza con entornos <strong>Ágiles</strong> y <strong>remotos</strong>. Con una <strong>mentalidad curiosa</strong>, siempre estoy ansioso por sumergirme en nuevas oportunidades de aprendizaje y crecimiento."],competencies:["Creación y gestión de artefactos de diseño.","Realizar investigaciones de múltiples fases y métodos mixtos y pruebas de usabilidad.","Seguimiento ágil de tareas y colaboración con equipos multifuncionales."],experiences:[{title:"Diseñador UX/UI (Remoto)",company:"Evoloom",industry:"e-learning",startDate:"2023",endDate:"",tasks:["Desarrollar una interfaz de usuario para cursos de una plataforma de e-learning, cumpliendo con plazos ajustados."]},{title:"Investigador de Usuarios",company:"Ubisoft",industry:"videojuegos",startDate:"2022",endDate:"",tasks:["Realizar 50+ sesiones de investigación de usuarios, recopilando datos de diversa naturaleza para <strong>descubrir problemas de jugabilidad</strong>.","Ofrecer información accionables a 15 <em>stakeholders</em>, abordando las frustraciones y <strong>mejorando la participación en el juego</strong>."]},{title:"Investigador y Diseñador UX",company:"Universidad París 8",industry:"Ámbito académico",startDate:"2021",endDate:"",tasks:["Liderar todas las fases del proceso de diseño de un prototipo <em>wearable</em> involucrando a 70 participantes y 20+ sesiones de investigación.","Elaborar 3 prototipos, iterar y llevar a cabo 5 rondas de pruebas sobre uno de ellos, confirmando el potencial para trabajos futuros."]},{title:"Diseñador UX/UI",company:"DV Business Solutions",industry:"telecomunicaciones",startDate:"2016",endDate:"2019",tasks:["<strong>Aumentar el <em>Net Promoter Score</em> en un 11%</strong> y lograr <strong>ahorros anuales</strong> de al menos <strong>€7,500</strong> mediante diseño centrado en el usuario.","Liderar docenas de actividades de investigación con el personal de varios equipos, <strong>guiando decisiones de diseño y funcionalidad</strong>.","Elaborar e iterar <strong>cientos de artefactos de diseño</strong> para garantizar una comunicación clara de la intención de diseño y viabilidad técnica.","<strong>Lanzar dos nuevos productos</strong> utilizando un enfoque <em>MVP</em> y <strong>fusionar 7 productos en una única plataforma</strong> con 10,000+ usuarios."]},{title:"Diseñador UX/UI",company:"Universidad Politécnica de Madrid",industry:"educación",startDate:"2014",endDate:"2016",tasks:["Realizar 40+ pruebas de usabilidad, <strong>aumentando la usabilidad (SUS) en un 12%</strong> y <strong>recibiendo un feedback positivo del 72%</strong>.","Crear la UI de una plataforma de QA con 3,000+ educadores, aplicando sólidas prácticas centradas en el usuario y usabilidad."]}],skills:{research:["Entrevistas","Focus groups","Encuestas","Test de Usabilidad","Evaluación Heurística","Personas","User journeys","Análisis de Tareas","Escenarios","Modelos Mentales","Card sorting","Investigación de Mercado","Análisis Competitivo"],design:["Diseño de Interacción","Diseño de Interfaz de Usuario","Diseño de Producto","Arquitectura de Información","Diseño Accesible (WCAG 2.0)","Prototipado Rápido","Wireframes","Storyboards","Prototipado de baja y alta fidelidad"],development:["HTML","CSS","Javascript","Vue","React","Bootstrap","Git","npm"],tools:["Figma","Adobe Xd","Balsamiq","Jira","Notion","Trello","Wrike","Office"]},languages:[{language:"Inglés",proficiency:"C1"},{language:"Francés",proficiency:"B2"},{language:"Español",proficiency:"nativo"},{language:"Lengua de signos española",proficiency:"nativo"}],educations:[{degree:"Desarrollador Blockchain / Web 3.0",institute:"Alyra",graduated:"2023"},{degree:"Máster en Diseño de Interacción Persona-Ordenador",institute:"KTH Royal Institute of Technology & Université Paris Saclay",graduated:"2021"},{degree:"Ingeniería Informática",institute:"Universidad Politécnica de Madrid",graduated:"2014"}]},{lang:"fr",name:["Adrian","NEILA","SERRANO"],title:"Designer UX",contacts:[{type:"Portfolio",href:"https://aneiser.github.io/?fr",display:"aneiser.github.io"},{type:"Phone",href:"tel:+330650674677",display:"+33 06.50.67.46.77"},{type:"Email",href:"mailto:a.neiser13@gmail.com",display:"a.neiser13@gmail.com"},{type:"LinkedIn",href:"https://www.linkedin.com/in/aneiser-ux",display:"linkedin.com/in/aneiser-ux"}],summary:["Designer UX avec 5 ans d'expérience traduisant la recherche utilisateur en expériences numériques intuitives alignées avec les objectifs commerciaux. — Titulaire d'un BAC+5 en Conception d'Interaction Homme-Ordinateur, je suis compétent dans tous les aspects du processus de conception UX, y compris la recherche, la conception et les tests. — Profitant d'une expérience en frontend, je fais le lien entre la conception et la faisabilité technique dans des environnements Agile, garantissant une collaboration efficace avec des équipes multidisciplinaires."],competencies:["Création et gestion d'artefacts de conception.","Conduire des recherches multi-phases avec des méthodes mixtes et des tests d'utilisabilité.","Suivi des tâches Agile et collaboration avec des équipes interfonctionnelles."],experiences:[{title:"Ingénieur UX",company:"Evoloom",industry:"e-learning",startDate:"2023",endDate:"",tasks:["Élaborer des cours en ligne captivants pour une plateforme d'e-learning en exploitant les ressources éducatives existantes."]},{title:"Chercheur utilisateur",company:"Ubisoft",industry:"jeux vidéo",startDate:"2022",endDate:"",tasks:["Réaliser des recherches utilisateurs, des playtesting et collecté des données qualitatives, quantitatives et biométriques.","Synthétiser les résultats de recherche en insights actionnables pour différents intervenants dans un environnement agile."]},{title:"Chercheur / Designer UX",company:"Université Paris 8",industry:"milieu universitaire",startDate:"2021",endDate:"",tasks:["Diriger le processus de conception de la recherche au prototypage et au test d'un prototype wearable pionnier."]},{title:"Ingénieur UX",company:"DV Business Solutions",industry:"telecommunications",startDate:"2016",endDate:"2019",tasks:["Concevoir des artefacts de design et des fonctionnalités, améliorant l'UX et augmentant le Net Promoter Score de 11% pour plus de 10000 utilisateurs.","Équilibrer les perspectives commerciales, techniques et UX pour éclairer la prise de décision et l'orientation du produit.","Unifier plusieurs produits en une solution cloud fluide, favorisant la collaboration avec plusieurs équipes.","Jouer un rôle clé dans la création des exigences du produit et la défense de la conception (création d'un style guide, d'une bibliothèque de composants, etc.)."]},{title:"Ingénieur UX",company:"Universidad Politécnica Madrid",industry:"education",startDate:"2014",endDate:"2016",tasks:["Prôner la centralité de l'utilisateur, promouvant les normes d'utilisabilité et favorisant l'excellence UX.","Diriger et coordonner la recherche utilisateur et les tests d'utilisabilité.","Diriger le développement UI pour une plateforme d'assurance qualité, approuvée par plus de 3000 éducateurs."]}],skills:{research:["Recherche utilisateur","Entretiens","Groupes de discussion","Enquêtes","Tests d'utilisabilité","Évaluation heuristique","Personas","Parcours utilisateur","Analyse de tâches","Scénarios","Modèles mentaux","Tri de cartes","Recherche de marché","Analyse concurrentielle"],design:["Conception d'interaction","Conception d'UI","Conception de produit","Architecture de l'information","Conception accessible (WCAG 2.0)","Prototypage rapide","Wireframes","Storyboards","Prototypage basse et haute fidélité"],development:["HTML","CSS","Javascript","Vue","React","Bootstrap","Git","npm"],tools:["Figma","Adobe Xd","Balsamiq","Jira","Notion","Trello","Wrike","Office"]},languages:[{language:"Anglais",proficiency:"C1"},{language:"Français",proficiency:"B2"},{language:"Espagnol",proficiency:"maternelle"},{language:"Langue des signes espagnole",proficiency:"maternelle"}],educations:[{degree:"Blockchain / Web 3 développer ",institute:"Alyra",graduated:"2023"},{degree:"BAC+5 en Interaction Homme-Ordinateur",institute:"Université Paris Saclay & KTH Royal Institute of Technology",graduated:"2021"},{degree:"BAC+3 en ingénierie informatique",institute:"Universidad Politécnica Madrid",graduated:"2014"}]}]),n=y({}),o=D(()=>{switch(c.value){case"en":return{competencies:"CORE COMPETENCIES",skills:"SKILLS",research:"User research",design:"Design",development:"Frontend development",tools:"Tools",languages:"LANGUAGES",educations:"EDUCATION",experiences:"EXPERIENCE"};case"es":return{competencies:"COMPETENCIAS",skills:"COMPETENCIAS",research:"Investigación de Usuarios",design:"Diseño",development:"Desarrollo Frontend",tools:"Herramientas",languages:"Idiomas",educations:"FORMACIÓN",experiences:"EXPERIENCIA"};case"fr":return{competencies:"COMPÉTENCES",skills:"COMPÉTENCES",research:"Recherche utilisateur",design:"Conception",development:"Development Frontend",tools:"Outils",languages:"LANGUES",educations:"FORMATION",experiences:"EXPÉRIENCE"};default:return{competencies:"CORE COMPETENCIES",skills:"SKILLS",research:"Research",design:"Design",development:"Development",tools:"Tools",languages:"LANGUAGES",educations:"EDUCATION",experiences:"EXPERIENCE"}}});return(()=>{n.value=u.value.find(v=>v.lang===c.value)})(),(v,he)=>{const f=k("v-img");return s(),t("div",F,[e("div",$,[e("article",null,[e("header",z,[e("div",G,[e("div",V,[h(f,{cover:"",src:"/assets/img/resume/GDL_4210_Post.jpg",alt:"Profile Image"})]),e("div",W,[e("div",J,[e("span",K,[e("h1",null,i(n.value.name[0]),1)]),e("div",Q,[e("span",null,[e("h1",null,i(n.value.name[1]),1)]),e("span",null,[e("h1",null,i(n.value.name[2]),1)])])]),e("span",Y,[e("h1",null,i(n.value.title),1)])]),e("div",Z,[(s(!0),t(l,null,d(n.value.contacts,r=>(s(),t("div",{key:r.type},[e("a",{href:r.href},i(r.display),9,ee)]))),128))])]),h(H,{summary:n.value.summary},null,8,["summary"])]),e("div",se,[e("aside",ne,[n.value.competencies?(s(),t("section",te,[e("h2",ae,i(o.value.competencies),1),h(q,{competencies:n.value.competencies},null,8,["competencies"])])):g("",!0),n.value.skills?(s(),t("section",ie,[e("h2",re,i(o.value.skills),1),(s(!0),t(l,null,d(n.value.skills,(r,m)=>(s(),_(R,{key:m,category:o.value[m],skills:r},null,8,["category","skills"]))),128))])):g("",!0),n.value.languages?(s(),t("section",oe,[e("h2",ce,i(o.value.languages),1),h(X,{languages:n.value.languages},null,8,["languages"])])):g("",!0),n.value.educations?(s(),t("section",le,[e("h2",de,i(o.value.educations),1),(s(!0),t(l,null,d(n.value.educations,r=>(s(),_(P,{key:r.id,education:r},null,8,["education"]))),128))])):g("",!0)]),n.value.experiences?(s(),t("section",ue,[e("h2",ge,i(o.value.experiences),1),(s(!0),t(l,null,d(n.value.experiences,(r,m)=>(s(),_(E,{key:r.id,experience:r,class:C({highlight:m===3})},null,8,["experience","class"]))),128))])):g("",!0)])])])])}}},_e=p(pe,[["__scopeId","data-v-ddffc9c6"]]);export{_e as default};
