import React from "react";
import styled from "styled-components";

function ScoreCard() {
  return (
    <TotalScore>
      <h1>0</h1>
      <p>Total Score</p>
    </TotalScore>
  );
}

export default ScoreCard;

const TotalScore = styled.div`
  display: flex;
  flex-direction: column;

  width: 170px;

  display: flex;
  align-items: center;
  height: 100px;

  h1 {
    font-size: 90px;
  }
  p {
    font-size: 24px;
    margin-top: -20px;
    font-weight: 500;
  }
`;
