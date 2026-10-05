import exmerdevLogo from "../assets/logos/exmerdev.webp";
import liidLogo from "../assets/logos/liid.webp";
import mapvxLogo from "../assets/logos/mapvx.webp";
import utplLogo from "../assets/logos/utpl.webp";
import liidProject from "../assets/projects/liid.webp";
import livProject from "../assets/projects/liv.webp";
import reasProject from "../assets/projects/reas.webp";

export const LANGUAGES = ["es", "en"];

export const profile = {
  name: "Carlos Juca",
  handle: "chjuca",
  role: "Fullstack Engineer",
  avatar: "https://avatars.githubusercontent.com/u/38107744?v=4&s=320",
  email: "chjuca99@gmail.com",
  github: "https://github.com/chjuca",
  linkedin: "https://www.linkedin.com/in/chjuca/",
};

// Pinned repositories on github.com/chjuca. Kept static so the site never
// needs a GitHub token in the browser bundle.
export const repositories = [
  {
    name: "Algoritmo-Planificacion-FIFO",
    url: "https://github.com/chjuca/Algoritmo-Planificacion-FIFO",
    description: "Repositorio Destinado a la Elaboracion del proyecto de Sistemas Operativos IB",
    stars: 2,
  },
  {
    name: "Algoritmo-Reemplazo-Paginas",
    url: "https://github.com/chjuca/Algoritmo-Reemplazo-Paginas",
    description: "Repositorio Destinado a la Elaboracion del proyecto de Sistemas Operativos BIM II",
    stars: 2,
  },
  {
    name: "HackerRank",
    url: "https://github.com/chjuca/HackerRank",
    description: "Repository created to practice and try the difficult the HackerRank exercises",
    stars: 0,
  },
  {
    name: "HackerRank-Javascript-Test",
    url: "https://github.com/chjuca/HackerRank-Javascript-Test",
    description:
      "Repository created as guide for the developers have problems with the challenges of HackerRank Test JAVASCRIPT(BASIC)",
    stars: 0,
  },
  {
    name: "SGA",
    url: "https://github.com/chjuca/SGA",
    description: "Repositorio para versionar el Sistema de Gestion Academica del LIID",
    stars: 1,
  },
  {
    name: "chjuca.dev",
    url: "https://github.com/chjuca/chjuca.dev",
    description: "Código fuente de este sitio: React 19 + Vite, bilingüe y con modo oscuro.",
    stars: 0,
  },
];

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
        about: "Perfil",
        experience: "Experiencia",
        skills: "Habilidades",
        education: "Educación",
        projects: "Proyectos",
        github: "GitHub",
      },
      sectionsLabel: "Secciones",
      downloadCv: "Descargar CV",
      contact: "Contactar",
      switchLanguage: "English",
      switchLanguageLabel: "Ver el sitio en inglés",
      themeToDark: "Activar modo oscuro",
      themeToLight: "Activar modo claro",
      skipToContent: "Saltar al contenido",
      visitSite: "Visitar sitio",
      viewProject: "Ver proyecto",
      screenshot: (name) => `Captura de pantalla de ${name}`,
      viewProfile: "Ver perfil completo en GitHub",
      stars: (count) => `${count} ${count === 1 ? "estrella" : "estrellas"}`,
      languagesTitle: "Idiomas",
      footer: "Hecho con React y Vite.",
    },
    location: "Loja, Ecuador",
    tagline: "Microservicios, APIs de alto rendimiento, agentes con LLMs e infraestructura en AWS.",
    cv: "/cv/Carlos-Juca-Fullstack-ES.pdf",
    summary:
      "Ingeniero de Software con 7 años de experiencia construyendo software en producción con Node.js, NestJS y Python (FastAPI), y frontend en Next.js, React y Angular. Especializado en microservicios, APIs REST de alto rendimiento y optimización de acceso a datos con Clean Architecture y TDD. Integro LLMs en flujos de producto mediante agentes con LangChain, LangGraph y n8n, y asumo responsabilidad end-to-end sobre la infraestructura: Kubernetes (Amazon EKS), Terraform, CI/CD y operación multi-cuenta en AWS.",
    highlights: [
      { value: "7 años", label: "construyendo software en producción" },
      { value: "5.000 → 900 ms", label: "tiempo de respuesta en precálculo de rutas y búsqueda geoespacial" },
      { value: "3 cuentas AWS", label: "de infraestructura de producción con EKS, Terraform y CI/CD" },
      { value: "~87 virtual hosts", label: "en Nginx, incluido el ciclo de certificados TLS" },
    ],
    experience: [
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
    skills: [
      {
        id: "backend",
        title: "Backend",
        items: ["Node.js", "NestJS", "Express", "TypeScript", "Python", "FastAPI", "Java", "Spring Boot", "Microservicios", "REST", "RabbitMQ"],
      },
      { id: "frontend", title: "Frontend", items: ["Next.js", "React", "Angular", "Mapbox GL", "Leaflet"] },
      { id: "ai", title: "IA & Automatización", items: ["LangChain", "LangGraph", "n8n", "Integración de LLMs"] },
      { id: "databases", title: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Firebase"] },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        items: ["AWS", "Kubernetes", "Helm", "Terraform", "Docker", "GitHub Actions", "Azure", "GCP", "Nginx", "Linux"],
      },
      {
        id: "practices",
        title: "Observabilidad y prácticas",
        items: ["Elastic Stack", "CloudWatch", "Uptime Kuma", "Clean Architecture", "TDD", "Jest", "Git", "Scrum"],
      },
    ],
    education: [
      {
        degree: "Ingeniería en Sistemas Informáticos y Computación",
        school: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        period: "2017 – 2022",
        logo: utplLogo,
      },
    ],
    languages: ["Español", "Inglés"],
    projects: [
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

  en: {
    meta: {
      title: "Carlos Juca — Fullstack Engineer",
      description:
        "Software Engineer with 7 years of experience in Node.js, NestJS, Python (FastAPI), Next.js, React and Angular, LLM agents and AWS infrastructure.",
    },
    ui: {
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        education: "Education",
        projects: "Projects",
        github: "GitHub",
      },
      sectionsLabel: "Sections",
      downloadCv: "Download CV",
      contact: "Contact me",
      switchLanguage: "Español",
      switchLanguageLabel: "View the site in Spanish",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      skipToContent: "Skip to content",
      visitSite: "Visit site",
      viewProject: "View project",
      screenshot: (name) => `Screenshot of ${name}`,
      viewProfile: "View full profile on GitHub",
      stars: (count) => `${count} ${count === 1 ? "star" : "stars"}`,
      languagesTitle: "Languages",
      footer: "Built with React and Vite.",
    },
    location: "Loja, Ecuador",
    tagline: "Microservices, high-performance APIs, LLM agents and AWS infrastructure.",
    cv: "/cv/Carlos-Juca-Fullstack-EN.pdf",
    summary:
      "Software Engineer with 7 years of experience building production software with Node.js, NestJS and Python (FastAPI), and frontend with Next.js, React and Angular. Specialized in microservices, high-performance REST APIs and data access optimization using Clean Architecture and TDD. I integrate LLMs into product workflows through agents built with LangChain, LangGraph and n8n, and take end-to-end ownership of the underlying infrastructure: Kubernetes (Amazon EKS), Terraform, CI/CD and multi-account AWS operations.",
    highlights: [
      { value: "7 years", label: "building production software" },
      { value: "5,000 → 900 ms", label: "response time for route precomputation and geospatial search" },
      { value: "3 AWS accounts", label: "of production infrastructure with EKS, Terraform and CI/CD" },
      { value: "~87 virtual hosts", label: "on Nginx, including the TLS certificate lifecycle" },
    ],
    experience: [
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
    skills: [
      {
        id: "backend",
        title: "Backend",
        items: ["Node.js", "NestJS", "Express", "TypeScript", "Python", "FastAPI", "Java", "Spring Boot", "Microservices", "REST", "RabbitMQ"],
      },
      { id: "frontend", title: "Frontend", items: ["Next.js", "React", "Angular", "Mapbox GL", "Leaflet"] },
      { id: "ai", title: "AI & Automation", items: ["LangChain", "LangGraph", "n8n", "LLM integration"] },
      { id: "databases", title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Firebase"] },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        items: ["AWS", "Kubernetes", "Helm", "Terraform", "Docker", "GitHub Actions", "Azure", "GCP", "Nginx", "Linux"],
      },
      {
        id: "practices",
        title: "Observability & practices",
        items: ["Elastic Stack", "CloudWatch", "Uptime Kuma", "Clean Architecture", "TDD", "Jest", "Git", "Scrum"],
      },
    ],
    education: [
      {
        degree: "B.S. in Computer Systems Engineering",
        school: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        period: "2017 – 2022",
        logo: utplLogo,
      },
    ],
    languages: ["Spanish", "English"],
    projects: [
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
};
