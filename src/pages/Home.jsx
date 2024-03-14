import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationWord from "../assets/json/Animationw_world_1.json";
import hero from "../assets/img/hero.png";
import transition from "../hooks/animation";
import Character from "../ui/Character";
import HoverImageLinks from "../features/projects/HoverImageLinks";
import { Link } from "react-router-dom";
import MainButton from "../ui/Button";
import Skills from "../ui/MySkills";
import ScrollingText from "../ui/ScrollingText";

function Home() {
  const paragraph =
    "Developing secure, efficient, and scalable web applications and web-based management systems by writing standard, well-documented, and efficient codes.";

  return (
    <HomeContainer>
      <Header>
        <LocatedLeft>
          <span>Located in the morroco</span>
          <span>
            <Lottie animationData={animationWord} />
          </span>
        </LocatedLeft>
        <BoxHero>
          <img src={hero} alt="hero" />
        </BoxHero>
        <LocatedRight>
          <h4>
            <span>Hi, I'm</span> Front-End Developer &amp; Designer
          </h4>
        </LocatedRight>
        <ScrollingTextContainer>
          <ScrollingText name={"El Mehdi Ahmidou -"} />
        </ScrollingTextContainer>
      </Header>
      <SectionAbout>
        <Character paragraph={paragraph} />
        <Skills />
      </SectionAbout>
      <SectionWork>
        <HoverImageLinks element={3} />
        <ShowMore>
          <MainButton>
            <Link to="/projects">Show more</Link>
          </MainButton>
        </ShowMore>
      </SectionWork>
    </HomeContainer>
  );
}

const HomeContainer = styled.div``;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const LocatedLeft = styled.div`
  background-color: var(--color-primary-3);
  border-radius: 0 10rem 10rem 0;
  color: var(--color-white);
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: -30rem;

  svg {
    width: 7rem !important;
  }
`;

const LocatedRight = styled.div`
  color: var(--color-white);
  padding: 2rem;
  font-size: 5rem;
  margin-top: -30rem;
`;

const BoxHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollingTextContainer = styled.div`
  position: absolute;
  top: calc(100vh - 35rem);
`;

const SectionAbout = styled.div`
  background-color: var(--color-white);
`;

const SectionWork = styled.div`
  background-color: var(--color-primary-3);
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  a {
    color: var(--color-white);
    font-size: 3rem;
    font-weight: 500;
  }
`;

export default transition(Home);
