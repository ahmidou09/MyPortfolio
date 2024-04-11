import React from "react";
import Magnetic from "./Magnetic";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

function MainButton({ children }) {
  return (
    <Magnetic>
      <Button>{children}</Button>
    </Magnetic>
  );
}

export default MainButton;
