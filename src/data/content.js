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
  role: "Fullstack Engineer",
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
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "Angular",
    "Mapbox GL",
    "Leaflet",
    "LangChain",
    "LangGraph",
    "n8n",
    "PostgreSQL",
    "MongoDB",
    "DocumentDB",
    "AWS",
    "Kubernetes",
    "Helm",
    "Terraform",
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
    cv: "/cv/Carlos-Juca-Fullstack-ES.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — Fullstack Engineer",
          description:
            "Ingeniero de Software con 7 años de experiencia en Node.js, NestJS, Python (FastAPI), Next.js, React y Angular, agentes con LLMs e infraestructura en AWS.",
        },
        hero: {
          greeting: `Hola, soy ${profile.firstName}`,
          intro:
            "Ingeniero de software con 7 años construyendo software en producción. Me especializo en microservicios y APIs de alto rendimiento, integro LLMs mediante agentes y me hago cargo de la infraestructura en AWS de punta a punta.",
          focus: ["Microservicios", "APIs de alto rendimiento", "Agentes con LLMs", "Infraestructura en AWS"],
          contact: "Contáctame",
        },
        highlightsLabel: "Impacto",
        highlightsTitle: "Algunos números",
        highlights: [
          { value: "7 años", label: "construyendo software en producción" },
          { value: "5.000 → 900 ms", label: "tiempo de respuesta en precálculo de rutas" },
          { value: "3 cuentas AWS", label: "operadas en producción" },
          { value: "~87 virtual hosts", label: "en Nginx con TLS" },
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
          description: "Perfil, stack tecnológico, educación e idiomas de Carlos Juca, Fullstack Engineer.",
        },
        label: "Sobre mí",
        title: "Quién soy, en pocas líneas",
        summary:
          "Ingeniero de Software con 7 años de experiencia construyendo software en producción con Node.js, NestJS y Python (FastAPI), y frontend en Next.js, React y Angular. Especializado en microservicios, APIs REST de alto rendimiento y optimización de acceso a datos con Clean Architecture y TDD. Integro LLMs en flujos de producto mediante agentes con LangChain, LangGraph y n8n, y asumo responsabilidad end-to-end sobre la infraestructura: Kubernetes (Amazon EKS), Terraform, CI/CD y operación multi-cuenta en AWS.",
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
        role: "Fullstack Developer",
        period: "Dic 2021 – Actual",
        location: "Remoto",
        summary:
          "Microservicios para rutas y búsqueda geoespacial, herramientas de mapas interiores, agentes con LLMs e infraestructura en AWS.",
        metrics: [
          { value: "5.000 → 900 ms", label: "tiempo de respuesta en precálculo de rutas y búsqueda geoespacial" },
          { value: "3 cuentas AWS", label: "de infraestructura de producción con EKS, Helm y Terraform" },
          { value: "~87 virtual hosts", label: "en Nginx con su ciclo de certificados TLS" },
        ],
        tasks: [
          "Diseñé APIs REST y microservicios en Node.js / NestJS y Python / FastAPI para el precálculo de rutas y la búsqueda geoespacial, **reduciendo el tiempo de respuesta de 5.000 ms a 900 ms** e integrando servicios geoespaciales de terceros sin degradar el rendimiento.",
          "Construí agentes y automatizaciones con LangChain, LangGraph y n8n integrados con las APIs internas, automatizando procesos operativos que se hacían de forma manual.",
          "Desarrollé features en Next.js, React y Angular 18 para la app web y las herramientas internas de dibujo de mapas interiores (Mapbox GL, Leaflet), aplicando Clean Architecture y TDD para reducir la reincidencia de bugs en producción.",
          "Optimicé consultas críticas en PostgreSQL, MongoDB y DocumentDB mediante indexación y refactor de queries, eliminando cuellos de botella del backend.",
          "Operé la infraestructura de producción en 3 cuentas de AWS (EKS, ECS, S3, CloudFront, Lambda, RDS) con Kubernetes, Helm y Terraform, y construí pipelines de CI/CD con GitHub Actions y Docker que eliminaron los despliegues manuales.",
          "Implementé monitoreo con Elastic Stack, CloudWatch y Uptime Kuma, y administré Nginx como reverse proxy de ~87 virtual hosts con su ciclo de certificados TLS, resolviendo incidentes sin downtime para clientes.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Backend Developer (Java · Spring Boot)",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Módulos de roles, usuarios y seguridad para un sistema de Trading y CRM con Spring Boot y RabbitMQ.",
        metrics: [],
        tasks: [
          "Implementé los módulos de roles, usuarios y seguridad de un sistema de Trading y CRM con Spring Boot y Spring Cloud, integrando mensajería asíncrona con RabbitMQ para desacoplar los servicios.",
          "Optimicé bases de datos MySQL, PostgreSQL y MongoDB y documenté los endpoints REST del equipo, reduciendo la fricción de integración.",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Laboratorio de Innovación e Investigación Docente",
        role: "Líder de Backend",
        period: "Abr 2019 – Ago 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "API REST con Node.js y PostgreSQL y coordinación técnica del backend de la plataforma LiiD Manager.",
        metrics: [],
        tasks: [
          "Desarrollé una API REST con Node.js y PostgreSQL para gestionar asistencia, personas y materiales, digitalizando un proceso manual.",
          "Coordiné el backend de la plataforma LiiD Manager (salud y educación) y definí estándares técnicos y revisiones de código para el equipo.",
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
      { id: "Backend", items: ["Node.js", "NestJS", "TypeScript", "Python", "FastAPI"] },
      { id: "Frontend", items: ["React", "Next.js", "Angular"] },
      { id: "IA", items: ["LangChain", "LangGraph", "n8n"] },
      { id: "BasesDeDatos", items: ["PostgreSQL", "MongoDB"] },
      { id: "CloudDevOps", items: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions"] },
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
    cv: "/cv/Carlos-Juca-Fullstack-EN.pdf",
    pages: {
      home: {
        meta: {
          title: "Carlos Juca — Fullstack Engineer",
          description:
            "Software Engineer with 7 years of experience in Node.js, NestJS, Python (FastAPI), Next.js, React and Angular, LLM agents and AWS infrastructure.",
        },
        hero: {
          greeting: `Hi, I'm ${profile.firstName}`,
          intro:
            "Software engineer with 7 years building production software. I specialize in microservices and high-performance APIs, integrate LLMs through agents and own AWS infrastructure end to end.",
          focus: ["Microservices", "High-performance APIs", "LLM agents", "AWS infrastructure"],
          contact: "Contact me",
        },
        highlightsLabel: "Impact",
        highlightsTitle: "A few numbers",
        highlights: [
          { value: "7 years", label: "building production software" },
          { value: "5,000 → 900 ms", label: "response time for route precomputation" },
          { value: "3 AWS accounts", label: "operated in production" },
          { value: "~87 virtual hosts", label: "on Nginx with TLS" },
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
          description: "Profile, tech stack, education and languages of Carlos Juca, Fullstack Engineer.",
        },
        label: "About me",
        title: "Who I am, in a few lines",
        summary:
          "Software Engineer with 7 years of experience building production software with Node.js, NestJS and Python (FastAPI), and frontend with Next.js, React and Angular. Specialized in microservices, high-performance REST APIs and data access optimization using Clean Architecture and TDD. I integrate LLMs into product workflows through agents built with LangChain, LangGraph and n8n, and take end-to-end ownership of the underlying infrastructure: Kubernetes (Amazon EKS), Terraform, CI/CD and multi-account AWS operations.",
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
        role: "Fullstack Developer",
        period: "Dec 2021 – Present",
        location: "Remote",
        summary:
          "Microservices for routing and geospatial search, indoor-map tooling, LLM agents and AWS infrastructure.",
        metrics: [
          { value: "5,000 → 900 ms", label: "response time for route precomputation and geospatial search" },
          { value: "3 AWS accounts", label: "of production infrastructure with EKS, Helm and Terraform" },
          { value: "~87 virtual hosts", label: "on Nginx with their TLS certificate lifecycle" },
        ],
        tasks: [
          "Designed REST APIs and microservices in Node.js / NestJS and Python / FastAPI for route precomputation and geospatial search, **cutting response time from 5,000 ms to 900 ms** while integrating third-party geospatial services without degrading performance.",
          "Built agents and automations with LangChain, LangGraph and n8n integrated with internal APIs, automating operational processes that were previously manual.",
          "Developed features in Next.js, React and Angular 18 for the web app and internal indoor-map drawing tools (Mapbox GL, Leaflet), applying Clean Architecture and TDD to reduce recurring production bugs.",
          "Optimized critical queries in PostgreSQL, MongoDB and DocumentDB through indexing and query refactoring, removing backend bottlenecks.",
          "Operated production infrastructure across 3 AWS accounts (EKS, ECS, S3, CloudFront, Lambda, RDS) with Kubernetes, Helm and Terraform, and built CI/CD pipelines with GitHub Actions and Docker that eliminated manual deployments.",
          "Implemented monitoring with Elastic Stack, CloudWatch and Uptime Kuma, and managed Nginx as a reverse proxy for ~87 virtual hosts along with the TLS certificate lifecycle, resolving incidents with zero downtime for clients.",
        ],
        stack: stacks.mapvx,
      },
      {
        ...companies.exmerdev,
        role: "Backend Developer (Java · Spring Boot)",
        period: "Sep 2020 – Nov 2021",
        location: "Loja, Ecuador",
        summary: "Roles, users and security modules for a Trading and CRM system with Spring Boot and RabbitMQ.",
        metrics: [],
        tasks: [
          "Implemented the roles, users and security modules of a Trading and CRM system with Spring Boot and Spring Cloud, integrating asynchronous messaging with RabbitMQ to decouple services.",
          "Optimized MySQL, PostgreSQL and MongoDB databases and documented the team's REST endpoints, reducing integration friction.",
        ],
        stack: stacks.exmerdev,
      },
      {
        ...companies.liid,
        name: "Teaching Innovation and Research Lab",
        role: "Backend Lead",
        period: "Apr 2019 – Aug 2020",
        location: "Universidad Técnica Particular de Loja · Loja, Ecuador",
        summary: "REST API with Node.js and PostgreSQL and technical lead of the LiiD Manager platform's backend.",
        metrics: [],
        tasks: [
          "Developed a REST API with Node.js and PostgreSQL to manage attendance, people and materials, digitizing a manual process.",
          "Coordinated backend development of the LiiD Manager platform (health and education) and defined technical standards and code reviews for the team.",
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
      { id: "Backend", items: ["Node.js", "NestJS", "TypeScript", "Python", "FastAPI"] },
      { id: "Frontend", items: ["React", "Next.js", "Angular"] },
      { id: "AI", items: ["LangChain", "LangGraph", "n8n"] },
      { id: "Databases", items: ["PostgreSQL", "MongoDB"] },
      { id: "CloudDevOps", items: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions"] },
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
