import React from "react";
import styled from "styled-components";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiSass,
  DiGit,
  DiRuby,
  DiBootstrap,
  DiPostgresql,
  DiGithub,
} from "react-icons/di";

import { SiRubyonrails } from "react-icons/si";

const SkillsContainer = styled.section`
  color: var(--color-white-2);
  background-color: var(--color-primary-3);
  padding: 3rem;

  h2 {
    color: var(--color-white);
    text-align: center;
    padding: 3rem;
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
`;

const IconContainer = styled.div`
  font-size: 7rem;
  margin-bottom: 1rem;
`;

const SkillName = styled.span`
  font-size: 1.6rem;
  text-align: center;
`;

const MySkillsMobile = () => {
  return (
    <SkillsContainer>
      <h2>My Skills</h2>
      <Skills>
        <Skill>
          <IconContainer>
            <DiJavascript1 />
          </IconContainer>
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiReact />
          </IconContainer>
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiHtml5 />
          </IconContainer>
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiCss3 />
          </IconContainer>
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiRuby />
          </IconContainer>
          <SkillName>Ruby</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <SiRubyonrails />
          </IconContainer>
          <SkillName>Ruby on Rails</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiBootstrap />
          </IconContainer>
          <SkillName>Bootstrap</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiGit />
          </IconContainer>
          <SkillName> Git</SkillName>
        </Skill>

        <Skill>
          <IconContainer>
            <DiGithub />
          </IconContainer>
          <SkillName>GitHub</SkillName>
        </Skill>

        <Skill>
          <IconContainer>
            <DiSass />
          </IconContainer>
          <SkillName>SASS</SkillName>
        </Skill>
        <Skill>
          <IconContainer>
            <DiPostgresql />
          </IconContainer>
          <SkillName> PostgreSQL</SkillName>
        </Skill>
      </Skills>
    </SkillsContainer>
  );
};

export default MySkillsMobile;
