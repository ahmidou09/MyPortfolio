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
import HoverButton from "../ui/HoverButton";
import SocialLinks from "../features/footer/SocialLinks";

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
        <h3>My Work</h3>
        <HoverImageLinks element={3} />
        <ShowMore>
          <MainButton>
            <Link to="/projects">Show more</Link>
          </MainButton>
        </ShowMore>
      </SectionWork>
      <SectionContact>
        <Wrapper>
          <h2>Let’s work together</h2>
          <Line />
          <BoxContact>
            <Enfo>
              <span>ahmidouem@gmail.com</span>
            </Enfo>
            <HoverButton>
              <GetTouch>
                <Link to="/contact">Get in touch</Link>
              </GetTouch>
            </HoverButton>
            <Enfo>
              <span>+212673235339</span>
            </Enfo>
          </BoxContact>
          <Line />
          <SocialLinks />
        </Wrapper>
      </SectionContact>
    </HomeContainer>
  );
}

const BoxContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 1rem;
`;

const Enfo = styled.div`
  font-size: 4.5rem;
`;

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

  h3 {
    color: var(--color-white);
    text-align: center;
    padding: 3rem;
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
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

const SectionContact = styled.section`
  background-color: var(--color-balck);
  height: 100vh;
  color: var(--color-white);
`;

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;

  h2 {
    font-size: 12rem;
    font-weight: 500;
    margin-bottom: 6rem;
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0.2rem;
  font-size: 4rem;
  background-color: var(--color-white);
  border: none;
  border-radius: 5rem;
  margin-bottom: 4rem;
`;

const GetTouch = styled.button`
  background-color: transparent;
  color: var(--color-white);
  font-size: 3rem;
  font-weight: 500;
  border: 0.2rem solid var(--color-white);
  border-radius: 5rem;
  padding: 1.5rem 3rem;
`;

export default transition(Home);
