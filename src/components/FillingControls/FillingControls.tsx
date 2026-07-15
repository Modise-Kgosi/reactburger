import type { Dispatch, SetStateAction } from "react";
import "./FillingControls.css";

type Fillings = {
  tomato: boolean;
  meat: boolean;
  lettuce: boolean;
};

type FillingControlsProps = {
  fillings: Fillings;
  setFillings: Dispatch<SetStateAction<Fillings>>;
};

export function FillingControls({
  fillings,
  setFillings,
}: FillingControlsProps) {
  const toggle = (key: keyof Fillings) => {
    setFillings((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <fieldset className="controls">
      <legend>Fillings</legend>

      <label>
        <input
          type="checkbox"
          checked={Boolean(fillings.tomato)}
          onChange={() => toggle("tomato")}
        />
        Tomato
      </label>

      <label>
        <input
          type="checkbox"
          checked={Boolean(fillings.meat)}
          onChange={() => toggle("meat")}
        />
        Meat
      </label>

      <label>
        <input
          type="checkbox"
          checked={Boolean(fillings.lettuce)}
          onChange={() => toggle("lettuce")}
        />
        Lettuce
      </label>
    </fieldset>
  );
}
