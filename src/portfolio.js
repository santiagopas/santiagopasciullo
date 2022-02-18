const settings = {
  isSplash: true, // Splash screen.
};


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

const greeting = {
  title: "Hola!",
  sub: "Santiago Pasciullo",
  logo_name: "Santiago",
  resumeLink: "https://portafolio-santiago-web.netlify.app/CV%20Santiago.pdf",
};


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
      img_path: "https://d33wubrfki0l68.cloudfront.net/60f316e297715000078be8e5/screenshot_2021-07-17-17-44-34-0000.png",
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
      title: "Rick & Morty APP",
      img_path: "https://d33wubrfki0l68.cloudfront.net/61d07193eeb7a40007f9abe5/screenshot_2022-01-01-15-22-53-0000.png",
      description:
        "App de Rick & Morty consumiendo datos de la API de la misma Realizada con ReactJs. Se aplica mobilefirs, flexbox y grid.",
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
          lang: "Fetch",
          color: "#004782",
        },
        {
          lang: "SCSS",
          color: "#8700b0",
        },
        {
          lang: "Netlify",
          color: "#0078D4",
        }
      ],
      link: "https://rymapp.netlify.app/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
    },

    {
      title: "Landing page con VUEJs. ",
      img_path: "https://d33wubrfki0l68.cloudfront.net/61d08b3c1910ba00073b3bce/screenshot_2022-01-01-17-13-31-0000.png",
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
      img_path: "https://d33wubrfki0l68.cloudfront.net/6145e95b06064000076ca692/screenshot_2021-09-18-13-28-01-0000.png",
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
      img_path: "https://d33wubrfki0l68.cloudfront.net/612fd22d7814c20008844711/screenshot_2021-09-01-19-19-48-0000.png",
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
      img_path: "https://repositorio-imagenes.netlify.app/img/agendaME.jpeg",
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
    {
      title: "Mercury Code",
      img_path: "https://repositorio-imagenes.netlify.app/img/mercury.jpeg",
      description:
        "Landing page creada con NextJs y styled components, diseños de avatares y logos con adobe illustrator, formulario de contacto funcional.",
      tags: [
        {
          lang: "Next",
          color: "#C85454",
        },
        {
          lang: "Reactjs",
          color: "#004782",
        },
        {
          lang: "JavaScript",
          color: "#c47206",
        },
        {
          lang: "Styled Components",
          color: "#A34FB8",
        }
      ],
      link: "https://landing-mercury-code.netlify.app/",
      code: "https://github.com/santiagopas",
      linkcolor: "orange",
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
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/santiago-pasciullo/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:santiagopasciullo@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
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
};
