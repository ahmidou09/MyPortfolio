import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMobileNavbar = styled.div``;
const Img = styled.img`
  height: 1.8rem;
  cursor: pointer;
`;
const Menu = styled.div``;

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <StyledMobileNavbar>
        <Link onClick={() => setIsMenuOpen(false)} to="/">
          El mehdi Ahmidou
        </Link>
        <Img onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </StyledMobileNavbar>
      {isMenuOpen && (
        <Menu>
          <Link onClick={() => setIsMenuOpen(false)} to="/projects">
            Projects
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about">
            About
          </Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact">
            Contact
          </Link>
        </Menu>
      )}
    </>
  );
}

export default MobileNavbar;
