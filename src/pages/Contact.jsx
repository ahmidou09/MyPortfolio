import React from "react";
import styled from "styled-components";
import ContactForm from "../features/contact/ContactForm";
import SocialLinks from "../features/footer/SocialLinks";
import TransitionAnim from "../ui/TransitionAnim";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;
  color: var(--color-white);

  h1 {
    font-size: 8rem;
    margin-bottom: 2rem;
  }
`;

const InfoParagraph = styled.p`
  margin-bottom: 8rem;
  font-size: 1.9rem;
`;

const InfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
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

const ContactWrapp = styled.div``;

const SocialLinksWrapper = styled(SocialLinks)``;

const SectionCopyright = styled.div`
  font-size: 1.9rem;
  background-color: var(--color-balck);
  color: var(--color-white);
  padding: 6rem 3rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
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
        <ContactWrapp>
          <InfoDetails>
            <ContactForm />
            <ContactDetails>
              <h2>Contact Details</h2>
              <span>ahmidouem@gmail.com</span>
              <span>+2126 73 23 53 39</span>
              <SocialLinksWrapper />
            </ContactDetails>
          </InfoDetails>
        </ContactWrapp>
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
