// Renders **text** as <strong>; everything else is plain text.
export function RichText({ text }) {
  return text
    .split(/\*\*(.+?)\*\*/g)
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
}
