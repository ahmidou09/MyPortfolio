import React, { useState } from "react";
import styled from "styled-components";
import MyProjects from "../features/projects/MyProjects";
import Footer from "../features/footer/Footer";
import { useSearchParams } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import TransitionAnim from "../ui/TransitionAnim";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 0 0;
  h1 {
    font-size: 8rem;
    color: var(--color-white);
    @media screen and (max-width: 720px) {
      font-size: 6rem;
      text-align: center;
      margin-bottom: 4rem;
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: end;
  @media screen and (max-width: 720px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  margin: 0 1rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover {
    background-color: var(--color-primary-3);
    color: var(--color-white);
  }
`;

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get("view") || "list";
  const [displayMode, setDisplayMode] = useState(view);

  const toggleDisplayMode = () => {
    const newMode = displayMode === "list" ? "grid" : "list";
    setDisplayMode(newMode);
    searchParams.set("view", newMode);
    setSearchParams(searchParams);
  };

  return (
    <TransitionAnim>
      <Container>
        <h1>My Projects</h1>

        <ButtonContainer>
          <Button onClick={toggleDisplayMode}>
            {displayMode === "list" ? <IoGridOutline /> : <CiBoxList />}
            {displayMode === "list" ? "Grid View" : "List View"}
          </Button>
        </ButtonContainer>

        <MyProjects
          style={{ marginTop: "5rem", backgroundColor: "transparent" }}
          displayMode={displayMode}
        />
        <Footer />
      </Container>
    </TransitionAnim>
  );
}

export default Projects;
