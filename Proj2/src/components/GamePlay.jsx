import React from "react";
import styled from "styled-components";
import ScoreCard from "./ScoreCard";
import NumberChoose from "./NumberChoose";
import RollDice from "./RollDice";
import { useState } from "react";

function GamePlay() {
  const [score, setScore] = useState(1);
  const [rollDice, setRollDice] = useState(1);

  const randomGenerate = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const DiceRoll = () => {
    const randomNumber = randomGenerate(1, 6);

    setRollDice(randomNumber);
  };

  return (
    <Main>
      <div className="navigation">
        <ScoreCard score={score} />
        <NumberChoose />
      </div>

      <RollDice
        setScore={setScore}
        rollDice={rollDice}
        randomGenerate={randomGenerate}
        DiceRoll={DiceRoll}
      />
    </Main>
  );
}

export default GamePlay;

const Main = styled.main`
  max-width: 1200px;
  /* background-color: blue; */
  height: 100vh;
  margin: 0 auto;
  .navigation {
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
  }
`;
