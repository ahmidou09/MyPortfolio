import React from "react";
import styled from "styled-components";
import ContactForm from "../features/contact/ContactForm";
import SocialLinks from "../features/footer/SocialLinks";
import TransitionAnim from "../ui/TransitionAnim";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 0 0 0;
  color: var(--color-white);

  h1 {
    font-size: 8rem;
    margin-bottom: 2rem;
    padding: 0 3rem;

    @media screen and (max-width: 720px) {
      font-size: 6rem;
      text-align: center;
    }
  }
`;

const InfoParagraph = styled.p`
  margin-bottom: 8rem;
  font-size: 1.9rem;
  padding: 0 3rem;

  @media screen and (max-width: 720px) {
    text-align: center;
  }
`;

const InfoDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 5rem;
    padding: 0 5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    font-size: 5rem;
  }

  span {
    font-size: 3.2rem;
    font-weight: 500;
    display: block;
  }
`;

const SectionCopyright = styled.div`
  font-size: 1.6rem;
  color: var(--color-white);
  padding: 6rem 3rem;
  text-align: center;
`;

function Contact() {
  return (
    <TransitionAnim>
      <Container>
        <h1>Let's work together</h1>
        <InfoParagraph>
          I’m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </InfoParagraph>
        <div>
          <InfoDetails>
            <ContactForm />
            <ContactDetails>
              <h2>Contact Details</h2>
              <span>ahmidouem@gmail.com</span>
              <span>+2126 73 23 53 39</span>
              <SocialLinks />
            </ContactDetails>
          </InfoDetails>
        </div>
        <SectionCopyright>
          <p>
            &copy; {new Date().getFullYear()} El Mehdi Ahmidou. All rights
            reserved.
          </p>
        </SectionCopyright>
      </Container>
    </TransitionAnim>
  );
}

export default Contact;
