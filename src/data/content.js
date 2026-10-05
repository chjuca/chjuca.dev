import avatar from "../assets/avatar.webp";
import exmerdevLogo from "../assets/logos/exmerdev.webp";
import liidLogo from "../assets/logos/liid.webp";
import mapvxLogo from "../assets/logos/mapvx.webp";
import utplLogo from "../assets/logos/utpl.webp";
import liidProject from "../assets/projects/liid.webp";
import livProject from "../assets/projects/liv.webp";
import reasProject from "../assets/projects/reas.webp";

export const LANGUAGES = ["es", "en"];

export const SECTIONS = ["home", "experience", "skills", "projects", "about", "contact"];

export const profile = {
  name: "Carlos Juca",
  firstName: "Carlos",
  role: "Fullstack Engineer",
  avatar,
  email: "chjuca99@gmail.com",
  github: "https://github.com/chjuca",
  linkedin: "https://www.linkedin.com/in/chjuca/",
};

const companies = {
  mapvx: { name: "MapVX (Lazarillo)", url: "https://mapvx.com", logo: mapvxLogo },
  exmerdev: { name: "ExmerDev", url: "https://exmerdev.com", logo: exmerdevLogo },
  liid: { url: "https://liidutpl.ec", logo: liidLogo },
};

// Text marked with **double asterisks** is rendered in bold.
export const content = {
  es: {
    meta: {
      title: "Carlos Juca — Fullstack Engineer",
      description:
        "Ingeniero de Software con 7 años de experiencia en Node.js, NestJS, Python (FastAPI), Next.js, React y Angular, agentes con LLMs e infraestructura en AWS.",
    },
    ui: {
      nav: {
        home: "Inicio",
        experience: "Experiencia",
        skills: "Habilidades",
        projects: "Proyectos",
        about: "Sobre mí",
        contact: "Contacto",
      },
      navLabel: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      switchLanguageLabel: "Cambiar el sitio a inglés",
      themeToDark: "Activar modo oscuro",
      themeToLight: "Activar modo claro",
      skipToContent: "Saltar al contenido",
      scrollDown: "Ir a la experiencia",
      viewProject: "Ver proyecto",
      screenshot: (name) => `Captura de pantalla de ${name}`,
      moreOnGitHub: "Más proyectos en GitHub",
      footer: "Hecho con React y Vite.",
    },
    hero: {
      greeting: `Hola, soy ${profile.firstName}`,
      intro:
        "Ingeniero de software con 7 años construyendo software en producción. Me especializo en microservicios y APIs de alto rendimiento, integro LLMs mediante agentes y me hago cargo de la infraestructura en AWS de punta a punta.",
      contact: "Contáctame",
      downloadCv: "Descargar CV",
    },
    cv: "/cv/Carlos-Juca-Fullstack-ES.pdf",
    quotes: {
      band: { text: "Haz que funcione, hazlo bien y luego hazlo rápido.", author: "Kent Beck" },
      reveal: { text: "La simplicidad es requisito previo para la confiabilidad.", author: "Edsger W. Dijkstra" },
    },
    experience: {
      label: "Experiencia",
      title: "Dónde he trabajado",
      jobs: [
        {
          ...companies.mapvx,
          role: "Fullstack Developer",
          period: "Dic 2021 – Actual",
          location: "Remoto",
          tasks: [
            "Diseñé APIs REST y microservicios en Node.js / NestJS y Python / FastAPI para el precálculo de rutas y la búsqueda geoespacial, **reduciendo el tiempo de respuesta de 5.000 ms a 900 ms** e integrando servicios geoespaciales de terceros sin degradar el rendimiento.",
            "Construí agentes y automatizaciones con LangChain, LangGraph y n8n integrados con las APIs internas, automatizando procesos operativos que se hacían de forma manual.",
            "Desarrollé features en Next.js, React y Angular 18 para la app web y las herramientas internas de dibujo de mapas interiores (Mapbox GL, Leaflet), aplicando Clean Architecture y TDD para reducir la reincidencia de bugs en producción.",
            "Optimicé consultas críticas en PostgreSQL, MongoDB y DocumentDB mediante indexación y refactor de queries, eliminando cuellos de botella del backend.",
            "Operé la infraestructura de producción en 3 cuentas de AWS (EKS, ECS, S3, CloudFront, Lambda, RDS) con Kubernetes, Helm y Terraform, y construí pipelines de CI/CD con GitHub Actions y Docker que eliminaron los despliegues manuales.",
            "Implementé monitoreo con Elastic Stack, CloudWatch y Uptime Kuma, y administré Nginx como reverse proxy de ~87 virtual hosts con su ciclo de certificados TLS, resolviendo incidentes sin downtime para clientes.",
          ],
        },
        {
          ...companies.exmerdev,
          role: "Backend Developer (Java · Spring Boot)",
          period: "Sep 2020 – Nov 2021",
          location: "Loja, Ecuador",
          tasks: [
            "Implementé los módulos de roles, usuarios y seguridad de un sistema de Trading y CRM con Spring Boot y Spring Cloud, integrando mensajería asíncrona con RabbitMQ para desacoplar los servicios.",
            "Optimicé bases de datos MySQL, PostgreSQL y MongoDB y documenté los endpoints REST del equipo, reduciendo la fricción de integración.",
          ],
        },
        {
          ...companies.liid,
          name: "Laboratorio de Innovación e Investigación Docente",
          role: "Líder de Backend",
          period: "Abr 2019 – Ago 2020",
          location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
          tasks: [
            "Desarrollé una API REST con Node.js y PostgreSQL para gestionar asistencia, personas y materiales, digitalizando un proceso manual.",
            "Coordiné el backend de la plataforma LiiD Manager (salud y educación) y definí estándares técnicos y revisiones de código para el equipo.",
          ],
        },
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Mi stack tecnológico",
      groups: [
        {
          id: "Backend",
          items: ["Node.js", "NestJS", "Express", "TypeScript", "Python", "FastAPI", "Java", "Spring Boot", "Microservicios", "REST", "RabbitMQ"],
        },
        { id: "Frontend", items: ["Next.js", "React", "Angular", "Mapbox GL", "Leaflet"] },
        { id: "IA", items: ["LangChain", "LangGraph", "n8n", "Integración de LLMs"] },
        { id: "BasesDeDatos", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Firebase"] },
        {
          id: "CloudDevOps",
          items: ["AWS", "Kubernetes", "Helm", "Terraform", "Docker", "GitHub Actions", "Azure", "GCP", "Nginx", "Linux"],
        },
        {
          id: "Prácticas",
          items: ["Elastic Stack", "CloudWatch", "Uptime Kuma", "Clean Architecture", "TDD", "Jest", "Git", "Scrum"],
        },
      ],
    },
    projects: {
      label: "Proyectos",
      title: "Mis proyectos",
      items: [
        {
          name: "Proyecto Ascendere",
          org: "LiiD · UTPL",
          role: "Backend Developer",
          url: "https://ascendere.utpl.edu.ec",
          image: liidProject,
          logo: liidLogo,
          summary:
            "API en Node.js para el portal de Investigación e Innovación Docente de la UTPL, con el modelado e implementación de su base de datos en PostgreSQL.",
          tech: ["Node.js", "PostgreSQL"],
        },
        {
          name: "Recursos Educativos Abiertos",
          org: "Aplicaciones Web · UTPL",
          image: reasProject,
          logo: utplLogo,
          summary:
            "Aplicación para consultar los recursos subidos a la plataforma, ya sean videos, imágenes o textos, desarrollada con Angular 8 y Firebase.",
          tech: ["Angular", "Firebase"],
        },
        {
          name: "LIV",
          org: "LiiD · UTPL",
          image: livProject,
          logo: liidLogo,
          summary:
            "Aplicación para consultar los recursos que el docente de Farmacología sube a la plataforma, con división por unidades, filtros por materia y evaluaciones para estudiantes.",
          tech: [],
        },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Quién soy, en pocas líneas",
      summary:
        "Ingeniero de Software con 7 años de experiencia construyendo software en producción con Node.js, NestJS y Python (FastAPI), y frontend en Next.js, React y Angular. Especializado en microservicios, APIs REST de alto rendimiento y optimización de acceso a datos con Clean Architecture y TDD. Integro LLMs en flujos de producto mediante agentes con LangChain, LangGraph y n8n, y asumo responsabilidad end-to-end sobre la infraestructura: Kubernetes (Amazon EKS), Terraform, CI/CD y operación multi-cuenta en AWS.",
      highlights: [
        { value: "7 años", label: "construyendo software en producción" },
        { value: "5.000 → 900 ms", label: "tiempo de respuesta en precálculo de rutas" },
        { value: "3 cuentas AWS", label: "operadas en producción" },
        { value: "~87 virtual hosts", label: "en Nginx con TLS" },
      ],
      codeFile: "sobre-mi.ts",
      code: {
        variable: "carlos",
        fields: [
          ["rol", "Fullstack Engineer"],
          ["ubicacion", "Loja, Ecuador"],
          ["experiencia", "7 años"],
          ["educacion", "Ing. en Sistemas Informáticos y Computación · UTPL (2017 – 2022)"],
          ["idiomas", ["Español", "Inglés"]],
          ["enfoque", ["Microservicios", "APIs de alto rendimiento", "Agentes con LLMs", "AWS"]],
        ],
      },
    },
    contact: {
      label: "Contacto",
      title: "Escríbeme y te responderé pronto.",
      name: "Tu nombre",
      email: "Tu correo",
      subject: "Asunto",
      message: "Tu mensaje",
      send: "Enviar mensaje",
      hint: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
      direct: "¿Prefieres escribirme directo?",
      codeFile: "nuevo-mensaje.js",
      codeComment: "Se actualiza mientras escribes",
      codeVariable: "mensaje",
      codeFields: { name: "de", email: "correo", subject: "asunto", message: "texto" },
      codeSend: "enviar",
    },
  },

  en: {
    meta: {
      title: "Carlos Juca — Fullstack Engineer",
      description:
        "Software Engineer with 7 years of experience in Node.js, NestJS, Python (FastAPI), Next.js, React and Angular, LLM agents and AWS infrastructure.",
    },
    ui: {
      nav: {
        home: "Home",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        about: "About me",
        contact: "Contact",
      },
      navLabel: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguageLabel: "Switch the site to Spanish",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      skipToContent: "Skip to content",
      scrollDown: "Go to experience",
      viewProject: "View project",
      screenshot: (name) => `Screenshot of ${name}`,
      moreOnGitHub: "More projects on GitHub",
      footer: "Built with React and Vite.",
    },
    hero: {
      greeting: `Hi, I'm ${profile.firstName}`,
      intro:
        "Software engineer with 7 years building production software. I specialize in microservices and high-performance APIs, integrate LLMs through agents and own AWS infrastructure end to end.",
      contact: "Contact me",
      downloadCv: "Download CV",
    },
    cv: "/cv/Carlos-Juca-Fullstack-EN.pdf",
    quotes: {
      band: { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
      reveal: { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    },
    experience: {
      label: "Experience",
      title: "Where I've worked",
      jobs: [
        {
          ...companies.mapvx,
          role: "Fullstack Developer",
          period: "Dec 2021 – Present",
          location: "Remote",
          tasks: [
            "Designed REST APIs and microservices in Node.js / NestJS and Python / FastAPI for route precomputation and geospatial search, **cutting response time from 5,000 ms to 900 ms** while integrating third-party geospatial services without degrading performance.",
            "Built agents and automations with LangChain, LangGraph and n8n integrated with internal APIs, automating operational processes that were previously manual.",
            "Developed features in Next.js, React and Angular 18 for the web app and internal indoor-map drawing tools (Mapbox GL, Leaflet), applying Clean Architecture and TDD to reduce recurring production bugs.",
            "Optimized critical queries in PostgreSQL, MongoDB and DocumentDB through indexing and query refactoring, removing backend bottlenecks.",
            "Operated production infrastructure across 3 AWS accounts (EKS, ECS, S3, CloudFront, Lambda, RDS) with Kubernetes, Helm and Terraform, and built CI/CD pipelines with GitHub Actions and Docker that eliminated manual deployments.",
            "Implemented monitoring with Elastic Stack, CloudWatch and Uptime Kuma, and managed Nginx as a reverse proxy for ~87 virtual hosts along with the TLS certificate lifecycle, resolving incidents with zero downtime for clients.",
          ],
        },
        {
          ...companies.exmerdev,
          role: "Backend Developer (Java · Spring Boot)",
          period: "Sep 2020 – Nov 2021",
          location: "Loja, Ecuador",
          tasks: [
            "Implemented the roles, users and security modules of a Trading and CRM system with Spring Boot and Spring Cloud, integrating asynchronous messaging with RabbitMQ to decouple services.",
            "Optimized MySQL, PostgreSQL and MongoDB databases and documented the team's REST endpoints, reducing integration friction.",
          ],
        },
        {
          ...companies.liid,
          name: "Teaching Innovation and Research Lab",
          role: "Backend Lead",
          period: "Apr 2019 – Aug 2020",
          location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
          tasks: [
            "Developed a REST API with Node.js and PostgreSQL to manage attendance, people and materials, digitizing a manual process.",
            "Coordinated backend development of the LiiD Manager platform (health and education) and defined technical standards and code reviews for the team.",
          ],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "My tech stack",
      groups: [
        {
          id: "Backend",
          items: ["Node.js", "NestJS", "Express", "TypeScript", "Python", "FastAPI", "Java", "Spring Boot", "Microservices", "REST", "RabbitMQ"],
        },
        { id: "Frontend", items: ["Next.js", "React", "Angular", "Mapbox GL", "Leaflet"] },
        { id: "AI", items: ["LangChain", "LangGraph", "n8n", "LLM integration"] },
        { id: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Firebase"] },
        {
          id: "CloudDevOps",
          items: ["AWS", "Kubernetes", "Helm", "Terraform", "Docker", "GitHub Actions", "Azure", "GCP", "Nginx", "Linux"],
        },
        {
          id: "Practices",
          items: ["Elastic Stack", "CloudWatch", "Uptime Kuma", "Clean Architecture", "TDD", "Jest", "Git", "Scrum"],
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "My projects",
      items: [
        {
          name: "Ascendere Project",
          org: "LiiD · UTPL",
          role: "Backend Developer",
          url: "https://ascendere.utpl.edu.ec",
          image: liidProject,
          logo: liidLogo,
          summary:
            "Node.js API for UTPL's Teaching Research and Innovation portal, including the design and implementation of its PostgreSQL database.",
          tech: ["Node.js", "PostgreSQL"],
        },
        {
          name: "Open Educational Resources",
          org: "Web Applications · UTPL",
          image: reasProject,
          logo: utplLogo,
          summary:
            "App to browse the resources uploaded to the platform, whether videos, images or text, built with Angular 8 and Firebase.",
          tech: ["Angular", "Firebase"],
        },
        {
          name: "LIV",
          org: "LiiD · UTPL",
          image: livProject,
          logo: liidLogo,
          summary:
            "App to browse the resources the Pharmacology teacher uploads to the platform, organized by unit, with subject filters and student assessments.",
          tech: [],
        },
      ],
    },
    about: {
      label: "About me",
      title: "Who I am, in a few lines",
      summary:
        "Software Engineer with 7 years of experience building production software with Node.js, NestJS and Python (FastAPI), and frontend with Next.js, React and Angular. Specialized in microservices, high-performance REST APIs and data access optimization using Clean Architecture and TDD. I integrate LLMs into product workflows through agents built with LangChain, LangGraph and n8n, and take end-to-end ownership of the underlying infrastructure: Kubernetes (Amazon EKS), Terraform, CI/CD and multi-account AWS operations.",
      highlights: [
        { value: "7 years", label: "building production software" },
        { value: "5,000 → 900 ms", label: "response time for route precomputation" },
        { value: "3 AWS accounts", label: "operated in production" },
        { value: "~87 virtual hosts", label: "on Nginx with TLS" },
      ],
      codeFile: "about-me.ts",
      code: {
        variable: "carlos",
        fields: [
          ["role", "Fullstack Engineer"],
          ["location", "Loja, Ecuador"],
          ["experience", "7 years"],
          ["education", "B.S. in Computer Systems Engineering · UTPL (2017 – 2022)"],
          ["languages", ["Spanish", "English"]],
          ["focus", ["Microservices", "High-performance APIs", "LLM agents", "AWS"]],
        ],
      },
    },
    contact: {
      label: "Contact",
      title: "Write me a message and I'll get back to you.",
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      hint: "Your email app will open with the message ready to send.",
      direct: "Prefer to write directly?",
      codeFile: "new-message.js",
      codeComment: "Updates as you type",
      codeVariable: "message",
      codeFields: { name: "from", email: "email", subject: "subject", message: "text" },
      codeSend: "send",
    },
  },
};
