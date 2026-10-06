import { Socials } from "./Socials";

// Desktop-only rail with the social links pinned to the left edge.
export function SocialRail() {
  return (
    <div className="rail">
      <Socials className="rail__socials" />
    </div>
  );
}
