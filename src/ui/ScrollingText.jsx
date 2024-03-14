import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function ScrollingText({ name }) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const firstTextRef = firstText.current;
    const secondTextRef = secondText.current;
    const sliderRef = slider.current;

    gsap.to(sliderRef, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstTextRef, { xPercent: xPercent });
      gsap.set(secondTextRef, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };

    requestAnimationFrame(animate);

    return () => {
      // Clean up animation when component unmounts
      gsap.killTweensOf(firstTextRef);
      gsap.killTweensOf(secondTextRef);
      gsap.killTweensOf(sliderRef);
    };
  }, []);


  return (
    <ScrollingTextContainer ref={slider}>
      <p ref={firstText}>{name}</p>
      <p ref={secondText}>{name}</p>
    </ScrollingTextContainer>
  );
}

const ScrollingTextContainer = styled.div`
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

export default ScrollingText;
