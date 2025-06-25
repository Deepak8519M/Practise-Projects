import React, { useState } from "react";
import { Button, OverlayButton } from "./Button";
import styled from "styled-components";

function RollDice({ setScore, rollDice, randomGenerate, DiceRoll }) {
  return (
    <DiceFlex>
      <div>
        <img onClick={DiceRoll} src={`/imgs/dice_${rollDice}.png `} alt="" />
      </div>
      <h3>Click On Dice to Roll</h3>
      <div className="btns">
        <OverlayButton onClick={() => setScore(0)}>Reset</OverlayButton>
        <Button>Show Rules</Button>
        <Button>Back to Main</Button>
      </div>
    </DiceFlex>
  );
}

export default RollDice;

const DiceFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  cursor: pointer;

  margin: 0 auto;
  width: 450px;
  margin-top: 70px;

  .btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
