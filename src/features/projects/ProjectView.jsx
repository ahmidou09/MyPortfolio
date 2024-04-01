import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../assets/json/data/links.json";
import SwipeCarousel from "./SwipeCarousel";
import Footer from "../footer/Footer";
import TransitionAnim from "../../ui/TransitionAnim";

const ProjectViewContainer = styled.div`
  background-color: var(--color-primary-3);
  position: relative;
`;

const ButtonBack = styled(Link)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: var(--color-white-2);
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 9999;
`;

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 12rem 2rem 5rem 2rem;
`;

const TitleSection = styled.section`
  text-align: center;
  color: var(--color-white-2);
  padding: 4rem 0;
  height: 70vh;
  margin-bottom: 4rem;
  background-color: var(--color-primary-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectHeading = styled.h1`
  font-size: 6.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectSubheading = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 2rem;
`;

const ProjectOverview = styled.section`
  font-size: 1.8rem;
  color: var(--color-white-2);
  line-height: 1.5;
  margin-bottom: 2rem;
  text-align: center;
`;

const ToolsUsedSection = styled.section`
  margin: 2rem 0;
`;

const ToolsHeading = styled.h3`
  font-size: 2.4rem;
  color: var(--color-white-2);
  margin-bottom: 1rem;
`;

const ToolsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeatureSection = styled.section`
  margin: 2rem 0;
`;

const FeatureHeading = styled.h3`
  font-size: 2.4rem;
  color: var(--color-white-2);
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  font-size: 1.7rem;
  color: var(--color-white-2);
  margin-bottom: 0.5rem;
  position: relative;
  margin-left: 2rem;

  &:before {
    content: "✓";
    margin-left: 2rem;
    color: var(--color-purple-1);
    position: absolute;
    left: -4rem;
    top: 0;
  }
`;

const Tool = styled.span`
  background-color: var(--color-white-2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.8rem;
  color: var(--color-grey-1);
  margin: 0.5rem;
`;

const LiveSection = styled.section`
  text-align: center;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  background-color: var(--color-purple-1);
  color: var(--color-white-2);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    background-color: var(--color-purple-2);
  }
`;

const ProjectView = () => {
  const { id } = useParams();
  const project = data.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <TransitionAnim>
      <ProjectViewContainer>
        <TitleSection>
          <ProjectHeading>{project.heading}</ProjectHeading>
          <ProjectSubheading>{project.subheading}</ProjectSubheading>
          <Button to={project.liveLink}>LIVE LINK</Button>
        </TitleSection>
        <SwipeCarousel imgs={project.imgs} />
        <Wrapper>
          <ProjectOverview>{project.Overview}</ProjectOverview>
          <ToolsUsedSection>
            <ToolsHeading>Tools Used</ToolsHeading>
            <ToolsList>
              {project.techonlogy.map((tool, index) => (
                <Tool key={index}>{tool}</Tool>
              ))}
            </ToolsList>
          </ToolsUsedSection>
          <FeatureSection>
            <FeatureHeading>Features</FeatureHeading>
            <FeaturesList>
              {project.features.map((feature, index) => (
                <Feature key={index}>{feature}</Feature>
              ))}
            </FeaturesList>
          </FeatureSection>
          <LiveSection>
            <Button to={project.liveLink}>LIVE LINK</Button>
            <Button to={project.githubLink}>GITHUB</Button>
            <ButtonBack to="/projects">GO BACK</ButtonBack>
          </LiveSection>
        </Wrapper>
        <Footer />
      </ProjectViewContainer>
    </TransitionAnim>
  );
};

export default ProjectView;
