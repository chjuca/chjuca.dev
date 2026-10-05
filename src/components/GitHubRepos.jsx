import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { profile, repositories } from "../data/content";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function GitHubRepos({ t }) {
  return (
    <Section id="github" title={t.ui.nav.github}>
      <ul className="repos">
        {repositories.map((repo) => (
          <li className="card repo" key={repo.name}>
            <h3 className="repo__name">
              <ExternalLink href={repo.url}>
                <FaGithub aria-hidden="true" />
                {repo.name}
              </ExternalLink>
            </h3>
            <p className="repo__description">{repo.description}</p>
            <p className="repo__stars">
              <FiStar aria-hidden="true" />
              <span aria-hidden="true">{repo.stars}</span>
              <span className="visually-hidden">{t.ui.stars(repo.stars)}</span>
            </p>
          </li>
        ))}
      </ul>
      <ExternalLink className="text-link github__more" href={profile.github}>
        {t.ui.viewProfile}
        <FiArrowUpRight aria-hidden="true" />
      </ExternalLink>
    </Section>
  );
}
