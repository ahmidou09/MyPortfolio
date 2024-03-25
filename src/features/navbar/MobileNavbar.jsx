import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import styled from "styled-components";
import SocialLinks from "../footer/SocialLinks";

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
  width: 40rem;
  background: var(--color-primary-3);
  opacity: ${(props) =>
    props.opacity}; /* Updated to accept opacity as a prop */

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
  const [sidebarOpacity, setSidebarOpacity] = useState(0); // State to manage opacity

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setSidebarOpacity(1); // Set opacity to 1 when scrolled down 200 pixels
      } else {
        setSidebarOpacity(0); // Otherwise, keep opacity at 0
      }
    };

    window.addEventListener("scroll", handleScroll); // Add event listener for scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove event listener on component unmount
    };
  }, []);

  const handleCloseSidebar = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SideBar
        animate={open ? "open" : "closed"}
        variants={variants}
        opacity={sidebarOpacity} // Pass opacity as prop
      >
        <ToggleButton setOpen={setOpen} />
        <Links handleCloseSidebar={handleCloseSidebar} />
        <SocialLinks
          style={{
            flexDirection: "row",
            top: "80%",
            gap: "1rem",
            height: "5rem",
          }}
        />
      </SideBar>
    </>
  );
}

export default MobileNavbar;
