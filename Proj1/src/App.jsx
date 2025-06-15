import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import HeroTop from "./Components/HeroTop/HeroTop";
import HeroBtm from "./Components/HeroBtm/HeroBtm";

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <HeroTop />
        <HeroBtm />
      </main>
    </div>
  );
}

export default App;
