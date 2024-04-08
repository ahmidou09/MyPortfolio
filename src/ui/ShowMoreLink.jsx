import React from "react";
import styled from "styled-components";

const Button = styled.button`
  letter-spacing: 1px;
  background: none;
  color: var(--color-white);
  position: relative;
  outline: none;
  border: none;
  height: 5rem;
  width: 19rem;
  font-size: 1.4rem;
  z-index: 2;
  transition: 0.01s 0.23s ease-out all;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: var(--color-purple-1);
    z-index: -1;
    transition: 0.3s ease-in all;
  }

  &:after {
    content: "";
    position: absolute;
    left: -5%;
    top: 0;
    height: 100%;
    width: 5%;
    background: var(--color-white);
    z-index: -1;
    transition: 0.4s 0.02s ease-in all;
  }

  &:hover {
    cursor: pointer;
    color: transparent;

    &:before {
      left: 100%;
      width: 25%;
    }

    &:after {
      left: 100%;
      width: 70%;
    }

    .icon-right.after:after {
      left: -8rem;
      color: var(--color-white);
      transition: 0.2s 0.2s ease all;
    }

    .icon-right.after:before {
      left: -10.4rem;
      top: 1.4rem;
      opacity: 0.2;
      color: var(--color-white);
      transition: 0.2s ease-in all;
    }
  }
`;

const IconRight = styled.span`
  position: absolute;
  top: 0;
  right: 0;

  &:after {
    content: "→";
    font-size: 3rem;
    display: inline-block;
    position: relative;
    top: 2.6rem;
    transform: translate3D(0, -50%, 0);
  }

  &.after:after {
    left: -25rem;
    color: var(--color-white);
    transition: 0.15s 0.25s ease left, 0.5s 0.05s ease color;
  }

  &.after:before {
    content: "Show more";
    position: absolute;
    left: -23rem;
    top: 3rem;
    opacity: 0;
    transition: 0.2s ease-in all;
  }
`;

const ShowMoreLink = ({ children }) => {
  return (
    <Button>
      {children}
      <IconRight className="icon-right"></IconRight>
      <IconRight className="icon-right after"></IconRight>
    </Button>
  );
};

export default ShowMoreLink;
