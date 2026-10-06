import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

export function BackLink({ to, children }) {
  return (
    <Link className="back-link" to={to} viewTransition>
      <FiArrowLeft aria-hidden="true" />
      {children}
    </Link>
  );
}
