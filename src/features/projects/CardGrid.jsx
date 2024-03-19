import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CardHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardSubheading = styled.p`
  font-size: 1rem;
  color: gray;
`;

const CardGrid = ({ heading, subheading, imgSrc, href }) => {
  return (
    <CardContainer>
      <CardImage src={imgSrc} alt={heading} />
      <CardHeading>{heading}</CardHeading>
      <CardSubheading>{subheading}</CardSubheading>
      <a href={href}>View More</a>
    </CardContainer>
  );
};

export default CardGrid;
