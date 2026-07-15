import "./Meat.css";

type MeatProps = {
  className?: string;
};

export function Meat({ className = "" }: MeatProps) {
  return (
    <div
      className={`ingredient filling meat ${className}`.trim()}
      aria-hidden="true"
    >
      Meat
    </div>
  );
}
