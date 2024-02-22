import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import HoverButton from "../../ui/HoverButton";

const StyledDesktopNavbar = styled.header`
  display: flex;
  padding: 2rem 5rem;
  justify-content: space-between;
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  transform: rotate(0deg);
  font-size: 1.5rem;

  .copy span {
    position: relative;
    display: block;
    transform: rotate(0);
    transition: transform 0.8s ease;
  }

  &:hover .copy span {
    transform: rotate(-720deg) translateX(0.5rem);
  }

  &:hover .codeBy {
    transform: translateX(-10rem);
    opacity: 0;
  }

  &:hover .mehdi {
    transform: translateX(-5.5rem);
  }

  &:hover .ahmidou {
    transform: translateX(-5rem);
  }

  .credit {
    display: flex;
    align-items: center;
    transition: transform 1s ease;
    overflow: hidden;
  }

  .codeBy {
    display: block;
    transform: translateX(0);
    transition: transform 0.6s ease;
    opacity: 1;
  }

  .name {
    display: flex;
    align-items: center;
  }

  .mehdi {
    transform: translateX(0.5rem);
    transition: transform 0.6s ease;
  }

  .ahmidou {
    display: block;
    transform: translateX(10rem);
    transition: transform 0.6s ease;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 3rem;

    li {
      position: relative;
    }
  }
`;

const NavLinkWithHover = styled(NavLink)`
  position: relative;
  color: inherit;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 300%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: var(--color-white);
    transition: all 0.2s ease-in-out;
  }

  &:hover::before {
    top: 150%;
    width: 0.75rem;
    height: 0.75rem;
  }
`;

function DesktopNavbar() {
  return (
    <StyledDesktopNavbar>
      <HoverButton>
        <Link href="/">
          <ButtonText>
            <div className="copy">
              <span>&copy;</span>
            </div>
            <div className="credit">
              <span className="codeBy">Code by </span>{" "}
              <span className="name">
                <span className="mehdi">El Mehdi</span>
                <span className="ahmidou">Ahmidou</span>
              </span>
            </div>
          </ButtonText>
        </Link>
      </HoverButton>

      <Nav>
        <ul>
          <HoverButton>
            <li>
              <NavLinkWithHover to="/projects">Projects</NavLinkWithHover>
            </li>
          </HoverButton>
          <HoverButton>
            <li>
              <NavLinkWithHover to="/about">About-me</NavLinkWithHover>
            </li>
          </HoverButton>
          <HoverButton>
            <li>
              <NavLinkWithHover to="/contact">Contact</NavLinkWithHover>
            </li>
          </HoverButton>
        </ul>
      </Nav>
    </StyledDesktopNavbar>
  );
}

export default DesktopNavbar;
