import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";
import ComponentStatistics from "../ui/ComponentStatistics";

const Container = styled.div``;
function About() {
  return (
    <Container>
      <h1>I love being a developer !</h1>
      <ComponentStatistics />
    </Container>
  );
}

export default transition(About);
