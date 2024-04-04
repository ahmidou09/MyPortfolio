import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import HoverButton from "../../ui/HoverButton";

const StyledDesktopNavbar = styled.header`
  display: flex;
  padding: 2rem 5rem;
  justify-content: space-between;
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.1rem;
  ${(props) =>
    props.isProjectPage &&
    css`
      background-color: var(
        --color-primary-3
      ); /* Change to the desired background color */
    `}
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
  font-size: 1.7rem;

  .copy span {
    position: relative;
    display: block;
    transition: transform 0.8s ease;
    transform-origin: center;
    font-size: 2.5rem;
  }

  &:hover .copy span {
    transform: rotate(360deg);
  }

  &:hover .credit .codeBy,
  &:hover .credit .mehdi,
  &:hover .credit .ahmidou {
    transform: translateX(-6rem);
  }

  .credit {
    display: flex;
    align-items: center;
    transition: transform 0.6s ease;
    overflow: hidden;
    width: max-content;

    .codeBy {
      display: block;
      transform: translateX(0);
      transition: transform 0.6s ease;
    }

    .mehdi {
      transition: transform 0.6s ease;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .ahmidou {
      display: block;
      transform: translateX(5.5rem);
      transition: transform 0.6s ease;
      width: 0;
      padding-right: 1rem;
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 3rem;
  }

  li {
    font-size: 1.7rem;
  }
`;

const NavLinkWithHover = styled(NavLink)`
  position: relative;
  color: inherit;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    top: 150%;
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
  const location = useLocation();
  const isProjectPage = location.pathname.match(/^\/projects\/\d+/);
  return (
    <StyledDesktopNavbar isProjectPage={!!isProjectPage}>
      <HoverButton>
        <Link to="/">
          <ButtonText>
            <div className="copy">
              <span>&copy;</span>
            </div>
            <div className="credit">
              <span className="codeBy">Code by </span>{" "}
              <span className="mehdi">El Mehdi</span>
              <span className="ahmidou">Ahmidou</span>
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
