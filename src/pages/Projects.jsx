import React from "react";
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
function Projects() {
  return (
    <Container>
      <h1>My Projects</h1>

      <MyProjects
        style={{ marginTop: "5rem", backgroundColor: "transparent" }}
        color="var(--color-primary-3)"
      />
      <Footer />
    </Container>
  );
}

export default transition(Projects);
