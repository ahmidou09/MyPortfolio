import React from "react";
import styled from "styled-components";
import ComponentStatistics from "../features/about/ComponentStatistics";
import AccordionWrapper from "../features/about/AccordionWrapper";
import Accordion from "../features/about/Accordion";
import profileImage from "../assets/img/profile.jpg";
import Footer from "../features/footer/Footer";
import TransitionAnim from "../ui/TransitionAnim";

const panels = [
  {
    label: <h2>ABOUT ME</h2>,
    content: (
      <p>
        As a Front End Developer, I am passionate about crafting clean code,
        ensuring accessible design, and developing user interfaces and web
        applications. I thrive in environments that embrace pair-programming and
        remote work, With fluency in a variety of programming languages,
        frameworks, and technologies, I can adapt and scale my skills rapidly
        and effectively.
      </p>
    ),
  },
  {
    label: <h2>EXPERIENCE</h2>,
    content: (
      <ul>
        <li>
          <h6>FREELANCE</h6>
          <h3>Front-End Developer - Remote</h3>
          <h5>Jan 2022 - Present</h5>
          <p>
            ● Designed, and developed responsive UI for web applications using
            React.js.
          </p>
          <p>
            ● Interacted with third-party APIs using Redux Toolkit and React
            Hooks.
          </p>
          <p>
            ● Collaborated with back-end developers to integrate APIs and ensure
            seamless data exchange.
          </p>
          <p>
            ● Worked closely with designers and product managers to ensure
            high-quality user experiences.
          </p>
          <p>
            {" "}
            ● Tested web applications using Jest and React Testing Library.
          </p>
        </li>
        <li>
          <h6>MICROVERSE | San Francisco, California, United States</h6>
          <h3>Code Reviewer (TSE)</h3>
          <h5>April 2024 - current</h5>
          <p>
            ● Giving quality code reviews to students’ projects resulting in
            improved code quality, by providing constructive feedback.{" "}
          </p>
          <p>
            ● Helping students identify and fix bugs in one-on-one coding
            sessions thus improving my communication, problem-solving, and
            debugging skills.{" "}
          </p>
        </li>
        <li>
          <h6> Ministry of National Education | Morocco</h6>
          <h3>Math Teacher </h3>
          <h5>Jan 2018 - Jan 2022</h5>
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
          <h6>MICROVERSE | San Francisco, California, United States</h6>
          <h3>Remote Full-stack Web Development Program, Full Time</h3>
          <p>May 2023 - April 2024</p>
          <p>
            - Spent 1300+ hours mastering algorithms, data structures, and
            full-stack development while simultaneously developing projects with
            Ruby, Rails, JavaScript, React, and Redux
          </p>
          <p>
            - Developed skills in remote pair-programming using GitHub,
            industry-standard git-flow, and daily standups to communicate and
            collaborate with international remote developers
          </p>
        </li>
        <li>
          <h6>University of Mohamed V, Rabat, Morocco</h6>
          <h3>Master's degree in Physics Informatics</h3>
          <p>Sep 2015 - Sep 2017</p>
          <p>- Gained expertise in mathematics, physics, and programming.</p>
        </li>
      </ul>
    ),
  },
  {
    label: <h2>SKILLS</h2>,
    content: (
      <ul>
        <li>
          <strong>Front-End :</strong> JavaScript, React.js, Redux, HTML, CSS3,
          Sass(SCSS), Tailwind CSS, Bootstrap
        </li>
        <li>
          <strong>Back-End:</strong> Ruby, Ruby on Rails, PostgreSQL{" "}
        </li>
        <li>
          <strong>Tools & Methods:</strong> Git, GitHub, Mobile/Responsive
          Development, RSpec, TDD, Jest, Chrome Dev Tools, Webpack{" "}
        </li>
        <li>
          <strong>Professional:</strong> Remote Pair-Programming, Teamwork,
          Mentoring, User experience design, Strong problem-solving.{" "}
        </li>
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

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const IntroImage = styled.div`
  margin-right: 2rem;

  @media screen and (max-width: 720px) {
    margin-right: 0;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  max-width: 30rem;
  height: auto;
`;

const IntroText = styled.div`
  color: var(--color-white);
  h1 {
    font-size: 3.4rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 720px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  p {
    font-weight: 400;
    line-height: 1.5;
    font-size: 2.2rem;

    @media screen and (max-width: 720px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 0 3rem;
  }
`;

function About() {
  return (
    <TransitionAnim>
      <AboutContainer>
        <IntroContainer>
          <IntroImage>
            <Image src={profileImage} alt="EL MEHDI AHMIDOU" />
          </IntroImage>
          <IntroText>
            <h1>Hello, I'm EL MEHDI AHMIDOU 🙂</h1>
            <p> I'm a Front End Developer from Rabat, Morocco.</p>
            <ComponentStatistics />
          </IntroText>
        </IntroContainer>
        <AccordionWrapper>
          <Accordion panels={panels} />
        </AccordionWrapper>
        <Footer />
      </AboutContainer>
    </TransitionAnim>
  );
}

export default About;
