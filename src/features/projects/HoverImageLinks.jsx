import React from "react";
import styled from "styled-components";
import linksData from "../../assets/json/data/links.json";
import Link from "./Link";

const StyledSection = styled.section`
  background-color: var(--color-primary-3);
  padding: 3rem;
`;

const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
`;

const HoverImageLinks = ({ element }) => {
  // Get the number of links to display based on the provided element prop
  const numberOfLinks =
    element && element >= 0 && element <= linksData.length
      ? element
      : linksData.length;

  return (
    <StyledSection>
      <MaxWidthContainer>
        {linksData.slice(0, numberOfLinks).map((link, index) => (
          <Link
            key={index}
            heading={link.heading}
            subheading={link.subheading}
            imgSrc={link.imgSrc + index}
            href={link.href}
          />
        ))}
      </MaxWidthContainer>
    </StyledSection>
  );
};

export default HoverImageLinks;
