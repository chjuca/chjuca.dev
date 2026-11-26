import avatar from "../assets/avatar.webp";
import exmerdevLogo from "../assets/logos/exmerdev.webp";
import liidLogo from "../assets/logos/liid.webp";
import mapvxLogo from "../assets/logos/mapvx.webp";
import utplLogo from "../assets/logos/utpl.webp";
import liidProject from "../assets/projects/liid.webp";
import livProject from "../assets/projects/liv.webp";
import notificationsProject from "../assets/projects/notifications.webp";
import pipelineProject from "../assets/projects/pipeline.webp";
import reasProject from "../assets/projects/reas.webp";

export const SITE_URL = "https://chjuca.dev";

export const LANGUAGES = ["es", "en"];

// Each language named in itself, for the language selector.
export const LANGUAGE_NAMES = { es: "Español", en: "English" };

export const NAV_ITEMS = [
  { id: "home", to: "/" },
  { id: "experience", to: "/experience" },
  { id: "projects", to: "/projects" },
  { id: "pipeline", to: "/pipeline" },
  { id: "about", to: "/about" },
  { id: "contact", to: "/contact" },
];

export const profile = {
  name: "Carlos Juca",
  firstName: "Carlos",
  role: "AI Engineer | Full Stack Developer",
  avatar,
  email: "chjuca99@gmail.com",
  github: "https://github.com/chjuca",
  linkedin: "https://www.linkedin.com/in/chjuca/",
};

const companies = {
  mapvx: { slug: "mapvx", name: "MapVX (Lazarillo)", url: "https://mapvx.com", logo: mapvxLogo },
  exmerdev: { slug: "exmerdev", name: "ExmerDev", url: "https://exmerdev.com", logo: exmerdevLogo },
  liid: { slug: "liid", url: "https://liidutpl.ec", logo: liidLogo },
};

const stacks = {
  mapvx: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "React",
    "Next.js",
    "Angular",
    "NestJS",
    "Express",
    "FastAPI",
    "AWS",
    "Jest",
    "React Testing Library",
    "Vite",
    "Pytest",
    "PostgreSQL",
    "MongoDB",
    "DocumentDB",
    "Redis",
    "TypeORM",
    "Docker",
    "Kubernetes",
    "CSS",
    "HTML",
    "Helm",
    "Terraform",
    "ArgoCD",
    "GitHub Actions",
    "Nginx",
    "Elasticsearch",
    "Firebase",
    "Mapbox GL",
    "Leaflet",
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "Claude API",
    "AWS Bedrock",
    "RAG",
    "pgvector",
    "Langfuse",
    "n8n",
    "MCP",
    "Claude Code",
  ],
  exmerdev: ["JavaScript", "Java", "React", "Spring Boot", "Spring Cloud", "JUnit", "MySQL", "PostgreSQL", "MongoDB", "RabbitMQ", "Hibernate", "Docker", "CSS", "HTML", "Git"],
  liid: ["JavaScript", "Node.js", "React", "Angular", "Express", "PostgreSQL", "CSS", "HTML", "Firebase", "Git"],
};

const projectBase = {
  site: {
    slug: "chjuca-dev",
    url: "/pipeline",
    image: pipelineProject,
    logo: avatar,
    tech: ["React", "GitHub Actions", "Cloudflare Workers", "Lighthouse", "Vitest"],
  },
  notifications: {
    slug: "notification-center",
    url: "https://notification-center-y1qj.vercel.app",
    image: notificationsProject,
    logo: avatar,
    tech: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker", "Vitest"],
  },
  ascendere: {
    slug: "ascendere",
    org: "LiiD · UTPL",
    url: "https://ascendere.utpl.edu.ec",
    image: liidProject,
    logo: liidLogo,
    tech: ["Node.js", "PostgreSQL"],
  },
  rea: {
    slug: "recursos-educativos-abiertos",
    image: reasProject,
    logo: utplLogo,
    tech: ["Angular", "Firebase"],
  },
  liv: {
    slug: "liv",
    name: "LIV",
    org: "LiiD · UTPL",
    image: livProject,
    logo: liidLogo,
    tech: ["Angular", "Express", "PostgreSQL"],
  },
};

