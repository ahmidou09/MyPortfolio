import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Links from "./Links";
import Curve from "./Curve";
import styled from "styled-components";
import SocialLinks from "../footer/SocialLinks";

const menuSlide = {
  initial: { x: "calc(100% + 10rem)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 10rem)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const navItems = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const MenuContiner = styled(motion.div)`
  height: 100vh;
  background-color: var(--color-purple-1);
  position: fixed;
  right: 0;
  top: 0;
  color: var(--color-white);
  z-index: 999;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const MenuWrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  font-size: 4.6rem;
  margin-top: 8rem;

  @media screen and (max-width: 720px) {
    font-size: 3.8rem;
  }
`;

export default function Menu({ setIsActive }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <MenuContiner
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <MenuWrapper>
        <NavSection onMouseLeave={() => setSelectedIndicator(pathname)}>
          {navItems.map((data, index) => (
            <Links
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
              setIsActive={setIsActive}
            />
          ))}
        </NavSection>
        <SocialLinks />
      </MenuWrapper>
      <Curve />
    </MenuContiner>
  );
}
