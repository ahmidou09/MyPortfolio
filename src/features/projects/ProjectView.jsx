import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import projects from "../../assets/json/data/links.json";

const ProjectViewContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ProjectHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectSubheading = styled.h2`
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectPoster = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    width: 60%;
  }
`;

const ProjectOverview = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const ProjectTechnologies = styled.div`
  margin-bottom: 2rem;
`;

const Technology = styled.span`
  font-size: 1.4rem;
  background-color: #eee;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: 1rem;
`;

const ProjectView = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === +id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <ProjectViewContainer>
      <ProjectHeading>{project.heading}</ProjectHeading>
      <ProjectSubheading>{project.subheading}</ProjectSubheading>
      <ProjectPoster>
        <img src={project.imgSrc} alt={project.subheading} />
      </ProjectPoster>
      <ProjectOverview>{project.Overview}</ProjectOverview>
      <div>
        <h3>Technologies Used:</h3>
        <ProjectTechnologies>
          {project.techonlogy.map((tech, index) => (
            <Technology key={index}>{tech}</Technology>
          ))}
        </ProjectTechnologies>
      </div>
    </ProjectViewContainer>
  );
};

export default ProjectView;
