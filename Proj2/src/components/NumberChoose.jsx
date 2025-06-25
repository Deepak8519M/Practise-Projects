import React, { useState } from "react";
import styled from "styled-components";

function NumberChoose() {
  const array = [1, 2, 3, 4, 5, 6];

  const [numberSelected, setNumberSelected] = useState(1);
  return (
    <NumberBox>
      <p>Error Code Written Later</p>
      <div className="boxflex">
        {array.map((value, key) => (
          <Box
            isSelected={numberSelected === value}
            onClick={() => {
              setNumberSelected(value);
            }}
            key={key}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberBox>
  );
}

export default NumberChoose;
const NumberBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 24px;
  cursor: pointer;
  gap: 10px;

  padding: 14px;

  .boxflex {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  p {
    font-size: 20px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 30px; */
  width: 80px;
  height: 80px;
  font-weight: 500;
  border: 1px solid black;
  font-size: 24px;

  /* background-color: ${(props) => (props.isSelected ? "black" : "white")}; */
  background-color: ${(props) => (props.isSelected ? "black" : "transparent")};
  color: ${(props) => (props.isSelected ? "white" : "trasparent")};
`;
