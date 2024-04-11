import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Menu from "./Menu";
import Magnetic from "../../ui/Magnetic";

const MainContainer = styled.div`
  .header {
    padding: 3rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;

    .button {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background-color: var(--color-grey-1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .burger {
        width: 100%;

        &::after,
        &::before {
          content: "";
          display: block;
          height: 0.1rem;
          width: 40%;
          margin: auto;
          background-color: white;
          position: relative;
          transition: transform 0.3s;
        }

        &::after {
          top: -0.5rem;
        }

        &::before {
          top: 0.5rem;
        }
      }

      .burgerActive {
        &::after {
          transform: rotate(45deg);
          top: -0.1rem;
        }

        &::before {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
  }
`;

export default function MobileNavbar() {
  const [isActive, setIsActive] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    if (isActive) setIsActive(true);
  }, [pathname, isActive]);

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return (
    <MainContainer>
      <div className="header">
        <Magnetic>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="button"
          >
            <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          </div>
        </Magnetic>
      </div>
      <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
    </MainContainer>
  );
}
