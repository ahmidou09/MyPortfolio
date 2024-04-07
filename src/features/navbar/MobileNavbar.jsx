import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

const variants = {
  open: {
    clipPath: "circle(1200px at 350px 50px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 40,
      restDelta: 10,
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
  width: 400px;
  background: var(--color-primary-1);
  opacity: ${(props) => props.opacity};

  @media screen and (max-width: 720px) {
  }

  ul {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    a {
      font-size: 40px;
      color: var(--color-white);
      cursor: pointer;
    }
  }
`;

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const [sidebarOpacity, setSidebarOpacity] = useState(isMobile ? 1 : 0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile || window.scrollY >= 200) {
        setSidebarOpacity(1);
      } else {
        setSidebarOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const handleCloseSidebar = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SideBar
        animate={open ? "open" : "closed"}
        variants={variants}
        opacity={sidebarOpacity}
      >
        <ToggleButton setOpen={setOpen} />
        <Links handleCloseSidebar={handleCloseSidebar} />
      </SideBar>
    </>
  );
}

export default MobileNavbar;
