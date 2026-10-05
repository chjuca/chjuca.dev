// Editor-style window used to show small, syntax-colored snippets.
export function CodeCard({ file, children, className = "" }) {
  return (
    <div className={`code-card ${className}`}>
      <div className="code-card__bar">
        <span className="code-card__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="code-card__file">{file}</span>
      </div>
      <pre className="code-card__body">
        <code>{children}</code>
      </pre>
    </div>
  );
}
