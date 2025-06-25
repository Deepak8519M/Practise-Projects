import React from "react";
import styled from "styled-components";
import ScoreCard from "./ScoreCard";
import NumberChoose from "./NumberChoose";

function GamePlay() {
  return (
    <Main>
      <div className="navigation">
        <ScoreCard />
        <NumberChoose />
      </div>
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
