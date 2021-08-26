const settings = {
  isSplash: true, // Splash screen.
};

//configuración del SEO
const seo = {
  title: "Santiago Pasciullo | Portfolio",
  description:
    "Hola a todos! Soy Santiago Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.",
  og: {
    title: "Santiago Portfolio",
    type: "website",
    url: "https://santago-pasciullo.netlify.app/splash",
  },
};

//Home Page
const greeting = {
  title: "Hola!",
  sub: "Santiago Pasciullo",
  logo_name: "Santiago",
  resumeLink: "https://portafolio-santiago-web.netlify.app/CV%20Santiago.pdf",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/santiagopas",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/santiago-pasciullo/",
    },
  ],
};

//qué hago?
const skills = {
  data: [
    {
      title: "Desarrollo móvil",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Desarrollo de aplicaciones móviles",
        "⚡ Registro, login y validación de usuarios, actividad de los usuarios en la aplicación",
        "⚡ Aplicación de metodología SCRUM / KanBan (Scrumban) con Trello",
        "⚡ Tecnologías usadas:  Framework7 / Firebase / Bases de datos SQL y NoSQL",
      ],
      softwareSkills: [

        {
          skillName: "Framework 7",
          fontAwesomeClassname: "logos-framework7",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        
        {
          skillName: "Apache cordova",
          fontAwesomeClassname: "logos-cordova",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
 
      ],
    },
    {
      title: "Desarrollo web",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creación de sitios responsive con HTML5, CSS3, BootStrap5, ReactJS, VUEjs & NodeJS",
        "⚡ Creación de aplicaciones backend con NodeJS",
        "⚡ Hosteo de páginas web",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7111F5",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Ruby on rails",
          fontAwesomeClassname: "simple-icons:rails",
          style: {
            color: "#CC0000",
          },
        },
        {
          skillName: "VUEjs",
          fontAwesomeClassname: "simple-icons:vuejs",
          style: {
            color: "#194D33",
          },
        },
      ],
    },
    {
      title: "Diseño UX/UI",
      fileName: "DesignImg",
      skills: [
        "⚡ Diseño de interfaces de usuario atractivas para aplicaciones móviles y web",
        "⚡ Personalización de diseños de logotipos y creación de logotipos desde cero",
        "⚡ Crear el flujo de funcionalidades de la aplicación para optimizar la experiencia del usuario",
        "⚡ Aplicando los principios de diseño más recientes con wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "En cada proyecto me gusta implementar distintas tecnologías, heramientas y técnicas.",
  description2:
    "🚀Siempre aprendiendo! "
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [

    {
      title: "Rastreador de casos de COVID",
      img_path: "project-01.png",
      description:
        "Una app web para ver los casos positivos, recuperados y muertes por COVID-19 en tiempo real. Incluye gráficos y tablas dinámicas y uso de técnicas como BEM. Uso de api de disease.sh para obtener información de los casos y de la api de Leaflet para uso de mapas.",
      tags: [
        {
          lang: "ReactJS",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#c47206",
        },
        {
          lang: "HTML5",
          color: "#004782",
        },
        {
          lang: "CSS3",
          color: "#8700b0",
        },
        {
          lang: "Netlify",
          color: "#0078D4",
        }
      ],
      link: "https://casosdecovid.netlify.app/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },

    {
      title: "Landing page con VUEJs. ",
      img_path: "paranaFumigaciones.png",
      description:
        "Página Landing para empresa de fumigaciones de la ciudad de Rosario. Realizada con VUEjs, implementando animaciones, transiciones, efectos CSS, uso de UX/UI, diseño de gráficos vectoriales y formulario funcional.",
      tags: [
        {
          lang: "VUEjs",
          color: "green",
        },
        {
          lang: "JavaScript",
          color: "#c47206",
        }, {
          lang: "HTML5",
          color: "#004782",
        },
        {
          lang: "CSS3",
          color: "#8700b0",
        },
        {
          lang: "Netlify",
          color: "#0078D4",
        }
      ],
      link: "https://parana-fumigaciones.netlify.app/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },
    {
      title: "Portafolio Web",
      img_path: "portafolioVanilla.png",
      description:
        "Portafolio web, creado utilizando vanilla HTML5, CSS3, JavaScript, incluye formulario de contacto funcional. Tecnicas utilizadas, glassmorfismo, fetch, async y awaitt, grid, flex box y CSS components.",
      tags: [
        {
          lang: "HTML5",
          color: "#004782",
        },
        {
          lang: "CSS3",
          color: "#8700b0",
        },
        {
          lang: "JavaScript",
          color: "#c47206",
        },
        {
          lang: "Netlify",
          color: "#0078D4",
        }
      ],
      link: "https://portafolio-santiago-web.netlify.app/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },
    {
      title: "Portafolio con ReactJs",
      img_path: "PortafolioReact.png",
      description:
        "Portafolio creado con ReactJS. Haciendo uso de UX/UI, animaciones en javascript como sroll and reveal, animejs y splashjs para las animaciones,react-helmet para configuración de meta tags, Core UI para los componentes, Adobellustrator para la creación de logos y gráficos con vectores.",
      tags: [
        {
          lang: "JavaScript",
          color: "#c47206",
        },
        {
          lang: "Reactjs",
          color: "#004782",
        },
        {
          lang: "HTML5",
          color: "#004782",
        },
        {
          lang: "CSS3",
          color: "#8700b0",
        },
        {
          lang: "Netlify",
          color: "#0078D4",
        }
      ],
      link: "https://santiago-pasciullo.netlify.app/home",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },
    {
      title: "Ruby on Rails Agenda Web",
      img_path:"PortafolioReact.png",
      description:
        "App web creada con Ruby on Rails, Tailwind.css y PosgreSQL. La app cuenta con registro de usuario, autenticación, edición y administración de cuenta. Desplegada en Heroku",
      tags: [
        {
          lang: "Ruby",
          color: "#C85454",
        },
        {
          lang: "Ruby on Rails",
          color: "#A94F6F",
        },
        {
          lang: "HTML5",
          color: "#004782",
        },
        {
          lang: "CSS3",
          color: "#8700b0",
        },
        {
          lang: "Heroku",
          color: "#A34FB8",
        }
      ],
      link: "https://rails-agenda.herokuapp.com/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "Nactus India Services Private Limited",
        date: "June 2020 - present",
        content: [
          "Used T5 Transformer Model to build a Question Answering Model which generates questions based on Keywords extracted (WordNet, Sense2Vec) from studyshot notes.",
          "Built an MCQ Generation model using BERT",
          "Developed a personalized Chatbot using Rasa (Botfront.io).",
          "Created an Automatic Thumbnail Generator & Uploader for our youtube videos using Youtube v3 API",
          "Working on OpenAI's semantic search engine.",
          "Created a Clean MaterialUI Design for prototyping and design fixing before production-ready of APP",
          "Created FrontEnd components for StudyShot website",
          "Working on recommendation system for concept notes and questions based on student's behavior on our Flutter App(tracking)",
        ],
      },
      {
        title: "Machine Learning Intern",
        subtitle: "Listnr",
        date: "April 2020 - June 2020",
        content: [
          "My role at Listnr included a lot of research work about Audio Encoders and Vocoders and Speech Synthesis in general.",
          "Worked on some SOTA Inference TTS Models such as TacoTron2, FastSpeech2, and Wavenet.",
          "Also had hands-on with real-time voice cloning algorithm.",
        ],
      },
      {
        title: "Data Science Intern",
        subtitle: "iNeuron.ai",
        date: "Nov 2020 - January 2021",
        content: [
          "Phase 1 included Data Cleaning & Data Annotation for object detection task",
          "Used YOLO v5 for Fire Detection Project",
        ],
      },
      {
        title: "Summer Analytics Participant",
        subtitle: "IIT Guwahati",
        date: "April 2020 - June 2020",
        content: [
          "Learnt & applied various Machine Learning libraries",
          "Had hands-on with Data Visualization techniques using matplotlib, plotly, streamlit",
          "Understood and applied Neural networks using Tensorflow and finally competed in Kaggle Hackathon ranking 135 (top 16 percentile) among 854 Kaggle participants",
          "Ranked 85 out of 1500+ students for overall performance.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Engineering in Information Technology",
          subtitle: "Vidyalankar Institute of Technology, Mumbai",
          date: "2016 - 2020",
          content: ["CGPA: 8.06/10"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Dr. Antonio Da Silva Technical Jr. College, Mumbai",
          date: "2014 - 2016",
          content: ["Precentage: 80%"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#135/854 in Summer Analytics Kaggle Competition by IITG",
            "#113/5064 in CV-NLP Hackathon by HackerEarth",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Designing Team Head at ACM-VIT",
            "5⭐ Gold Badges for Python & Problem Solving at HackerRank ",
            "Tableau Analyst & Consumer Badge by Tableau Official",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Consultancy Website",
          subtitle: "kidsworldeducationconsultants.com",
          content: [
            "Created and hosted a website for consultancy providers in Kids Education Domain",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "pranavphulware.netlify.app",
          content: [
            "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Hablemos!",
    profile_image_path: "contact.jpg",
    description:
      "Búscame en redes sociales. Puedes enviarme un mensaje, y responderé dentro de las 24 horas.",
  },
  addressSection: {
    title: "Ubicación",
    subtitle: "Rosario, Santa Fe, Argentina",
  },
  phoneSection: {
    title: "Whatsapp",
    subtitle: "+54 3413285297",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/santiagopas",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/santiago-pasciullo/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:santiagopasciullo@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/santiago.pasciullo/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
