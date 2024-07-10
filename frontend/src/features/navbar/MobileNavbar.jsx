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
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      background-color: var(--color-purple-1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 720px) {
        width: 5.2rem;
        height: 5.2rem;
      }

      .burger {
        content: "";
        display: block;
        height: 0.15rem;
        margin: auto;
        background-color: var(--color-white);
        transition: transform 0.3s;
        width: 4.2rem;

        @media screen and (max-width: 720px) {
          width: 3.6rem;
        }

        &::after,
        &::before {
          content: "";
          display: block;
          height: 0.15rem;
          width: 100%;
          margin: auto;
          background-color: var(--color-white);
          position: relative;
          transition: transform 0.3s;
        }

        &::after {
          top: -0.9rem;
          height: 0.1rem;
        }

        &::before {
          top: 0.8rem;
        }
      }

      .burgerActive {
        background-color: transparent;

        &::after {
          transform: rotate(135deg);
          top: -0.1rem;
        }

        &::before {
          transform: rotate(-135deg);
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
      <AnimatePresence mode="wait">
        {isActive && <Menu isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </MainContainer>
  );
}
