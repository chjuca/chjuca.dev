import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiCloudflareworkers,
  SiDocker,
  SiElasticstack,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiHelm,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiLeaflet,
  SiLighthouse,
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
  SiSpring,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
  SiUptimekuma,
  SiVite,
  SiVitest,
} from "react-icons/si";
import { TbCloudCog, TbCode, TbDatabase, TbTopologyStar3 } from "react-icons/tb";

const TEXT = "var(--text)";
const LAVENDER = "var(--lavender)";

// Logo and brand color per technology used in content.js. Only these icons
// end up in the bundle; add an entry here when adding a technology.
const TECH = {
  "Node.js": [<SiNodedotjs />, "#5fa04e"],
  NestJS: [<SiNestjs />, "#e0234e"],
  TypeScript: [<SiTypescript />, "#3178c6"],
  Python: [<SiPython />, "#4b8bbe"],
  FastAPI: [<SiFastapi />, "#05998b"],
  Express: [<SiExpress />, TEXT],
  Java: [<FaJava />, "#f89820"],
  "Spring Boot": [<SiSpringboot />, "#6db33f"],
  "Spring Cloud": [<SiSpring />, "#6db33f"],
  RabbitMQ: [<SiRabbitmq />, "#ff6600"],
  React: [<SiReact />, "#61dafb"],
  "Next.js": [<SiNextdotjs />, TEXT],
  Angular: [<SiAngular />, "#dd0031"],
  "Mapbox GL": [<SiMapbox />, "#4264fb"],
  Leaflet: [<SiLeaflet />, "#5fbf3f"],
  LangChain: [<SiLangchain />, "#3fb4a3"],
  LangGraph: [<SiLanggraph />, "#3fb4a3"],
  n8n: [<TbTopologyStar3 />, "#ea4b71"],
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
  "Cloudflare Workers": [<SiCloudflareworkers />, "#f38020"],
  Lighthouse: [<SiLighthouse />, "#f44b21"],
  Vite: [<SiVite />, "#8f84ff"],
  Vitest: [<SiVitest />, "#7fb61f"],
  Nginx: [<SiNginx />, "#009639"],
  "Elastic Stack": [<SiElasticstack />, "#00bfb3"],
  CloudWatch: [<TbCloudCog />, "#ff4f8b"],
  "Uptime Kuma": [<SiUptimekuma />, "#5cdd8b"],
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
