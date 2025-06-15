import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import HeroTop from "./Components/HeroTop/HeroTop";
import HeroBtm from "./Components/HeroBtm/HeroBtm";

function App() {
  return (
    <div>
      <Navigation />
      <HeroTop />
      <HeroBtm />
    </div>
  );
}

export default App;
