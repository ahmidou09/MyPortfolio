import React from "react";
import styled, { keyframes } from "styled-components";
import Lottie from "lottie-react";
import animationData from "../assets/json/animation_frontend.json";
import animationWord from "../assets/json/Animationw_world.json";
import hero from "../assets/img/hero.png";
import transition from "../hooks/animation";
import HoverButton from "../ui/HoverButton";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const fadeInLeft = keyframes`
    from {
      transform: translateX(-10rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 10rem);
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LocatedLeft = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  align-items: center;
  padding: 0 0.5rem;
  height: 10rem;
  background-color: var(--color-primary-3);
  border-radius: 0 10rem 10rem 0;
  left: 0;
  top: 50%;
  z-index: 999;
  animation: ${fadeInLeft} 0.5s 1s ease-in-out forwards;

  @media screen and (max-width: 900px) {
    background-color: transparent;
    top: 80%;
    right: 0;
    left: 70%;
  }

  div {
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 55% !important;
    }

    address {
      @media screen and (max-width: 720px) {
        display: none;
      }
    }
  }
`;

const LocatedRight = styled.div`
  width: 30rem;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 999;
  color: var(--color-white);
  padding: 2rem;

  @media screen and (max-width: 900px) {
    background-color: transparent;
    top: 80%;
    left: 0;
    right: 70%;
  }

  h4 {
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }
`;

const AnimateBox = styled.div`
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/ 9;
  grid-row: 1/-1;
  transform: rotateZ(220deg) scale(0.9);

  svg {
    width: 85% !important;

    @media screen and (max-width: 900px) {
      width: 100% !important;
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: -8rem;
  }

  @media screen and (max-width: 720px) {
    margin-top: -10rem;
  }
`;

const fadeInUp = keyframes`
    from {
      transform: translateY(10rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

const BoxHero = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -5rem;
  grid-column: 3/ 7;
  grid-row: 1/-1;
  z-index: 99;

  @media screen and (max-width: 900px) {
    grid-row: 1/-1;
    grid-column: 1/-1;
  }

  img {
    object-fit: cover;
    height: 100%;
    opacity: 0;
    align-self: self-start;
    animation: ${fadeInUp} 0.5s 1s ease-in-out forwards;

    @media screen and (max-width: 720px) {
      width: fill;
      height: 90%;
      padding: 6rem 0 0 0;
    }

    @media screen and (max-width: 500px) {
      width: fill;
      height: 70%;
      padding: 6rem 0 0 0;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <LocatedLeft>
        <div>
          <address>Located in the morroco</address>
          <HoverButton>
            <span>
              <Lottie animationData={animationWord} />
            </span>
          </HoverButton>
        </div>
      </LocatedLeft>
      <Row>
        <AnimateBox>
          <Lottie animationData={animationData} />
        </AnimateBox>

        <BoxHero>
          <img src={hero} alt="me" />
        </BoxHero>
      </Row>
      <LocatedRight>
        <h4>
          <span>Freelance</span> Designer &amp; Developer
        </h4>
      </LocatedRight>
    </HomeContainer>
  );
}

export default transition(Home);
