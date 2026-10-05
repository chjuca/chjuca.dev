// Renders text as a JSX-like tag: <Text/>. The brackets are decorative.
export function Bracketed({ children }) {
  return (
    <>
      <span className="bracket" aria-hidden="true">
        &lt;
      </span>
      {children}
      <span className="bracket" aria-hidden="true">
        /&gt;
      </span>
    </>
  );
}