// Text marked with **double asterisks** is rendered in bold.
export const content = {
  es: {
    ui: {
      nav: {
        home: "Inicio",
        experience: "Experiencia",
        projects: "Proyectos",
        pipeline: "Pipeline",
        about: "Sobre mí",
        contact: "Contacto",
      },
      navLabel: "Navegación principal",
      footerNavLabel: "Páginas del sitio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      languageLabel: "Idioma",
      themeToDark: "Activar modo oscuro",
      themeToLight: "Activar modo claro",
      skipToContent: "Saltar al contenido",
      scrollDown: "Ver más",
      downloadCv: "Descargar CV",
      viewDetails: "Ver detalle",
      viewProject: "Ver proyecto",
      visitSite: "Visitar sitio",
      viewPipeline: "Ver el pipeline en vivo",
      privateProject: "Proyecto privado · sin demo pública",
      publicProject: "Sitio público",
      screenshot: (name) => `Captura de pantalla de ${name}`,
      moreOnGitHub: "Más proyectos en GitHub",
      previous: "Anterior",
      next: "Siguiente",
      pagerLabel: "Anterior y siguiente",
      backToExperience: "Volver a experiencia",
      backToProjects: "Volver a proyectos",
      footer: "Hecho con React y Vite.",
    },
    cv: "/cv/ES-chjuca-IA-Engineer.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — AI Engineer | Full Stack Developer",
          description:
            "AI Engineer y Full Stack Developer con 7 años de experiencia: IA aplicada (agentes, RAG), JavaScript, TypeScript, Node.js, Python, React y AWS.",
        },
        hero: {
          greeting: `Hola, soy ${profile.firstName}`,
          intro:
            "Ingeniero de software con experiencia en todo el ciclo de un producto: análisis, diseño, desarrollo, despliegue y mantenimiento en producción. Hoy mi foco es la IA aplicada: integro LLMs en productos (agentes, RAG) y uso herramientas de IA a diario.",
          focus: ["IA aplicada", "Agentes y RAG", "Full Stack", "Cloud y DevOps"],
          contact: "Contáctame",
        },
        highlightsLabel: "Impacto",
        highlightsTitle: "Algunos números",
        highlights: [
          { value: "7 años", label: "construyendo software en producción" },
          { value: "< 1 ms", label: "de latencia de ruteo indoor con grafos en memoria" },
          { value: "−70%", label: "de egress en Firebase tras rastrear un pico de facturación" },
          { value: "0 downtime", label: "en migraciones a Kubernetes y respuesta a incidentes" },
        ],
        nowLabel: "Ahora",
        nowTitle: "Dónde trabajo hoy",
        allExperience: "Ver toda mi experiencia",
        stackLabel: "Stack",
        stackTitle: "Con qué construyo",
        stackLink: "Ver mi perfil completo",
        projectsLabel: "Proyectos",
        projectsTitle: "Algunos proyectos",
        projectsLink: "Ver todos los proyectos",
        cta: {
          title: "¿Hablamos?",
          text: "Escríbeme y te responderé pronto.",
          button: "Ir a contacto",
        },
      },
      experience: {
        meta: {
          title: "Experiencia — Carlos Juca",
          description:
            "Experiencia de Carlos Juca en MapVX (Lazarillo), ExmerDev y el Laboratorio de Innovación e Investigación Docente de la UTPL.",
        },
        label: "Experiencia",
        title: "Dónde he trabajado",
        intro: "7 años construyendo software en producción: del backend y el frontend a la infraestructura.",
      },
      job: {
        impactTitle: "Impacto",
        tasksTitle: "Lo que hice",
        stackTitle: "Tecnologías",
      },
      projects: {
        meta: {
          title: "Proyectos — Carlos Juca",
          description: "Proyectos de Carlos Juca: chjuca.dev con CI/CD en vivo, Ascendere, Recursos Educativos Abiertos y LIV.",
        },
        label: "Proyectos",
        title: "Mis proyectos",
        intro: "Algunos de los proyectos en los que participé, con su stack y disponibilidad.",
      },
      project: {
        factsTitle: "Ficha del proyecto",
        orgLabel: "Organización",
        roleLabel: "Mi rol",
        stackLabel: "Tecnologías",
        statusLabel: "Disponibilidad",
      },
      pipeline: {
        meta: {
          title: "Pipeline — Carlos Juca",
          description:
            "El pipeline de CI/CD de chjuca.dev en vivo: pruebas, Lighthouse, deploy a Cloudflare Workers y smoke tests.",
        },
        label: "Pipeline",
        title: "Así se construye y despliega este sitio",
        intro:
          "Cada cambio que subo pasa por este pipeline de CI/CD público antes de llegar a producción. Lo que ves aquí son datos reales y en vivo de GitHub Actions.",
        graphLabel: "Etapas del último pipeline",
        status: {
          loading: "Cargando el estado en vivo…",
          error: "No se pudo cargar el estado en vivo de GitHub",
          none: "Aún no hay ejecuciones",
          running: "Desplegando ahora",
          success: "Último deploy exitoso",
          failure: "El último pipeline falló",
          cancelled: "El último pipeline se canceló",
        },
        states: {
          success: "Completado",
          failure: "Falló",
          running: "En curso",
          pending: "Pendiente",
          skipped: "Omitido",
        },
        stages: {
          commit: { name: "Commit", description: "Un push a la rama main dispara el pipeline en GitHub Actions." },
          lint: { name: "Lint", description: "ESLint revisa el código, incluidas las reglas de React Hooks." },
          test: {
            name: "Pruebas",
            description:
              "Vitest y Testing Library prueban las páginas, la navegación y la API del pipeline, con reporte de cobertura.",
          },
          build: { name: "Build", description: "Vite genera la versión optimizada del sitio." },
          budget: {
            name: "Presupuesto",
            description: "Falla si el JavaScript o el CSS comprimidos superan su tamaño máximo.",
          },
          lighthouse: {
            name: "Lighthouse",
            description:
              "Mide rendimiento, accesibilidad, buenas prácticas y SEO, y bloquea el deploy si alguno baja del mínimo.",
          },
          deploy: { name: "Deploy", description: "Wrangler publica el sitio y esta API en Cloudflare Workers." },
          smoke: {
            name: "Smoke test",
            description:
              "Ya en producción, espera a que la nueva versión esté en línea y verifica que las páginas, los CVs y la API respondan.",
          },
        },
        replay: "Reproducir",
        replaying: "Reproduciendo…",
        viewRun: "Ver en GitHub",
        viewWorkflow: "Ver el workflow",
        sourceCode: "Ver el código del sitio",
        detailsDuration: "Duración",
        commitBy: "por",
        liveSite: "Sitio en producción",
        testsTitle: "Pruebas",
        testsValue: (passed, total) => `${passed} de ${total} pruebas pasaron`,
        coverage: "Cobertura de líneas",
        jsLabel: "JavaScript (gzip)",
        cssLabel: "CSS (gzip)",
        budgetOf: (kb) => `de ${kb} KB permitidos`,
        qualityLabel: "Calidad",
        qualityTitle: "Métricas del deploy actual",
        lighthouseTitle: "Lighthouse",
        lighthouseNote: "Medición móvil, mediana de 3 ejecuciones en cada deploy.",
        lighthouseLabels: {
          performance: "Rendimiento",
          accessibility: "Accesibilidad",
          bestPractices: "Buenas prácticas",
          seo: "SEO",
        },
        bundleTitle: "Tamaño del bundle",
        historyLabel: "Historial",
        historyTitle: "Últimos deploys",
        historyEmpty: "Todavía no hay deploys registrados.",
        trendTitle: "JavaScript por deploy (gzip)",
        howLabel: "Arquitectura",
        howTitle: "Cómo funciona, a costo $0",
        how: [
          {
            title: "GitHub Actions",
            text: "El pipeline corre en GitHub Actions, gratis para repositorios públicos. Las métricas de cada build viajan con el sitio en metrics.json, sin base de datos.",
          },
          {
            title: "Cloudflare Workers",
            text: "El mismo Worker sirve el sitio y una pequeña API que lee el estado de GitHub Actions y lo guarda en caché unos segundos, dentro del plan gratuito.",
          },
          {
            title: "Calidad como requisito",
            text: "Si una prueba falla, el bundle crece de más o Lighthouse baja del mínimo, el cambio no llega a producción.",
          },
        ],
      },
      about: {
        meta: {
          title: "Sobre mí — Carlos Juca",
          description: "Perfil, stack tecnológico, educación e idiomas de Carlos Juca, AI Engineer y Full Stack Developer.",
        },
        label: "Sobre mí",
        title: "Quién soy, en pocas líneas",
        summary:
          "Soy ingeniero de software con experiencia en todo el ciclo de un producto: análisis de lo que necesita el negocio, diseño de la solución, desarrollo, despliegue y mantenimiento en producción. Me motiva que lo que construyo resuelva un problema real para quien lo usa. Disfruto enseñar y compartir lo que sé: documentar, revisar código y acompañar a otros desarrolladores. Hoy mi foco es la IA aplicada: integro LLMs en productos (agentes, RAG) y uso herramientas de IA a diario. Busco un equipo donde pueda aportar eso junto con el desarrollo full stack y seguir aprendiendo.",
        codeFile: "sobre-mi.ts",
        code: {
          variable: "carlos",
          fields: [
            ["rol", "AI Engineer | Full Stack Developer"],
            ["ubicacion", "Loja, Ecuador"],
            ["experiencia", "7 años"],
            ["educacion", "Ing. en Sistemas Informáticos y Computación · UTPL · Graduado (2022)"],
            ["idiomas", ["Español (nativo)", "Inglés (B1)"]],
            ["enfoque", ["IA aplicada", "Full Stack", "Cloud y DevOps", "Enseñar y compartir"]],
          ],
        },
        stackLabel: "Habilidades",
        stackTitle: "Mi stack tecnológico",
        educationLabel: "Educación",
        educationTitle: "Formación e idiomas",
        languagesTitle: "Idiomas",
        cvTitle: "Mi CV completo",
        cvText: "Descárgalo en el idioma que prefieras.",
        cvEs: "CV en español",
        cvEn: "CV en inglés",
      },
      contact: {
        meta: {
          title: "Contacto — Carlos Juca",
          description: "Escríbele a Carlos Juca por correo o LinkedIn.",
        },
        label: "Contacto",
        title: "Escríbeme y te responderé pronto.",
        form: {
          name: "Tu nombre",
          email: "Tu correo",
          subject: "Asunto",
          message: "Tu mensaje",
          send: "Enviar mensaje",
          hint: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
          direct: "¿Prefieres escribirme directo?",
          defaultSubject: "Contacto desde chjuca.dev",
          codeFile: "nuevo-mensaje.js",
          codeComment: "Se actualiza mientras escribes",
          codeVariable: "mensaje",
          codeFields: { name: "de", email: "correo", subject: "asunto", message: "texto" },
          codeSend: "enviar",
        },
      },
      notFound: {
        meta: { title: "Página no encontrada — Carlos Juca", description: "Esta página no existe." },
        label: "404",
        title: "Esta página no existe",
        text: "Puede que el enlace esté roto o que la página se haya movido.",
        back: "Volver al inicio",
      },
    },
    jobs: [
      {
        ...companies.mapvx,
        role: "AI Engineer | Full Stack Developer",
        period: "Dic 2021 – Actual",
        location: "Remoto",
        summary:
          "Plataforma de mapas interiores: agentes y asistente con LLMs, APIs y microservicios, apps web e infraestructura en AWS.",
        metrics: [
          { value: "< 1 ms", label: "de latencia de ruteo indoor con grafos por edificio en memoria" },
          { value: "−70%", label: "de costos de transferencia de datos tras rastrear un pico de facturación" },
          { value: "3 cuentas AWS", label: "en producción con EKS, Terraform y ArgoCD, sin despliegues manuales" },
        ],
        tasks: [
          "Diseño de arquitectura y desarrollo de APIs REST y microservicios para el backend de la plataforma, incluidos los servicios de búsqueda geoespacial y ruteo.",
          "Desarrollo de componentes de frontend en React, Next.js y Angular, incluido el editor interno de mapas.",
          "Desarrollo de agentes de IA y de un asistente conversacional con LLMs (tool calling, fallback multiproveedor), disponible en WhatsApp y web.",
          "Pipelines de RAG con embeddings y búsqueda vectorial, prompt engineering, y trazas y evaluación de LLMs.",
          "Pruebas unitarias y de integración de backend y frontend, con revisiones de código en cada entrega.",
          "Contenedores, pipelines de CI/CD y despliegue en la nube sobre AWS y Kubernetes, con infraestructura como código.",
          "Monitoreo, respuesta a incidentes y optimización de rendimiento y costos de servicios y bases de datos.",
          "Logro: rediseñé el motor de ruteo de la plataforma, llevando la latencia de respuesta a **menos de un milisegundo** y eliminando su mayor costo de base de datos.",
          "Logro: automaticé los despliegues y estabilicé producción **sin downtime para los clientes**, y reduje en cerca de 70% los costos de transferencia de datos de la base de datos.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Full Stack Developer",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Microservicios con Spring Boot y Spring Cloud y panel de administración en React para una plataforma de trading y CRM.",
        metrics: [],
        tasks: [
          "Diseño e implementación de una arquitectura de microservicios con Spring Boot y Spring Cloud para una plataforma de trading y CRM.",
          "Autenticación y autorización basadas en roles y tokens, y módulos de usuarios, roles y permisos.",
          "Diseño, desarrollo y documentación de APIs REST e integración con servicios externos.",
          "Desarrollo del panel de administración en React: vistas, formularios e integración con las APIs REST.",
          "Procesamiento asíncrono y comunicación entre servicios con RabbitMQ.",
          "Diseño de esquemas y optimización de consultas e índices en MySQL, PostgreSQL y MongoDB.",
          "Pruebas unitarias y de integración, revisiones de código, y contenerización con Docker y despliegue en los distintos entornos.",
          "Logro: consultas más rápidas y una API documentada **redujeron el tiempo de integración** de los equipos frontend y móvil.",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Laboratorio de Innovación e Investigación Docente",
        role: "Full Stack Developer",
        period: "Abr 2019 – Ago 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "Backend en Node.js y PostgreSQL y apps web en Angular y React para las plataformas del laboratorio.",
        metrics: [],
        tasks: [
          "Diseño e implementación de la arquitectura backend y de las APIs REST de las plataformas del laboratorio con Node.js y Express.",
          "Desarrollo de aplicaciones web en Angular y React: vistas, formularios y consumo de las APIs REST.",
          "Modelado de datos y diseño de esquemas en PostgreSQL, con migraciones y consultas optimizadas.",
          "Integración con Firebase (autenticación y datos en tiempo real).",
          "Estándares de código, pruebas unitarias, documentación técnica y revisiones de código con el equipo.",
          "Despliegue, monitoreo y soporte de las plataformas en producción.",
          "Logro: digitalicé la gestión de asistencia, personas y materiales, **antes totalmente manual**, y construí el backend de la plataforma LiiD Manager y las apps de recursos educativos usadas por docentes y estudiantes.",
        ],
        stack: stacks.liid,
      },
    ],
    projects: [
      {
        ...projectBase.site,
        name: "chjuca.dev · CI/CD en vivo",
        org: "Proyecto personal",
        role: "Autor",
        summary:
          "Este mismo sitio, con un pipeline público de GitHub Actions: lint, pruebas con cobertura, presupuesto de tamaño, Lighthouse, deploy a Cloudflare Workers y smoke tests en producción. Su estado se ve en vivo.",
      },
      {
        ...projectBase.notifications,
        name: "Notification Center",
        org: "Proyecto personal",
        role: "Autor",
        summary:
          "Sistema de notificaciones por email, SMS y push, donde cada canal es una estrategia independiente: agregar uno no modifica el resto. API en NestJS con JWT, PostgreSQL y Swagger, frontend en Next.js y despliegue en Vercel, con pruebas unitarias, de integración y de navegador.",
      },
      {
        ...projectBase.ascendere,
        name: "Proyecto Ascendere",
        role: "Backend Developer",
        summary:
          "API en Node.js para el portal de Investigación e Innovación Docente de la UTPL, con el modelado e implementación de su base de datos en PostgreSQL.",
      },
      {
        ...projectBase.rea,
        name: "Recursos Educativos Abiertos",
        org: "Aplicaciones Web · UTPL",
        summary:
          "Aplicación para consultar los recursos subidos a la plataforma, ya sean videos, imágenes o textos, desarrollada con Angular 8 y Firebase.",
      },
      {
        ...projectBase.liv,
        summary:
          "Aplicación para consultar los recursos que el docente de Farmacología sube a la plataforma, con división por unidades, filtros por materia y evaluaciones para estudiantes.",
      },
    ],
    skills: [
      { id: "Backend", items: ["JavaScript", "TypeScript", "Node.js", "Java", "Python", "NestJS", "Express", "Spring Boot", "FastAPI", "AWS", "Jest", "Pytest", "JUnit", "PostgreSQL", "MySQL", "MongoDB", "RabbitMQ"] },
      { id: "Frontend", items: ["JavaScript", "TypeScript", "React", "Angular", "Next.js", "Jest", "React Testing Library", "Vite", "CSS", "HTML", "Mapbox GL", "Leaflet"] },
      { id: "IA", items: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "AWS Bedrock", "RAG", "Langfuse", "MCP", "n8n", "Claude Code"] },
      { id: "BasesDeDatos", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Redis", "Elasticsearch", "Firebase"] },
      { id: "CloudDevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Helm", "Terraform", "ArgoCD", "GitHub Actions", "Nginx"] },
    ],
    education: [
      {
        degree: "Ingeniería en Sistemas Informáticos y Computación",
        school: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        period: "2017 – 2022 · Graduado",
        logo: utplLogo,
      },
    ],
    languages: ["Español (nativo)", "Inglés (B1)"],
  },

  en: {
    ui: {
      nav: {
        home: "Home",
        experience: "Experience",
        projects: "Projects",
        pipeline: "Pipeline",
        about: "About me",
        contact: "Contact",
      },
      navLabel: "Main navigation",
      footerNavLabel: "Site pages",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
      themeToDark: "Switch to dark mode",
      themeToLight: "Switch to light mode",
      skipToContent: "Skip to content",
      scrollDown: "See more",
      downloadCv: "Download CV",
      viewDetails: "View details",
      viewProject: "View project",
      visitSite: "Visit site",
      viewPipeline: "See the live pipeline",
      privateProject: "Private project · no public demo",
      publicProject: "Live site",
      screenshot: (name) => `Screenshot of ${name}`,
      moreOnGitHub: "More projects on GitHub",
      previous: "Previous",
      next: "Next",
      pagerLabel: "Previous and next",
      backToExperience: "Back to experience",
      backToProjects: "Back to projects",
      footer: "Built with React and Vite.",
    },
    cv: "/cv/EN-chjuca-IA-Engineer.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — AI Engineer | Full Stack Developer",
          description:
            "AI Engineer and Full Stack Developer with 7 years of experience: applied AI (agents, RAG), JavaScript, TypeScript, Node.js, Python, React and AWS.",
        },
        hero: {
          greeting: `Hi, I'm ${profile.firstName}`,
          intro:
            "Software engineer with experience across the whole product cycle: analysis, design, development, deployment and maintenance in production. Today my focus is applied AI: I integrate LLMs into products (agents, RAG) and use AI tooling every day.",
          focus: ["Applied AI", "Agents and RAG", "Full Stack", "Cloud and DevOps"],
          contact: "Contact me",
        },
        highlightsLabel: "Impact",
        highlightsTitle: "A few numbers",
        highlights: [
          { value: "7 years", label: "building production software" },
          { value: "< 1 ms", label: "indoor routing latency with in-memory graphs" },
          { value: "−70%", label: "Firebase egress after tracing a billing spike" },
          { value: "0 downtime", label: "across Kubernetes migrations and incident response" },
        ],
        nowLabel: "Now",
        nowTitle: "Where I work today",
        allExperience: "See all my experience",
        stackLabel: "Stack",
        stackTitle: "What I build with",
        stackLink: "See my full profile",
        projectsLabel: "Projects",
        projectsTitle: "Some projects",
        projectsLink: "See all projects",
        cta: {
          title: "Let's talk?",
          text: "Write me a message and I'll get back to you.",
          button: "Go to contact",
        },
      },
      experience: {
        meta: {
          title: "Experience — Carlos Juca",
          description:
            "Carlos Juca's experience at MapVX (Lazarillo), ExmerDev and UTPL's Teaching Innovation and Research Lab.",
        },
        label: "Experience",
        title: "Where I've worked",
        intro: "7 years building production software: from backend and frontend to infrastructure.",
      },
      job: {
        impactTitle: "Impact",
        tasksTitle: "What I did",
        stackTitle: "Tech stack",
      },
      projects: {
        meta: {
          title: "Projects — Carlos Juca",
          description: "Projects by Carlos Juca: chjuca.dev with live CI/CD, Ascendere, Open Educational Resources and LIV.",
        },
        label: "Projects",
        title: "My projects",
        intro: "Some of the projects I worked on, with their stack and availability.",
      },
      project: {
        factsTitle: "Project facts",
        orgLabel: "Organization",
        roleLabel: "My role",
        stackLabel: "Tech stack",
        statusLabel: "Availability",
      },
      pipeline: {
        meta: {
          title: "Pipeline — Carlos Juca",
          description:
            "chjuca.dev's live CI/CD pipeline: tests, Lighthouse, deploys to Cloudflare Workers and smoke tests.",
        },
        label: "Pipeline",
        title: "How this site is built and deployed",
        intro:
          "Every change I push goes through this public CI/CD pipeline before reaching production. What you see here is real, live data from GitHub Actions.",
        graphLabel: "Stages of the latest pipeline",
        status: {
          loading: "Loading the live status…",
          error: "Couldn't load the live status from GitHub",
          none: "No runs yet",
          running: "Deploying now",
          success: "Last deploy succeeded",
          failure: "The last pipeline failed",
          cancelled: "The last pipeline was cancelled",
        },
        states: {
          success: "Done",
          failure: "Failed",
          running: "Running",
          pending: "Pending",
          skipped: "Skipped",
        },
        stages: {
          commit: { name: "Commit", description: "A push to the main branch triggers the pipeline on GitHub Actions." },
          lint: { name: "Lint", description: "ESLint checks the code, including the React Hooks rules." },
          test: {
            name: "Tests",
            description:
              "Vitest and Testing Library test the pages, the navigation and the pipeline API, with a coverage report.",
          },
          build: { name: "Build", description: "Vite produces the optimized build of the site." },
          budget: {
            name: "Budget",
            description: "Fails when the gzipped JavaScript or CSS grows past its maximum size.",
          },
          lighthouse: {
            name: "Lighthouse",
            description:
              "Measures performance, accessibility, best practices and SEO, and blocks the deploy if any drops below the minimum.",
          },
          deploy: { name: "Deploy", description: "Wrangler publishes the site and this API to Cloudflare Workers." },
          smoke: {
            name: "Smoke test",
            description:
              "Once in production, waits for the new version to be live and checks that the pages, the CVs and the API respond.",
          },
        },
        replay: "Replay",
        replaying: "Replaying…",
        viewRun: "View on GitHub",
        viewWorkflow: "View the workflow",
        sourceCode: "View the site's code",
        detailsDuration: "Duration",
        commitBy: "by",
        liveSite: "Live site",
        testsTitle: "Tests",
        testsValue: (passed, total) => `${passed} of ${total} tests passed`,
        coverage: "Line coverage",
        jsLabel: "JavaScript (gzip)",
        cssLabel: "CSS (gzip)",
        budgetOf: (kb) => `of ${kb} KB allowed`,
        qualityLabel: "Quality",
        qualityTitle: "Metrics of the current deploy",
        lighthouseTitle: "Lighthouse",
        lighthouseNote: "Mobile run, median of 3 runs on every deploy.",
        lighthouseLabels: {
          performance: "Performance",
          accessibility: "Accessibility",
          bestPractices: "Best practices",
          seo: "SEO",
        },
        bundleTitle: "Bundle size",
        historyLabel: "History",
        historyTitle: "Latest deploys",
        historyEmpty: "No deploys recorded yet.",
        trendTitle: "JavaScript per deploy (gzip)",
        howLabel: "Architecture",
        howTitle: "How it works, at $0",
        how: [
          {
            title: "GitHub Actions",
            text: "The pipeline runs on GitHub Actions, free for public repositories. Each build's metrics ship with the site in metrics.json, no database needed.",
          },
          {
            title: "Cloudflare Workers",
            text: "The same Worker serves the site and a small API that reads the GitHub Actions status and caches it for a few seconds, within the free plan.",
          },
          {
            title: "Quality as a gate",
            text: "If a test fails, the bundle grows too much or Lighthouse drops below the minimum, the change never reaches production.",
          },
        ],
      },
      about: {
        meta: {
          title: "About me — Carlos Juca",
          description: "Profile, tech stack, education and languages of Carlos Juca, AI Engineer and Full Stack Developer.",
        },
        label: "About me",
        title: "Who I am, in a few lines",
        summary:
          "I'm a software engineer with experience across the whole product cycle: analysis of what the business needs, solution design, development, deployment and maintenance in production. What motivates me is that what I build solves a real problem for the people who use it. I enjoy teaching and sharing what I know: documenting, reviewing code and supporting other developers. Today my focus is applied AI: I integrate LLMs into products (agents, RAG) and use AI tooling every day. I'm looking for a team where I can bring that together with full-stack development and keep learning.",
        codeFile: "about-me.ts",
        code: {
          variable: "carlos",
          fields: [
            ["role", "AI Engineer | Full Stack Developer"],
            ["location", "Loja, Ecuador"],
            ["experience", "7 years"],
            ["education", "B.S. in Computer Systems Engineering · UTPL · Graduated (2022)"],
            ["languages", ["Spanish (native)", "English (B1)"]],
            ["focus", ["Applied AI", "Full Stack", "Cloud and DevOps", "Teaching and sharing"]],
          ],
        },
        stackLabel: "Skills",
        stackTitle: "My tech stack",
        educationLabel: "Education",
        educationTitle: "Education and languages",
        languagesTitle: "Languages",
        cvTitle: "My full CV",
        cvText: "Download it in the language you prefer.",
        cvEs: "CV in Spanish",
        cvEn: "CV in English",
      },
      contact: {
        meta: {
          title: "Contact — Carlos Juca",
          description: "Write to Carlos Juca by email or LinkedIn.",
        },
        label: "Contact",
        title: "Write me a message and I'll get back to you.",
        form: {
          name: "Your name",
          email: "Your email",
          subject: "Subject",
          message: "Your message",
          send: "Send message",
          hint: "Your email app will open with the message ready to send.",
          direct: "Prefer to write directly?",
          defaultSubject: "Contact from chjuca.dev",
          codeFile: "new-message.js",
          codeComment: "Updates as you type",
          codeVariable: "message",
          codeFields: { name: "from", email: "email", subject: "subject", message: "text" },
          codeSend: "send",
        },
      },
      notFound: {
        meta: { title: "Page not found — Carlos Juca", description: "This page does not exist." },
        label: "404",
        title: "This page doesn't exist",
        text: "The link may be broken or the page may have moved.",
        back: "Back to home",
      },
    },
    jobs: [
      {
        ...companies.mapvx,
        role: "AI Engineer | Full Stack Developer",
        period: "Dec 2021 – Present",
        location: "Remote",
        summary:
          "Indoor-mapping platform: LLM agents and assistant, APIs and microservices, web apps and AWS infrastructure.",
        metrics: [
          { value: "< 1 ms", label: "indoor routing latency with per-building in-memory graphs" },
          { value: "−70%", label: "data-transfer costs after tracing a billing spike" },
          { value: "3 AWS accounts", label: "in production with EKS, Terraform and ArgoCD, no manual deployments" },
        ],
        tasks: [
          "Architecture design and development of REST APIs and microservices for the platform's backend, including the geospatial search and routing services.",
          "Development of front-end components in React, Next.js and Angular, including the internal map editor.",
          "Development of AI agents and a conversational assistant with LLMs (tool calling, multi-provider fallback), available on WhatsApp and the web.",
          "RAG pipelines with embeddings and vector search, prompt engineering, and LLM tracing and evaluation.",
          "Unit and integration testing of backend and frontend, with code reviews as part of every delivery.",
          "Containers, CI/CD pipelines and cloud deployment on AWS and Kubernetes, with infrastructure as code.",
          "Monitoring, incident response and performance and cost optimization of services and databases.",
          "Achievement: redesigned the platform's routing engine, bringing response latency **below a millisecond** and removing its largest database cost.",
          "Achievement: automated deployments and stabilized production **with zero downtime for clients**, and cut the database's data-transfer costs by about 70%.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Full Stack Developer",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Spring Boot and Spring Cloud microservices and a React admin panel for a trading and CRM platform.",
        metrics: [],
        tasks: [
          "Design and implementation of a microservice architecture with Spring Boot and Spring Cloud for a trading and CRM platform.",
          "Role- and token-based authentication and authorization, and the users, roles and permissions modules.",
          "Design, development and documentation of REST APIs, and integration with external services.",
          "Development of the admin panel in React: views, forms and integration with the REST APIs.",
          "Asynchronous processing and communication between services with RabbitMQ.",
          "Schema design and query and index optimization in MySQL, PostgreSQL and MongoDB.",
          "Unit and integration testing, code reviews, and Docker containerization and deployment across environments.",
          "Achievement: faster database queries and a documented API **cut integration time** for the frontend and mobile teams.",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Teaching Innovation and Research Lab",
        role: "Full Stack Developer",
        period: "Apr 2019 – Aug 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "Node.js and PostgreSQL backend and Angular and React web apps for the lab's platforms.",
        metrics: [],
        tasks: [
          "Design and implementation of the backend architecture and REST APIs of the lab's platforms with Node.js and Express.",
          "Development of web applications in Angular and React: views, forms and consumption of the REST APIs.",
          "Data modelling and schema design in PostgreSQL, with migrations and optimized queries.",
          "Firebase integration (authentication and real-time data).",
          "Coding standards, unit testing, technical documentation and code reviews with the team.",
          "Deployment, monitoring and support of the platforms in production.",
          "Achievement: digitized the lab's attendance, people and materials management, **previously fully manual**, and built the backend of the LiiD Manager platform and the educational-resource apps used by teachers and students.",
        ],
        stack: stacks.liid,
      },
    ],
    projects: [
      {
        ...projectBase.site,
        name: "chjuca.dev · Live CI/CD",
        org: "Personal project",
        role: "Author",
        summary:
          "This very site, with a public GitHub Actions pipeline: lint, tests with coverage, a size budget, Lighthouse, deploys to Cloudflare Workers and production smoke tests. Its status is visible live.",
      },
      {
        ...projectBase.notifications,
        name: "Notification Center",
        org: "Personal project",
        role: "Author",
        summary:
          "Notification system over email, SMS and push, where each channel is an independent strategy: adding one leaves the rest untouched. NestJS API with JWT, PostgreSQL and Swagger, a Next.js frontend and a Vercel deployment, covered by unit, integration and browser tests.",
      },
      {
        ...projectBase.ascendere,
        name: "Ascendere Project",
        role: "Backend Developer",
        summary:
          "Node.js API for UTPL's Teaching Research and Innovation portal, including the design and implementation of its PostgreSQL database.",
      },
      {
        ...projectBase.rea,
        name: "Open Educational Resources",
        org: "Web Applications · UTPL",
        summary:
          "App to browse the resources uploaded to the platform, whether videos, images or text, built with Angular 8 and Firebase.",
      },
      {
        ...projectBase.liv,
        summary:
          "App to browse the resources the Pharmacology teacher uploads to the platform, organized by unit, with subject filters and student assessments.",
      },
    ],
    skills: [
      { id: "Backend", items: ["JavaScript", "TypeScript", "Node.js", "Java", "Python", "NestJS", "Express", "Spring Boot", "FastAPI", "AWS", "Jest", "Pytest", "JUnit", "PostgreSQL", "MySQL", "MongoDB", "RabbitMQ"] },
      { id: "Frontend", items: ["JavaScript", "TypeScript", "React", "Angular", "Next.js", "Jest", "React Testing Library", "Vite", "CSS", "HTML", "Mapbox GL", "Leaflet"] },
      { id: "AI", items: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "AWS Bedrock", "RAG", "Langfuse", "MCP", "n8n", "Claude Code"] },
      { id: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DocumentDB", "Redis", "Elasticsearch", "Firebase"] },
      { id: "CloudDevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Helm", "Terraform", "ArgoCD", "GitHub Actions", "Nginx"] },
    ],
    education: [
      {
        degree: "B.S. in Computer Systems Engineering",
        school: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        period: "2017 – 2022 · Graduated",
        logo: utplLogo,
      },
    ],
    languages: ["Spanish (native)", "English (B1)"],
  },
};
