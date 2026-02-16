import React from "react";
import {
  Wrapper,
  ProjectOverview,
  ToolsUsedSection,
  ToolsHeading,
  ToolsList,
  Tool,
  FeatureSection,
  FeatureHeading,
  FeaturesList,
  Feature,
  LiveSection,
  Button,
} from "./ProjectView.styles";

const ProjectDetails = ({ project }) => {
  return (
    <Wrapper>
      <ProjectOverview>{project?.overview}</ProjectOverview>
      <ToolsUsedSection>
        <ToolsHeading>Tools Used</ToolsHeading>
        <ToolsList>
          {project?.techonlogy.map((tool, index) => (
            <Tool key={index}>{tool}</Tool>
          ))}
        </ToolsList>
      </ToolsUsedSection>
      <FeatureSection>
        <FeatureHeading>Features</FeatureHeading>
        <FeaturesList>
          {project?.features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </FeaturesList>
      </FeatureSection>
      <LiveSection>
        <Button to={project?.liveLink} target="_blank">
          LIVE LINK
        </Button>
        <Button to={project?.githubLink} target="_blank">
          GITHUB
        </Button>
      </LiveSection>
    </Wrapper>
  );
};

export default ProjectDetails;
