import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../assets/json/data/links.json";

const ProjectViewContainer = styled.div`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 768px;
`;

const TitleSection = styled.section`
  text-align: center;
  color: var(--color-grey-1);
  padding: 4rem 0;
`;

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectSubheading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ProjectPoster = styled.img`
  width: 100%;
  border-radius: 4px;
  margin-bottom: 2rem;
`;

const ProjectOverview = styled.section`
  font-size: 1rem;
  color: var(--color-grey-1);
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const ToolsUsedSection = styled.section`
  margin: 2rem 0;
`;

const ToolsHeading = styled.h3`
  font-size: 1.5rem;
  color: var(--color-grey-1);
  margin-bottom: 1rem;
`;

const ToolsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Tool = styled.span`
  background-color: var(--color-white-2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
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
    <ProjectViewContainer>
      <TitleSection>
        <ProjectHeading>{project.heading}</ProjectHeading>
        <ProjectSubheading>{project.subheading}</ProjectSubheading>
      </TitleSection>
      <ProjectPoster src={project.imgSrc} alt={`${project.heading} image`} />
      <ProjectOverview>{project.Overview}</ProjectOverview>
      <ToolsUsedSection>
        <ToolsHeading>Tools Used</ToolsHeading>
        <ToolsList>
          {project.techonlogy.map((tool, index) => (
            <Tool key={index}>{tool}</Tool>
          ))}
        </ToolsList>
      </ToolsUsedSection>
      <LiveSection>
        <Button to={project.liveLink}>LIVE LINK</Button>
        <Button to="/projects">GO BACK</Button>
      </LiveSection>
    </ProjectViewContainer>
  );
};

export default ProjectView;
