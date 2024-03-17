import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";
import ContactForm from "../features/contact/ContactForm";
import SocialLinks from "../features/footer/SocialLinks";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0;
  color: var(--color-white);

  h1 {
    font-size: 8rem;
  }

  p {
    margin-bottom: 6rem;
  }
`;

const InfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  span {
    font-size: 3.5rem;
    font-weight: 500;
    display: block;
  }
`;

const ContactWrapp = styled.div``;

const SocialLinksWrapper = styled(SocialLinks)`
  
`;

function Contact() {
  return (
    <Container>
      <h1>Let's work together</h1>
      <p>
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>
      <ContactWrapp>
        <InfoDetails>
          <ContactForm />
          <ContactDetails>
            <h2>Contact Details</h2>
            <span>ahmidouem@gmail.com</span>
            <span>+212 6 66 66 66 66</span>
            <SocialLinksWrapper />
          </ContactDetails>
        </InfoDetails>
      </ContactWrapp>
    </Container>
  );
}

export default transition(Contact);
