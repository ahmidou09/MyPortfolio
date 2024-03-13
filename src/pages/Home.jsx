import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import animationWord from "../assets/json/Animationw_world_1.json";
import hero from "../assets/img/hero.png";
import transition from "../hooks/animation";
import Character from "../ui/Character";
import HoverImageLinks from "../features/projects/HoverImageLinks";
import { Link } from "react-router-dom";
import MainButton from "../ui/Button";

function Home() {
  const paragraph =
    "Developing secure, efficient, and scalable web applications and web-based management systems by writing standard, well-documented, and efficient codes.";
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        //onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

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
        <ScrollingText>
          <Slider ref={slider}>
            <p ref={firstText}>El Mehdi Ahmidou -</p>
            <p ref={secondText}>El Mehdi Ahmidou -</p>
          </Slider>
        </ScrollingText>
      </Header>
      <SectionAbout>
        <Character paragraph={paragraph} />
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

const ScrollingText = styled.div`
  position: absolute;
  top: calc(100vh - 35rem);
`;

const Slider = styled.div`
  position: relative;
  white-space: nowrap;

  p {
    position: relative;
    margin: 0;
    color: var(--color-white);
    font-size: 23rem;
    font-weight: 500;
    padding-right: 5rem;
  }

  p:nth-of-type(2) {
    position: absolute;
    left: 100%;
    top: 0;
  }
`;

const SectionAbout = styled.div`
  background-color: var(--color-white);
  height: 100vh;
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
