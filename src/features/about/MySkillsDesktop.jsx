import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import skills from "../../assets/img/skills-bg_1.png";
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
  display: grid;
  place-content: center;
  background-image: url(${skills});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  opacity: 0.09;
`;

const MouseIcon = styled.div`
  pointer-events: none;
  position: absolute;
  opacity: 0;
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
        <FaReact color="#61DBFB" />,
        <DiRuby color="#E74C3C" />,
        <SiRubyonrails color="#C60000" />,
        <FaCss3 color="#3498DB" />,
        <FaHtml5 color="#F4470B" />,
        <FaBootstrap color="#7811F2" />,
        <IoLogoJavascript color="#EFD81D" />,
        <FaSass color="#C66394" />,
        <SiTailwindcss color="#36B7F0" />,
        <FaGitAlt color="#E84E31" />,
      ]}
    >
      <Section />
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
      { ease: "linear", duration: 0.5, delay: 2 }
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
