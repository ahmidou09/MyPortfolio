import { motion } from "framer-motion";
import styled from "styled-components";

const Button = styled.button`
  z-index: 9999;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  top: 25px;
  right: 25px;
  background-color: var(--color-white);
  border: none;
  cursor: pointer;
`;

const ToggleButton = ({ setOpen }) => {
  return (
    <Button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </Button>
  );
};

export default ToggleButton;
