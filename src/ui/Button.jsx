import React from "react";
import HoverButton from "./HoverButton";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-teal-1);
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
`;

function MainButton({ children }) {
  return (
    <HoverButton>
      <Button>{children}</Button>
    </HoverButton>
  );
}

export default MainButton;
