import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s, box-shadow 0.3s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  transform-origin: center center;

  &:hover {
    box-shadow: 0 5px 20px 5px #00000044;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  pointer-events: none;
`;

const CardHeading = styled.h2`
  font-size: 4.2rem;
  margin-bottom: 0.5rem;
  padding: 2rem;
  color: var(--color-white);
`;

const CardSubheading = styled.p`
  font-size: 1.6rem;
  color: var(--color-white);
  padding: 0 2rem 2rem;
`;

const CardGrid = ({ heading, subheading, imgSrc, href }) => {
  return (
    <Tilt options={defaultOptions}>
      <Link to={href}>
        <CardContainer>
          <CardImage src={imgSrc} alt={heading} />
          <CardHeading>{heading}</CardHeading>
          <CardSubheading>{subheading}</CardSubheading>
        </CardContainer>
      </Link>
    </Tilt>
  );
};

export default CardGrid;
