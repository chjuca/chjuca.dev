import avatar from "../assets/avatar.webp";
import exmerdevLogo from "../assets/logos/exmerdev.webp";
import liidLogo from "../assets/logos/liid.webp";
import mapvxLogo from "../assets/logos/mapvx.webp";
import utplLogo from "../assets/logos/utpl.webp";
import liidProject from "../assets/projects/liid.webp";
import livProject from "../assets/projects/liv.webp";
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
  role: "Software Engineer",
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
    "Node.js",
    "NestJS",
    "TypeScript",
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "Angular",
    "Mapbox GL",
    "Leaflet",
    "PostgreSQL",
    "MongoDB",
    "DocumentDB",
    "Redis",
    "Elasticsearch",
    "Firebase",
    "LangChain",
    "LangGraph",
    "pgvector",
    "Langfuse",
    "n8n",
    "AWS",
    "Kubernetes",
    "Helm",
    "Terraform",
    "ArgoCD",
    "Docker",
    "GitHub Actions",
    "Nginx",
    "Elastic Stack",
    "CloudWatch",
    "Uptime Kuma",
  ],
  exmerdev: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MySQL", "PostgreSQL", "MongoDB"],
  liid: ["Node.js", "PostgreSQL"],
};

const projectBase = {
  site: {
    slug: "chjuca-dev",
    url: "/pipeline",
    image: pipelineProject,
    logo: avatar,
    tech: ["React", "GitHub Actions", "Cloudflare Workers", "Lighthouse", "Vitest"],
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
    cv: "/cv/ES-chjuca-Software-Engineer.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — Software Engineer",
          description:
            "Ingeniero de Software Full Stack con 7 años de experiencia: Node.js (NestJS), Python (FastAPI), Next.js, React, Angular, infraestructura en AWS e IA aplicada en el día a día.",
        },
        hero: {
          greeting: `Hola, soy ${profile.firstName}`,
          intro:
            "Ingeniero de software con 7 años construyendo y operando plataformas web de extremo a extremo: del backend y el frontend a la infraestructura en AWS. Trabajo con IA a diario: integro LLMs en productos y uso Claude Code para entregar más rápido.",
          focus: ["Full Stack", "Backend y APIs", "Cloud en AWS", "IA en el día a día"],
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
          description: "Perfil, stack tecnológico, educación e idiomas de Carlos Juca, Software Engineer Full Stack.",
        },
        label: "Sobre mí",
        title: "Quién soy, en pocas líneas",
        summary:
          "Ingeniero de Software con 7 años de experiencia construyendo y operando plataformas web de extremo a extremo: backend en Node.js (NestJS) y Python (FastAPI), frontends en Next.js, React y Angular, y la infraestructura AWS sobre la que corren. Me hago cargo de cada funcionalidad desde el modelo de datos hasta el despliegue, con historial de reducir latencia y costos de nube en producción. Trabajo con IA a diario: integro LLMs en productos (agentes, RAG) y uso Claude Code y herramientas de LLM para entregar más rápido. Aplico Clean Architecture y TDD.",
        codeFile: "sobre-mi.ts",
        code: {
          variable: "carlos",
          fields: [
            ["rol", "Software Engineer"],
            ["ubicacion", "Loja, Ecuador"],
            ["experiencia", "7 años"],
            ["educacion", "Ing. en Sistemas Informáticos y Computación · UTPL (2017 – 2022)"],
            ["idiomas", ["Español", "Inglés"]],
            ["enfoque", ["Full Stack", "Cloud y DevOps", "IA aplicada", "Clean Architecture y TDD"]],
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
        role: "Ingeniero de Software (Full Stack y DevOps)",
        period: "Dic 2021 – Actual",
        location: "Remoto",
        summary:
          "La plataforma de mapas interiores de extremo a extremo: APIs, apps web, ruteo indoor, asistente con LLMs e infraestructura en AWS.",
        metrics: [
          { value: "< 1 ms", label: "de latencia de ruteo indoor con grafos por edificio en memoria" },
          { value: "−70%", label: "de egress en Firebase tras rastrear un pico de facturación" },
          { value: "3 cuentas AWS", label: "en producción con EKS, Terraform y ArgoCD, sin despliegues manuales" },
        ],
        tasks: [
          "Me hago cargo de la plataforma de mapas interiores MapVX de extremo a extremo: las APIs públicas, las apps web y el editor con el que el equipo de contenido publica cada edificio (NestJS, FastAPI, Next.js).",
          "Rediseñé el ruteo indoor para que cada edificio se rutee en memoria desde un grafo compacto en lugar de un caché de 44 millones de rutas precalculadas, **bajando la latencia a menos de un milisegundo** y eliminando el mayor costo de base de datos de la plataforma (DocumentDB).",
          "Llevé la búsqueda geoespacial y el precálculo de rutas **de varios segundos a menos de uno** corrigiendo el diseño de consultas e índices, el paso más lento para tótems y app móvil (PostgreSQL, Elasticsearch).",
          "Reduje el egress de la base de datos de Firebase **en cerca de 70%** tras rastrear un pico de facturación hasta lecturas de índices completos, y dejé un watchdog que avisa al equipo antes de que un pico se convierta en factura.",
          "Lancé el asistente conversacional de MapVX, con el que los visitantes encuentran locales y rutas chateando por WhatsApp o web, con fallback entre proveedores de LLM para que el servicio siga en pie si uno falla (LangChain, LangGraph).",
          "Hice rutinarios los despliegues a producción: migré servidores legacy a Kubernetes, dejé las tres cuentas de AWS en Terraform y reemplacé las liberaciones manuales por CI/CD, **sin downtime para los clientes**.",
          "Mantengo la plataforma observable y segura: monitoreo y respuesta a incidentes, más de 85 sitios detrás de un reverse proxy con TLS automatizado, y un WordPress comprometido **erradicado y reconstruido sin downtime**.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Desarrollador Backend",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Módulos de roles, usuarios y seguridad de una plataforma de trading y CRM, con servicios desacoplados por mensajería asíncrona.",
        metrics: [],
        tasks: [
          "Entregué los módulos de roles, usuarios y seguridad de una plataforma de trading y CRM y desacoplé sus servicios con mensajería asíncrona **para que los equipos liberaran por separado** (Spring Boot, RabbitMQ).",
          "Aceleré las consultas a base de datos de la plataforma y documenté su API REST, **reduciendo el tiempo de integración** de los equipos frontend y móvil (MySQL, PostgreSQL, MongoDB).",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Laboratorio de Innovación e Investigación Docente",
        role: "Líder de Backend",
        period: "Abr 2019 – Ago 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "API REST que digitalizó la gestión del laboratorio y liderazgo técnico del backend de LiiD Manager.",
        metrics: [],
        tasks: [
          "Digitalicé la gestión de asistencia, personas y materiales del laboratorio con una API REST que **reemplazó un proceso completamente manual** (Node.js, PostgreSQL).",
          "Lideré el backend de la plataforma LiiD Manager (salud y educación) y definí los estándares técnicos y la revisión de código del equipo.",
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
      { id: "Backend", items: ["Node.js", "NestJS", "TypeScript", "Python", "FastAPI", "Spring Boot"] },
      { id: "Frontend", items: ["React", "Next.js", "Angular", "Mapbox GL"] },
      { id: "IA", items: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "AWS Bedrock", "RAG", "Langfuse", "MCP", "n8n", "Claude Code"] },
      { id: "BasesDeDatos", items: ["PostgreSQL", "MongoDB", "DocumentDB", "Redis", "Elasticsearch", "Firebase"] },
      { id: "CloudDevOps", items: ["AWS", "Kubernetes", "Helm", "Terraform", "ArgoCD", "Docker", "GitHub Actions", "Nginx"] },
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
    cv: "/cv/EN-chjuca-Software-Engineer.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — Software Engineer",
          description:
            "Full Stack Software Engineer with 7 years of experience: Node.js (NestJS), Python (FastAPI), Next.js, React, Angular, AWS infrastructure and AI applied every day.",
        },
        hero: {
          greeting: `Hi, I'm ${profile.firstName}`,
          intro:
            "Software engineer with 7 years building and operating web platforms end to end: from backend and frontend to AWS infrastructure. I work with AI every day: I integrate LLMs into products and use Claude Code to deliver faster.",
          focus: ["Full Stack", "Backend and APIs", "Cloud on AWS", "AI every day"],
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
          description: "Profile, tech stack, education and languages of Carlos Juca, Full Stack Software Engineer.",
        },
        label: "About me",
        title: "Who I am, in a few lines",
        summary:
          "Software Engineer with 7 years of experience building and operating web platforms end to end: backend in Node.js (NestJS) and Python (FastAPI), frontends in Next.js, React and Angular, and the AWS infrastructure they run on. Comfortable owning a feature from data model to deployment, with a track record of reducing latency and cloud costs in production systems. I work with AI every day: I integrate LLMs into products (agents, RAG) and use Claude Code and LLM tooling to deliver faster. I apply Clean Architecture and TDD.",
        codeFile: "about-me.ts",
        code: {
          variable: "carlos",
          fields: [
            ["role", "Software Engineer"],
            ["location", "Loja, Ecuador"],
            ["experience", "7 years"],
            ["education", "B.S. in Computer Systems Engineering · UTPL (2017 – 2022)"],
            ["languages", ["Spanish", "English"]],
            ["focus", ["Full Stack", "Cloud and DevOps", "Applied AI", "Clean Architecture and TDD"]],
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
        role: "Software Engineer (Full Stack & DevOps)",
        period: "Dec 2021 – Present",
        location: "Remote",
        summary:
          "The indoor-mapping platform end to end: APIs, web apps, indoor routing, an LLM assistant and AWS infrastructure.",
        metrics: [
          { value: "< 1 ms", label: "indoor routing latency with per-building in-memory graphs" },
          { value: "−70%", label: "Firebase egress after tracing a billing spike" },
          { value: "3 AWS accounts", label: "in production with EKS, Terraform and ArgoCD, no manual deployments" },
        ],
        tasks: [
          "Own the MapVX indoor-mapping platform end to end: the public APIs, the web apps and the editor the content team uses to publish each venue (NestJS, FastAPI, Next.js).",
          "Redesigned indoor routing so each building is routed in memory from a compact graph instead of a 44-million-document precomputed cache, **taking route latency below a millisecond** and removing the platform's largest database cost (DocumentDB).",
          "Took geospatial search and route precomputation **from several seconds to under one** by fixing query and index design, the slowest step for kiosks and the mobile app (PostgreSQL, Elasticsearch).",
          "Cut Firebase database egress **by about 70%** after tracing a billing spike to whole-index reads, and left a watchdog that alerts the team before a spike becomes an invoice.",
          "Launched the MapVX conversational assistant, which lets visitors find stores and routes by chatting on WhatsApp or the web, with fallback across LLM providers so the service stays up if one fails (LangChain, LangGraph).",
          "Made production deployments routine: moved legacy servers onto Kubernetes, codified the three AWS accounts in Terraform and replaced manual releases with CI/CD, **with no downtime for clients**.",
          "Keep the platform observable and secure: monitoring and incident response, 85+ sites behind a reverse proxy with automated TLS, and a WordPress compromise **eradicated and rebuilt with zero downtime**.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Backend Developer",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Roles, users and security modules of a trading and CRM platform, with services decoupled through asynchronous messaging.",
        metrics: [],
        tasks: [
          "Delivered the roles, users and security modules of a trading and CRM platform and decoupled its services with asynchronous messaging **so teams could release independently** (Spring Boot, RabbitMQ).",
          "Sped up the platform's database queries and documented its REST API, **cutting integration time** for the frontend and mobile teams (MySQL, PostgreSQL, MongoDB).",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Teaching Innovation and Research Lab",
        role: "Backend Lead",
        period: "Apr 2019 – Aug 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "A REST API that digitized the lab's management and technical lead of the LiiD Manager backend.",
        metrics: [],
        tasks: [
          "Digitized the lab's attendance, people and materials management with a REST API that **replaced a fully manual process** (Node.js, PostgreSQL).",
          "Led the backend of the LiiD Manager platform (health and education) and set the team's technical standards and code review practice.",
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
      { id: "Backend", items: ["Node.js", "NestJS", "TypeScript", "Python", "FastAPI", "Spring Boot"] },
      { id: "Frontend", items: ["React", "Next.js", "Angular", "Mapbox GL"] },
      { id: "AI", items: ["LangChain", "LangGraph", "OpenAI API", "Claude API", "AWS Bedrock", "RAG", "Langfuse", "MCP", "n8n", "Claude Code"] },
      { id: "Databases", items: ["PostgreSQL", "MongoDB", "DocumentDB", "Redis", "Elasticsearch", "Firebase"] },
      { id: "CloudDevOps", items: ["AWS", "Kubernetes", "Helm", "Terraform", "ArgoCD", "Docker", "GitHub Actions", "Nginx"] },
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
  },
};
