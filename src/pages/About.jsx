import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function About() {
  return <Container>About</Container>;
}

export default transition(About);
