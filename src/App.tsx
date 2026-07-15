import { useState } from "react";
import { Burger } from "./components/Burger/Burger";
import { FillingControls } from "./components/FillingControls/FillingControls";
import "./App.css";

type Fillings = {
  tomato: boolean;
  meat: boolean;
  lettuce: boolean;
};

export function App() {
  const [fillings, setFillings] = useState<Fillings>({
    tomato: true,
    meat: true,
    lettuce: true,
  });

  return (
    <main className="app-shell">
      <section className="app-card">
        <div className="app-copy">
          <h1 className="app-eyebrow">ACA Burger</h1>
          <h2>Build your own burger</h2>
          <p>Toggle fillings to assemble the burger layers.</p>
        </div>

        <Burger fillings={fillings} />

        <FillingControls fillings={fillings} setFillings={setFillings} />
      </section>
    </main>
  );
}

export default App;
