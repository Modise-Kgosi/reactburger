import "./TopBread.css";

type TopBreadProps = {
  className?: string;
};

export function TopBread({ className = "" }: TopBreadProps) {
  return (
    <div
      className={`ingredient top-bread ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
