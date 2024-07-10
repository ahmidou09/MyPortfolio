import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function ScrollingText({ name }) {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercentRef = useRef(0);
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
      if (xPercentRef.current < -100) {
        xPercentRef.current = 0;
      } else if (xPercentRef.current > 0) {
        xPercentRef.current = -100;
      }
      gsap.set(firstTextRef, { xPercent: xPercentRef.current });
      gsap.set(secondTextRef, { xPercent: xPercentRef.current });
      requestAnimationFrame(animate);
      xPercentRef.current += 0.1 * direction;
    };

    requestAnimationFrame(animate);

    return () => {
      // Clean up animation when component unmounts
      gsap.killTweensOf(firstTextRef);
      gsap.killTweensOf(secondTextRef);
      gsap.killTweensOf(sliderRef);
    };
  }, [direction]);

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

    @media screen and (max-width: 720px) {
      font-size: 12rem;
    }
  }

  p:nth-of-type(2) {
    position: absolute;
    left: 100%;
    top: 0;
  }
`;

export default ScrollingText;
