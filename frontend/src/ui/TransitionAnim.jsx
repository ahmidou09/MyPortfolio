import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const expand = {
  initial: {
    top: 0,
  },
  enter: (i) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};
const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

const TransitionAnimContainer = styled.div`
  .transition-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    left: 0;
    top: 0;
    pointer-events: none;
    z-index: 2;
    div {
      position: relative;
      height: 100%;
      width: 100%;
      background-color: black;
    }
  }
  .transition-background {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 1;
    pointer-events: none;
    top: 0;
    left: 0;
  }
`;

function TransitionAnim({ children }) {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 10;
  return (
    <TransitionAnimContainer>
      <motion.div {...anim(opacity)} className="transition-background" />
      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />;
        })}
      </div>
      {children}
    </TransitionAnimContainer>
  );
}

export default TransitionAnim;
