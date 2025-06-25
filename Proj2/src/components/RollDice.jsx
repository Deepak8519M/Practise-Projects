import React, { useState } from "react";
import { Button, OverlayButton } from "./Button";
import styled from "styled-components";

function RollDice({
  setScore,
  rollDice,
  randomGenerate,
  DiceRoll,
  toggle,
  msg,
  setMsg,
}) {
  return (
    <DiceFlex>
      <div>
        <img onClick={DiceRoll} src={`/imgs/dice_${rollDice}.png `} alt="" />
      </div>
      <h3>Click On Dice to Roll</h3>
      <div className="btns">
        <OverlayButton onClick={() => setScore(0)}>Reset</OverlayButton>
        <Button
          onClick={() => {
            setMsg((prev) => !prev);
          }}
        >
          {msg ? "Hide Rules" : "Show Rules"}
        </Button>
        <Button onClick={toggle}>Back to Main</Button>
      </div>

      {msg && (
        <div className="message">
          <h2>How to Play Dice Game</h2>
          <div className="pflex">
            <p>1. Select any number.</p>
            <p>2. Click on the dice image.</p>
            <p>
              3. If the selected number matches the dice number, you will earn
              points equal to the dice value.
            </p>
            <p>
              4. If the numbers don't match, the dice value will be subtracted
              from your score.
            </p>
          </div>
        </div>
      )}
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
  .message {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 10px;
    position: absolute;
    top: 240px;
    right: 40px;
    width: 450px;
    background: #f6e1e1;
    padding: 20px;
    border-radius: 10px;
  }
  .pflex {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;
