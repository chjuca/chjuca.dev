import { Bracketed } from "./Bracketed";
import { ExternalLink } from "./ExternalLink";

const REPEAT = Array.from({ length: 6 }, (_, index) => index);

// Tilted band with a looping label; the whole band links to GitHub.
export function Marquee({ label, href }) {
  return (
    <div className="marquee">
      <ExternalLink className="marquee__band" href={href} aria-label={label}>
        <span className="marquee__track" aria-hidden="true">
          {[0, 1].map((group) => (
            <span className="marquee__group" key={group}>
              {REPEAT.map((index) => (
                <span className="marquee__item" key={index}>
                  <Bracketed>{label}</Bracketed>
                </span>
              ))}
            </span>
          ))}
        </span>
      </ExternalLink>
    </div>
  );
}
