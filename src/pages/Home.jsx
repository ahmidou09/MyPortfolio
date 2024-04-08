import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import animationWord from "../assets/json/Animationw_world_3.json";
import hero from "../assets/img/hero.png";
import Character from "../features/about/Character";
import MyProjects from "../features/projects/MyProjects";
import { Link } from "react-router-dom";
import Skills from "../features/about/Skills";
import ScrollingText from "../features/about/ScrollingText";
import Footer from "../features/footer/Footer";
import TransitionAnim from "../ui/TransitionAnim";
import ShowMoreLink from "../ui/ShowMoreLink";

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
            <h4>Front-End Developer &amp; Designer</h4>
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
            <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
              <ShowMoreLink>
                <span>Show more</span>
              </ShowMoreLink>
            </Link>
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
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100vh;

  h4 {
    text-shadow: 0 0 10px var(--color-purple-1), 0 0 20px var(--color-purple-1);
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: 70vh;
  }
`;

const LocatedLeft = styled.div`
  background-color: var(--color-primary-2);
  border-radius: 0 10rem 10rem 0;
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 2rem;
  font-size: 1.8rem;
  font-weight: 300;
  margin-top: -30rem;
  height: 10rem;
  width: 30%;
  max-width: 30rem;

  svg {
    width: 8rem !important;
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const LocatedRight = styled.div`
  color: var(--color-white);
  padding: 2rem;
  font-size: 5rem;
  margin-top: -30rem;
  width: 30%;

  @media screen and (max-width: 720px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5rem 2rem;
  }
`;

const BoxHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  img {
    height: 100vh;

    @media screen and (max-width: 720px) {
      height: 60vh;
    }
  }

  @media screen and (max-width: 720px) {
    align-items: end;
    width: 100%;
    height: 100%;
  }
`;

const ScrollingTextContainer = styled.div`
  position: absolute;
  top: calc(100vh - 35rem);

  @media screen and (max-width: 720px) {
    top: calc(100vh - 70rem);
  }
`;

const SectionAbout = styled.div`
  background-color: var(--color-white);
`;

const SectionWork = styled.div`
  background-color: var(--color-primary-3);
  border-bottom: 1px solid var(--color-white);
  padding: 10rem 0;

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
`;

const paragraph =
  "Developing secure, efficient, and scalable web applications and web-based management systems by writing standard, well-documented, and efficient codes.";

export default Home;
