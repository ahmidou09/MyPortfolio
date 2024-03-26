import React, { useState } from "react";
import styled from "styled-components";
import MyProjects from "../features/projects/MyProjects";
import Footer from "../features/footer/Footer";
import { useSearchParams } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import HoverButton from "../ui/HoverButton";
import TransitionAnim from "../ui/TransitionAnim";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 0 0;

  h1 {
    font-size: 8rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: end;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-primary-3);
    color: white;
  }
`;

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view" || "list");
  const [displayMode, setDisplayMode] = useState(view);

  const handleListButtonClick = () => {
    setDisplayMode("list");
    searchParams.set("view", "list");
    setSearchParams({ view: "list" });
  };

  const handleGridButtonClick = () => {
    setDisplayMode("grid");
    searchParams.set("view", "grid");
    setSearchParams({ view: "grid" });
  };

  return (
    <TransitionAnim>
      <Container>
        <h1>My Projects</h1>

        <ButtonContainer>
          <HoverButton>
            <Button onClick={handleListButtonClick}>
              <CiBoxList /> List View
            </Button>
          </HoverButton>
          <HoverButton>
            <Button onClick={handleGridButtonClick}>
              <IoGridOutline /> Grid View
            </Button>
          </HoverButton>
        </ButtonContainer>

        <MyProjects
          style={{ marginTop: "5rem", backgroundColor: "transparent" }}
          color="var(--color-primary-3)"
          displayMode={displayMode}
        />
        <Footer />
      </Container>
    </TransitionAnim>
  );
}

export default Projects;
