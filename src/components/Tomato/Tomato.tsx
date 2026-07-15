import "./Tomato.css";

type TomatoProps = {
  className?: string;
};

export function Tomato({ className = "" }: TomatoProps) {
  return (
    <div
      className={`ingredient filling tomato ${className}`.trim()}
      aria-hidden="true"
    >
      Tomato
    </div>
  );
}
