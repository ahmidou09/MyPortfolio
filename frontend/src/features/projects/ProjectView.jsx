import React from "react";
import { useParams } from "react-router-dom";
import SwipeCarousel from "./SwipeCarousel";
import Footer from "../footer/Footer";
import TransitionAnim from "../../ui/TransitionAnim";
import {
  useGetProjectByIdQuery,
  useGetProjectsQuery,
} from "../../redux/slices/projectsApiSlice";
import Loader from "../../ui/Loader";
import { BASE_URL, UPLOAD_URL } from "../../constants";
import ProjectDetails from "./ProjectDetails";
import {
  ProjectViewContainer,
  TitleSection,
  ProjectHeading,
  ProjectSubheading,
  Button,
  NextProjectSection,
  NextProjectButton,
  ProjectPreview,
} from "./ProjectView.styles";

const ProjectView = () => {
  const { id } = useParams();
  const { data: project, isLoading, isError } = useGetProjectByIdQuery(id);
  const {
    data: projects,
    isLoading: isLoadingProjects,
    isError: isErrorProjects,
  } = useGetProjectsQuery();

  if (isLoadingProjects && isLoading) return <Loader />;
  if (isErrorProjects && isError) return <div>Error</div>;

  const projectIndex =
    projects?.findIndex((project) => project._id === id) || 0;

  const nextProject = projects?.[projectIndex + 1] || projects?.[0];

  return (
    <TransitionAnim>
      <ProjectViewContainer>
        <TitleSection>
          <ProjectHeading>{project?.heading}</ProjectHeading>
          <ProjectSubheading>{project?.subheading}</ProjectSubheading>
          <Button to={project?.liveLink} target="_blank">
            LIVE LINK {}
          </Button>
        </TitleSection>
        <SwipeCarousel
          images={project?.images.map(
            (image) => `${BASE_URL}${UPLOAD_URL}/${image}`
          )}
        />
        <ProjectDetails project={project} />
        <NextProjectSection>
          <h3>Next Case</h3>
          {nextProject && (
            <NextProjectButton
              to={`/projects/${nextProject._id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <h2> {nextProject.heading}</h2>
              <ProjectPreview
                style={{ backgroundImage: `url(${nextProject?.image}) ` }}
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
