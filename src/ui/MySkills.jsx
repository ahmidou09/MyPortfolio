import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaBootstrap,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails, SiTailwindcss } from "react-icons/si";

// Styled components
const SkillsContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Section = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color-grey-0);
  display: grid;
  place-content: center;

  p {
    text-align: center;
    padding: 1.5rem;
    font-size: 4.2rem;
  }
`;

const MouseIcon = styled.div`
  pointer-events: none;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;

  svg {
    width: 10rem;
    height: 10rem;
  }
`;

// Component
const Skills = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={100}
      rotationRange={25}
      icons={[
        <FaReact />,
        <DiRuby />,
        <SiRubyonrails />,
        <FaCss3 />,
        <FaHtml5 />,
        <FaBootstrap />,
        <IoLogoJavascript />,
        <FaSass />,
        <SiTailwindcss />,
        <FaGitAlt />,
      ]}
    >
      <Section>
        <p>My Skills</p>{" "}
      </Section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  icons,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % icons.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 0.2 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <SkillsContainer
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}
      {icons.map((icon, index) => (
        <MouseIcon key={index} data-mouse-move-index={index}>
          {icon}
        </MouseIcon>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
