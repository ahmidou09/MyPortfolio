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
  position: fixed;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 50%;
  top: 15%;
  left: 2rem;
  background: none;
  border: none;
  color: var(--color-white-2);
  background-color: var(--color-purple-1);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 9999;
  padding: 0.5rem 1rem;

  span {
    margin: 0.5rem;
    transition: transform 0.5s;
  }

  &:hover span {
    transform: translateX(-0.5rem);
  }
`;

const Wrapper = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 6rem 2rem 5rem 2rem;
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
  position: relative;
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

const NextProjectSection = styled.div`
  color: var(--color-white-2);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-primary-2);

  h3 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    text-align: center;
    justify-self: flex-start;
  }
`;

const NextProjectButton = styled(Link)`
  background-color: var(--color-blue-1);
  color: var(--color-white-2);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  h2 {
    font-size: 12rem;
    transition: all 0.5s ease-in-out;
    font-weight: 300;
    text-decoration: underline var(--color-purple-1) 4px;
  }

  &:hover > span {
    transform: translateY(-30%);
    opacity: 1;
    width: 30rem;
    height: 30rem;
  }

  &:hover h2 {
    opacity: 0.3;
  }
`;

const ProjectPreview = styled.span`
  transform: translateY(-60%);
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  transition: all 0.5s ease-in-out;
`;

const ProjectView = () => {
  const { id } = useParams();
  const projectIndex = data.findIndex((proj) => proj.id.toString() === id);
  const project = data[projectIndex];
  const nextProject = data[(projectIndex + 1) % data.length];

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <TransitionAnim>
      <ProjectViewContainer>
        <TitleSection>
          <ProjectHeading>{project.heading}</ProjectHeading>
          <ProjectSubheading>{project.subheading}</ProjectSubheading>
          <Button to={project.liveLink} target="_blank">
            LIVE LINK
          </Button>
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
            <Button to={project.liveLink} target="_blank">
              LIVE LINK
            </Button>
            <Button to={project.githubLink} target="_blank">
              GITHUB
            </Button>
            <ButtonBack to="/projects" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              <span>←</span> GO BACK
            </ButtonBack>
          </LiveSection>
        </Wrapper>
        <NextProjectSection>
          <h3>Next Case</h3>
          {nextProject && (
            <NextProjectButton
              to={`/projects/${nextProject.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <h2> {nextProject.heading}</h2>
              <ProjectPreview
                style={{ backgroundImage: `url(${nextProject.imgSrc})` }}
              />
            </NextProjectButton>
          )}
        </NextProjectSection>
        <Footer />
      </ProjectViewContainer>
    </TransitionAnim>
  );
};

export default ProjectView;
