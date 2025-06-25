import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  padding: 14px 10px;
  color: white;
  background-color: black;
  border: none;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all ease-in 0.4s;
  border-radius: 3px;
  &:hover {
    transition: all ease-in 0.3s;
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
`;

export const OverlayButton = styled(Button)`
  background-color: transparent;
  border: 1px solid black;
  transition: all ease-in 0.4s;
  cursor: pointer;
  color: black;
  &:hover {
    transition: all ease-in 0.3s;
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
