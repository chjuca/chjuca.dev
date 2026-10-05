import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiDocker,
  SiElasticstack,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiHelm,
  SiJest,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiLeaflet,
  SiLinux,
  SiMapbox,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
  SiUptimekuma,
} from "react-icons/si";
import {
  TbApi,
  TbBrain,
  TbBrandAzure,
  TbCloudCog,
  TbCode,
  TbDatabase,
  TbHierarchy3,
  TbLayersSubtract,
  TbTestPipe,
  TbTopologyStar3,
  TbUsersGroup,
} from "react-icons/tb";

const TEXT = "var(--text)";
const LAVENDER = "var(--lavender)";

// Logo and brand color per technology. Names cover both languages.
const TECH = {
  "Node.js": [<SiNodedotjs />, "#5fa04e"],
  NestJS: [<SiNestjs />, "#e0234e"],
  Express: [<SiExpress />, TEXT],
  TypeScript: [<SiTypescript />, "#3178c6"],
  Python: [<SiPython />, "#4b8bbe"],
  FastAPI: [<SiFastapi />, "#05998b"],
  Java: [<FaJava />, "#f89820"],
  "Spring Boot": [<SiSpringboot />, "#6db33f"],
  Microservicios: [<TbHierarchy3 />, LAVENDER],
  Microservices: [<TbHierarchy3 />, LAVENDER],
  REST: [<TbApi />, LAVENDER],
  RabbitMQ: [<SiRabbitmq />, "#ff6600"],
  "Next.js": [<SiNextdotjs />, TEXT],
  React: [<SiReact />, "#61dafb"],
  Angular: [<SiAngular />, "#dd0031"],
  "Mapbox GL": [<SiMapbox />, "#4264fb"],
  Leaflet: [<SiLeaflet />, "#5fbf3f"],
  LangChain: [<SiLangchain />, "#3fb4a3"],
  LangGraph: [<SiLanggraph />, "#3fb4a3"],
  n8n: [<TbTopologyStar3 />, "#ea4b71"],
  "Integración de LLMs": [<TbBrain />, LAVENDER],
  "LLM integration": [<TbBrain />, LAVENDER],
  PostgreSQL: [<SiPostgresql />, "#4f7ee8"],
  MySQL: [<SiMysql />, "#5d9cd6"],
  MongoDB: [<SiMongodb />, "#47a248"],
  DocumentDB: [<TbDatabase />, "#527fff"],
  Firebase: [<SiFirebase />, "#ffca28"],
  AWS: [<FaAws />, "#ff9900"],
  Kubernetes: [<SiKubernetes />, "#326ce5"],
  Helm: [<SiHelm />, "#8a94ff"],
  Terraform: [<SiTerraform />, "#844fba"],
  Docker: [<SiDocker />, "#2496ed"],
  "GitHub Actions": [<SiGithubactions />, "#2088ff"],
  Azure: [<TbBrandAzure />, "#0089d6"],
  GCP: [<SiGooglecloud />, "#4285f4"],
  Nginx: [<SiNginx />, "#009639"],
  Linux: [<SiLinux />, "#fcc624"],
  "Elastic Stack": [<SiElasticstack />, "#00bfb3"],
  CloudWatch: [<TbCloudCog />, "#ff4f8b"],
  "Uptime Kuma": [<SiUptimekuma />, "#5cdd8b"],
  "Clean Architecture": [<TbLayersSubtract />, LAVENDER],
  TDD: [<TbTestPipe />, "#e0475a"],
  Jest: [<SiJest />, "#e0475a"],
  Git: [<SiGit />, "#f05032"],
  Scrum: [<TbUsersGroup />, LAVENDER],
};

// variant "tile": square card with logo and label; "chip": compact inline pill.
export function TechBadge({ name, variant = "tile" }) {
  const [icon, color] = TECH[name] ?? [<TbCode />, LAVENDER];
  return (
    <span className={`tech tech--${variant}`} style={{ "--brand": color }}>
      <span className="tech__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="tech__name">{name}</span>
    </span>
  );
}
