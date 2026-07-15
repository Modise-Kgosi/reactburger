import "./BaseBread.css";

type BaseBreadProps = {
  className?: string;
};

export function BaseBread({ className = "" }: BaseBreadProps) {
  return (
    <div
      className={`ingredient base-bread ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
