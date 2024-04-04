import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import HoverButton from "../../ui/HoverButton";
import styled from "styled-components";

function SocialLinks({ style }) {
  return (
    <BoxSocial style={style}>
      <HoverButton>
        <SocialItem>
          <a
            href={"https://www.linkedin.com/in/el-mehdi-ahmidou-312590125/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </SocialItem>
      </HoverButton>
      <HoverButton>
        <SocialItem>
          <a
            href={"https://github.com/ahmidou09/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </SocialItem>
      </HoverButton>
      <HoverButton>
        <SocialItem>
          <a
            href={"https://www.facebook.com/mehdi.ahmidou"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </SocialItem>
      </HoverButton>
      <HoverButton>
        <SocialItem>
          <a
            href={"https://twitter.com/el_ahmidou"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
        </SocialItem>
      </HoverButton>
    </BoxSocial>
  );
}

const BoxSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  //padding: 4rem;
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
    background: var(--color-grey-1);
    border-radius: 50%;
    font-size: 3rem;
    color: var(--color-white);
    transition: 0.5s;
  }

  a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--color-button-p-3);
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 1.5rem var(--color-button-p-3);
  }

  a:hover {
    color: var(--color-button-p-3);
    box-shadow: 0 0 0.5rem var(--color-button-p-3);
    text-shadow: 0 0 0.5rem var(--color-button-p-3);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default SocialLinks;
