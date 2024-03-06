import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
function Contact() {
  return <Container>Contact</Container>;
}

export default transition(Contact);
