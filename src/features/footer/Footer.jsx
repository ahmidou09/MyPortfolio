import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import HoverButton from "../../ui/HoverButton";

const BoxContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 3rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Enfo = styled.div`
  font-size: 3.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 3rem;
  }
`;

const SectionContact = styled.section`
  background-color: var(--color-balck);
  color: var(--color-white);
`;

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 5rem 0;

  h2 {
    font-size: 8rem;
    font-weight: 500;
    margin-bottom: 6rem;

    @media only screen and (max-width: 720px) {
      font-size: 4rem;
      text-align: center;
    }
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0.2rem;
  font-size: 4rem;
  background-color: var(--color-white);
  border: none;
  border-radius: 5rem;
  margin-bottom: 4rem;
`;

const GetTouch = styled.button`
  background-color: transparent;
  font-size: 2.5rem;
  font-weight: 500;
  border: 0.2rem solid var(--color-white);
  border-radius: 5rem;
  padding: 1.5rem 3rem;

  @media only screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;

const SectionCopyright = styled.div`
  background-color: var(--color-balck);
  color: var(--color-white);
  padding: 3rem 0;
  text-align: center;
`;

function Footer({ style }) {
  return (
    <SectionContact style={style}>
      <Wrapper>
        <h2>Let’s work together</h2>
        <Line />
        <BoxContact>
          <Enfo>
            <span>ahmidouem@gmail.com</span>
          </Enfo>
          <HoverButton>
            <GetTouch>
              <Link to="/contact">Get in touch</Link>
            </GetTouch>
          </HoverButton>
          <Enfo>
            <span>+212673235339</span>
          </Enfo>
        </BoxContact>
        <Line />
        <SocialLinks />
      </Wrapper>
      <SectionCopyright>
        <p>
          &copy; {new Date().getFullYear()} El Mehdi Ahmidou. All rights
          reserved.
        </p>
      </SectionCopyright>
    </SectionContact>
  );
}

export default Footer;
