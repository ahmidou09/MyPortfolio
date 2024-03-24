import React from "react";
import transition from "../hooks/animation";
import styled from "styled-components";
import ComponentStatistics from "../features/about/ComponentStatistics";
import AccordionWrapper from "../features/about/AccordionWrapper";
import Accordion from "../features/about/Accordion";
import profileImage from "../assets/img/profile.jpg";
import Footer from "../features/footer/Footer";

const panels = [
  {
    label: <h2>ABOUT ME</h2>,
    content: (
      <p>
        El Mehdi Ahmidou transitioned from a role as a Math Teacher with the
        Ministry of National Education in Rabat, Morocco, where he delivered
        tailored instruction to cater to diverse learning needs, fostering
        personalized learning experiences and collaborating with peers to devise
        interdisciplinary projects. Subsequently, he pursued a career shift
        towards technology, enrolling in the Remote Full Stack Web Development
        Program at MICROVERSE, where he honed his skills in algorithms, data
        structures, and frontend development while managing projects using
        JavaScript, React, and Redux.
      </p>
    ),
  },
  {
    label: <h2>EXPERIENCE</h2>,
    content: (
      <ul>
        <li>
          <h3>Front-End Developer - Remote</h3>
          <p>Jan 2022 - Present</p>
          <p>
            Developed capstone projects utilizing various technologies including
            HTML, CSS, JavaScript, and React.
          </p>
        </li>
        <li>
          <h3>Math Teacher - Ministry of National Education</h3>
          <p>Jan 2018 - Jan 2022</p>
          <p>
            Delivered tailored instruction, fostered personalized learning
            experiences, and collaborated with peers on interdisciplinary
            projects.
          </p>
        </li>
      </ul>
    ),
  },
  {
    label: <h2>EDUCATION</h2>,
    content: (
      <ul>
        <li>
          <h3>Remote Full Stack Web Development Program - MICROVERSE</h3>
          <p>May 2023 - Present</p>
          <p>
            Mastered algorithms, data structures, and frontend development.
            Managed projects using JavaScript, React, and Redux.
          </p>
        </li>
        <li>
          <h3>
            Master's degree in Physics Informatics - Faculty of Sciences Rabat
          </h3>
          <p>Sep 2015 - Sep 2017</p>
          <p>Gained expertise in mathematics, physics, and programming.</p>
        </li>
      </ul>
    ),
  },
  {
    label: <h2>SKILLS</h2>,
    content: (
      <ul>
        <li>Front-End: JavaScript, React, Redux, HTML5, CSS3</li>
        <li>
          Tools & Methods: Git, GitHub, Mobile/Responsive Development, Chrome
          Dev Tools
        </li>
        <li>Professional: Remote Pair-Programming, Teamwork</li>
      </ul>
    ),
  },
];

const AboutContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 0 0 0;
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  gap: 6rem;
`;

const IntroImage = styled.div`
  margin-right: 2rem;
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 30rem;
  height: auto;
`;

const IntroText = styled.div`
  h1 {
    font-size: 3.4rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: 400;
    line-height: 1.5;
    font-size: 2.2rem;
  }
`;

function About(color) {
  return (
    <AboutContainer>
      <IntroContainer>
        <IntroImage>
          <Image src={profileImage} alt="EL MEHDI AHMIDOU" />
        </IntroImage>
        <IntroText>
          <h1>Hello, I'm EL MEHDI AHMIDOU 🙂</h1>
          <p>
            {" "}
            I’m Front End Developer, located in Rabat, Morocco. With an
            experience of 4 years, I have built web applications for clients
            from different countries and industries. My main objective is to
            create interfaces that are engaging, accessible, and high-performing
            for humans.
          </p>
          <ComponentStatistics />
        </IntroText>
      </IntroContainer>
      <AccordionWrapper>
        <Accordion panels={panels} />
      </AccordionWrapper>
      <Footer style={{ color: "var(--color-primary-3)" }} />
    </AboutContainer>
  );
}

export default transition(About);
