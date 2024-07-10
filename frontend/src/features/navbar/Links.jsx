import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const slide = {
  initial: { x: 80 },
  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

const LinksContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
`;

const Indicator = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background-color: var(--color-white);
  border-radius: 50%;
  position: absolute;
  left: -3rem;
`;

export default function Links({
  data: { title, href, index },
  isActive,
  setSelectedIndicator,
  setIsActive,
}) {
  return (
    <LinksContainer
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => {
        setIsActive(false);
        window.scrollTo(0, 0);
      }}
    >
      <Indicator variants={scale} animate={isActive ? "open" : "closed"} />
      <Link to={href} aria-label={title}>
        {title}
      </Link>
    </LinksContainer>
  );
}
