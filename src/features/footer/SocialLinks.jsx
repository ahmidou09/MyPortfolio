import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Magnetic from "../../ui/Magnetic";
import styled from "styled-components";

function SocialLinks({ style }) {
  return (
    <BoxSocial style={style}>
      <Magnetic>
        <SocialItem>
          <a
            href={"https://www.linkedin.com/in/el-mehdi-ahmidou-312590125/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialItem>
      </Magnetic>
      <Magnetic>
        <SocialItem>
          <a
            href={"https://github.com/ahmidou09/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </SocialItem>
      </Magnetic>
      <Magnetic>
        <SocialItem>
          <a
            href={"https://www.facebook.com/mehdi.ahmidou"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </SocialItem>
      </Magnetic>
      <Magnetic>
        <SocialItem>
          <a
            href={"https://twitter.com/el_ahmidou"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
        </SocialItem>
      </Magnetic>
    </BoxSocial>
  );
}

const BoxSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SocialItem = styled.li`
  list-style: none;

  a {
    position: relative;
    display: block;
    width: 6rem;
    height: 6rem;
    text-align: center;
    line-height: 6.3rem;
    background: transparent;
    border-radius: 50%;
    font-size: 3rem;
    color: var(--color-white);
    transition: 0.5s;

    @media screen and (max-width: 900px) {
      width: 5rem;
      height: 5rem;
      line-height: 5.3rem;
    }

    @media screen and (max-width: 720px) {
      width: 4rem;
      height: 4rem;
      line-height: 4.3rem;
    }
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 1.5rem var(--color-white);
  }

  a:hover {
    color: var(--color-white);
    box-shadow: 0 0 0.5rem var(--color-white);
    text-shadow: 0 0 0.5rem var(--color-white);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;

    @media screen and (max-width: 900px) {
      width: 2.25rem;
      height: 2.25rem;
    }

    @media screen and (max-width: 720px) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default SocialLinks;
