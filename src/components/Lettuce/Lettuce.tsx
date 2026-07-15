import "./Lettuce.css";

type LettuceProps = {
  className?: string;
};

export function Lettuce({ className = "" }: LettuceProps) {
  return (
    <div
      className={`ingredient filling lettuce ${className}`.trim()}
      aria-hidden="true"
    >
      Lettuce
    </div>
  );
}
