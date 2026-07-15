import { BaseBread } from "../BaseBread/BaseBread";
import { Lettuce } from "../Lettuce/Lettuce";
import { Meat } from "../Meat/Meat";
import { Tomato } from "../Tomato/Tomato";
import { TopBread } from "../TopBread/TopBread";
import "./Burger.css";

type Fillings = {
  tomato?: boolean;
  meat?: boolean;
  lettuce?: boolean;
};

type BurgerProps = {
  fillings: Fillings;
};

export function Burger({ fillings }: BurgerProps) {
  const layers = [
    fillings.tomato ? <Tomato key="tomato" /> : null,
    fillings.meat ? <Meat key="meat" /> : null,
    fillings.lettuce ? <Lettuce key="lettuce" /> : null,
  ].filter(Boolean);

  return (
    <section className="burger" aria-label="Burger preview">
      <TopBread />
      <div className="burger-stack">{layers}</div>
      <BaseBread />
    </section>
  );
}
