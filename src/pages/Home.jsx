import React from "react";
import styled from "styled-components";
import hero from "../assets/img/hero.png";
import Character from "../features/about/Character";
import MyProjects from "../features/projects/MyProjects";
import { Link } from "react-router-dom";
import Skills from "../features/about/Skills";
import ScrollingText from "../features/about/ScrollingText";
import Footer from "../features/footer/Footer";
import TransitionAnim from "../ui/TransitionAnim";
import ShowMoreLink from "../ui/ShowMoreLink";
import SlidingImages from "../ui/SlidingImages";

function Home() {
  return (
    <TransitionAnim>
      <div>
        <Header>
          <LocatedRight>
            <span>hello</span>
            <h1>I'm mehdi</h1>
            <h3>Front-End Software Developer</h3>
            <p>I Devlop Attractive, user Interface and web applications</p>
          </LocatedRight>
          <BoxHero>
            <img src={hero} alt="hero" />
          </BoxHero>
          <ScrollingTextContainer>
            <ScrollingText name={"El Mehdi Ahmidou -"} />
          </ScrollingTextContainer>
        </Header>
        <SectionAbout>
          <Character paragraph={paragraph} />
          <Skills />
        </SectionAbout>
        <SectionWork>
          <h3>My Recent Work</h3>
          <MyProjects element={6} displayMode="grid" />
          <ShowMore>
            <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
              <ShowMoreLink>
                <span>Show more</span>
              </ShowMoreLink>
            </Link>
          </ShowMore>
        </SectionWork>
        <SectionSlidingImages>
          <SlidingImages />
        </SectionSlidingImages>
        <Footer />
      </div>
    </TransitionAnim>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: calc(100vh - 7rem);

  h4 {
    text-shadow: 0 0 10px var(--color-purple-1), 0 0 20px var(--color-purple-1);

    @media screen and (max-width: 720px) {
      font-size: 4rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    height: 70vh;
  }
`;

const LocatedRight = styled.div`
  color: var(--color-white);
  padding: 2rem 0 2rem 3rem;
  font-size: 5rem;
  margin-top: -30rem;
  width: 50%;

  span {
    color: var(--color-purple-2);
    font-size: 3rem;

    @media screen and (max-width: 720px) {
      display: none;
    }
  }

  h1 {
    font-size: clamp(6rem, 8vw, 12rem);

    @media screen and (max-width: 720px) {
      display: none;
    }
  }

  h3 {
    font-size: clamp(3rem, 3.5vw, 6rem);
  }

  p {
    font-size: clamp(1.5rem, 2vw, 3rem);
  }

  @media screen and (max-width: 720px) {
    position: absolute;
    padding: 2rem 3rem;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
`;

const BoxHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 720px) {
    align-items: end;
    width: 100%;
    height: 100%;
  }

  img {
    height: 100vh;

    @media screen and (max-width: 900px) {
      height: 80vh;
    }

    @media screen and (max-width: 720px) {
      height: 60vh;
    }
  }
`;

const ScrollingTextContainer = styled.div`
  position: absolute;
  top: calc(100vh - 35rem);

  @media screen and (max-width: 720px) {
    top: calc(100vh - 55rem);
  }
`;

const SectionAbout = styled.div`
  background-color: var(--color-primary-2);
`;

const SectionWork = styled.div`
  background-color: var(--color-primary-3);
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

const SectionSlidingImages = styled.div`
  padding: 10rem 0;
  background-color: var(--color-primary-2);
  overflow: hidden;
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
