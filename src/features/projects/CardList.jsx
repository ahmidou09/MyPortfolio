import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardList = ({ projectData, color }) => {
  const { imgSrc, heading, subheading } = projectData;
  const navigate = useNavigate();
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["80%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <LinkWrapper
      onClick={() => {
        navigate(`/projects/${projectData.id}`);
        window.scrollTo(0, 0);
      }}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      color={color}
    >
      <div>
        <Heading
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          color={color}
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </Heading>

        <Subheading color={color}>{subheading}</Subheading>
      </div>

      <Image
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-6.5deg" },
          whileHover: { scale: 0.8, rotate: "6.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        alt={`Image representing a link for ${heading}`}
      />

      <ArrowWrapper
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
      >
        <FiArrowRight style={{ fontSize: "4rem", color: "#fafafa" }} />
      </ArrowWrapper>
    </LinkWrapper>
  );
};

const LinkWrapper = styled(motion.a)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
  transition: border-color 0.5s;

  &:not(:last-child) {
    border-bottom: 2px solid
      ${(props) => (props.color ? props.color : "var(--color-grey-0)")};
  }

  &:hover span {
    color: var(--color-white-2);
  }

  &:hover {
    border-color: var(--color-white-2);
  }
`;

const Heading = styled(motion.div)`
  position: relative;
  z-index: 10;
  font-size: 4.5rem;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "var(--color-grey-0)")};
  transition: color 0.5s;

  .inline-block {
    display: inline-block;
  }
`;

const Subheading = styled.span`
  position: relative;
  z-index: 10;
  margin-top: 0.5rem;
  font-size: 2rem;
  color: ${(props) => (props.color ? props.color : "var(--color-grey-0)")};
  transition: color 0.5s;
`;

const Image = styled(motion.img)`
  position: absolute;
  z-index: 99999;
  height: auto;
  width: 40rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const ArrowWrapper = styled(motion.div)`
  position: relative;
  z-index: 10;
  padding: 1rem;
`;

export default CardList;
