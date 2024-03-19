import React, { useState } from "react";
import transition from "../hooks/animation";
import styled from "styled-components";
import MyProjects from "../features/projects/MyProjects";
import Footer from "../features/footer/Footer";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;

  h1 {
    font-size: 8rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--color-primary-3);
  border: 2px solid var(--color-primary-3);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--color-primary-3);
    color: white;
  }
`;

function Projects() {
  const [displayMode, setDisplayMode] = useState("list");

  const handleListButtonClick = () => {
    setDisplayMode("list");
  };

  const handleGridButtonClick = () => {
    setDisplayMode("grid");
  };

  return (
    <Container>
      <h1>My Projects</h1>

      <ButtonContainer>
        <Button onClick={handleListButtonClick}>List View</Button>
        <Button onClick={handleGridButtonClick}>Grid View</Button>
      </ButtonContainer>

      <MyProjects
        style={{ marginTop: "5rem", backgroundColor: "transparent" }}
        color="var(--color-primary-3)"
        displayMode={displayMode}
      />
      <Footer />
    </Container>
  );
}

export default transition(Projects);
