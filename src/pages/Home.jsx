import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationWord from "../assets/json/Animationw_world_3.json";
import hero from "../assets/img/hero.png";
import Character from "../ui/Character";
import MyProjects from "../features/projects/MyProjects";
import { Link } from "react-router-dom";
import MainButton from "../ui/Button";
import Skills from "../ui/MySkills";
import ScrollingText from "../ui/ScrollingText";
import Footer from "../features/footer/Footer";
import TransitionAnim from "../ui/TransitionAnim";

function Home() {
  return (
    <TransitionAnim>
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
          <MyProjects element={6} displayMode="grid" />
          <ShowMore>
            <MainButton>
              <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                <span>Show more</span>
              </Link>
            </MainButton>
          </ShowMore>
        </SectionWork>
        <Footer />
      </HomeContainer>
    </TransitionAnim>
  );
}

const HomeContainer = styled.div`
  position: static;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
`;

const LocatedLeft = styled.div`
  background-color: var(--color-grey-1);
  border-radius: 0 10rem 10rem 0;
  color: var(--color-white);
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 2rem;
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: -30rem;
  height: 10rem;
  width: 40rem;

  svg {
    width: 8rem !important;
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

  img {
    height: 100vh;
  }
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
    font-size: 2rem;
    font-weight: 500;
  }

  span {
    margin: 0 1rem;
    background-color: var(--color-white);
    color: var(--color-primary-3);
    padding: 0.5rem 1.5rem;
    border-radius: 100rem;
  }
`;

const paragraph =
  "Developing secure, efficient, and scalable web applications and web-based management systems by writing standard, well-documented, and efficient codes.";

export default Home;
