import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { profile } from "../data/content";
import { ExternalLink } from "./ExternalLink";

export function Socials({ className }) {
  return (
    <ul className={className}>
      <li>
        <ExternalLink href={profile.linkedin} aria-label="LinkedIn" title="LinkedIn">
          <FaLinkedin aria-hidden="true" />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href={profile.github} aria-label="GitHub" title="GitHub">
          <FaGithub aria-hidden="true" />
        </ExternalLink>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label={profile.email} title={profile.email}>
          <FiMail aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
