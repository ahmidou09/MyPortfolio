import React from "react";
import styled from "styled-components";
import linksData from "../../assets/json/data/links.json";
import CardList from "./CardList";
import CardGrid from "./CardGrid";

const StyledSection = styled.section`
  background-color: var(--color-primary-3);
  padding: 3rem;
`;

const MaxWidthContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 4rem;
`;

const MyProjects = ({ style, element, color, displayMode = "list" }) => {
  const numberOfLinks =
    element && element >= 0 && element <= linksData.length
      ? element
      : linksData.length;

  return (
    <StyledSection style={style}>
      <MaxWidthContainer>
        {displayMode === "list" ? (
          <ListContainer>
            {linksData.slice(0, numberOfLinks).map((link, index) => (
              <CardList key={link.id} projectData={link} color={color} />
            ))}
          </ListContainer>
        ) : (
          <GridContainer>
            {linksData.slice(0, numberOfLinks).map((link, index) => (
              <CardGrid key={link.id} projectData={link} color={color} />
            ))}
          </GridContainer>
        )}
      </MaxWidthContainer>
    </StyledSection>
  );
};

export default MyProjects;
