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
            href={"https://www.github.com"}
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
            href={"https://www.facebook.com"}
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
            href={"https://www.twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
        </SocialItem>
      </HoverButton>
      <HoverButton>
        <SocialItem>
          <a
            href={"https://www.instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </SocialItem>
      </HoverButton>
    </BoxSocial>
  );
}

const BoxSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem;
`;

const SocialItem = styled.div`
  border: 1px solid var(--color-white);
  padding: 1rem;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;

export default SocialLinks;
