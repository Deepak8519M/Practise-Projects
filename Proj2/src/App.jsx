import React, { useState } from "react";

import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [startGame, setStartGame] = useState(false);

  const toggle = () => {
    setStartGame((prev) => !prev);
  };

  return (
    <div>
      {startGame ? <GamePlay toggle={toggle} /> : <StartGame toggle={toggle} />}
    </div>
  );
}

export default App;
