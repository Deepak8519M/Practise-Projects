import React, { use } from "react";
import styled from "styled-components";
import ScoreCard from "./ScoreCard";
import NumberChoose from "./NumberChoose";
import RollDice from "./RollDice";
import { useState } from "react";

function GamePlay({ toggle }) {
  const [score, setScore] = useState(0);
  const [rollDice, setRollDice] = useState(1);
  const [numberSelected, setNumberSelected] = useState(null);
  const [error, setError] = useState("");

  const randomGenerate = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const DiceRoll = () => {
    if (!numberSelected) {
      setError("error Please select Number");
      return;
    }

    const randomNumber = randomGenerate(1, 6);

    setRollDice(randomNumber);

    if (randomNumber === numberSelected) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - randomNumber);
    }

    setNumberSelected(null);
  };

  return (
    <Main>
      <div className="navigation">
        <ScoreCard score={score} />
        <NumberChoose
          numberSelected={numberSelected}
          setNumberSelected={setNumberSelected}
          error={error}
          setError={setError}
        />
      </div>

      <RollDice
        setScore={setScore}
        rollDice={rollDice}
        randomGenerate={randomGenerate}
        DiceRoll={DiceRoll}
        toggle={toggle}
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
