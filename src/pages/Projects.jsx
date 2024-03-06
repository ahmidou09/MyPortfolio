import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function Projects() {
  return <Container>Projects</Container>;
}

export default transition(Projects);
