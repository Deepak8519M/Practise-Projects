import React from "react";

import styled from "styled-components";

function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/imgs/dices.png" alt="logo" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1200px;
  /* background-color: blue; */
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  h1 {
    font-size: 100px;
    white-space: nowrap;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 14px 10px;
  color: white;
  background-color: black;
  border: none;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all ease-in 0.4s;
  &:hover {
    transition: all ease-in 0.3s;
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
`;
