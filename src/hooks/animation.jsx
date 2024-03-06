import { motion } from "framer-motion";
import styled from "styled-components";

const SlideOut = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 130vh;
  width: 100%;
  background-color: var(--color-primary-3);
`;

const transition = (ComponentUI) => {
  return () => (
    <>
      <SlideOut
        initial={{ top: "100vh" }}
        animate={{ top: "-130vh" }}
        exit={{ top: "0" }}
        transition={{ delay: 0, duration: 1, ease: [0.64, 1.59, 0.96, 0.22] }}
      />
      <ComponentUI />
    </>
  );
};

export default transition;

