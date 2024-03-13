import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import styled from "styled-components";

const variants = {
  open: {
    clipPath: "circle(1200px at 350px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(24px at 350px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 2000,
      damping: 4000,
    },
  },
};

const SideBar = styled(motion.div)`
  z-index: 9999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40rem;
  background: var(--color-primary-3);

  ul {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
      font-size: 4rem;
      color: var(--color-white);
      cursor: pointer;
    }
  }
`;

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  const handleCloseSidebar = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SideBar animate={open ? "open" : "closed"} variants={variants}>
        <ToggleButton setOpen={setOpen} />
        <Links handleCloseSidebar={handleCloseSidebar} />
      </SideBar>
    </>
  );
}

export default MobileNavbar;
