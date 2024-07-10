import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useDeleteProjectMutation,
} from "../../redux/slices/projectsApiSlice";
import Errors from "../../ui/Errors";
import Loader from "../../ui/Loader";
import { toast } from "react-toastify";
import TableItems from "../../ui/TableItems";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { BASE_URL, UPLOAD_URL } from "../../constants";

function ProjectList() {
  const {
    data: projects,
    isLoading: loadingProjects,
    isError: error,
    refetch,
  } = useGetProjectsQuery();

  const [createProject, { isLoading: loadingCreateProject }] =
    useCreateProjectMutation();

  const [deleteProject, { isLoading: loadingDeleteProject }] =
    useDeleteProjectMutation();

  const createProjectHandler = async () => {
    try {
      if (window.confirm("Are you sure you want to create a new project?")) {
        await createProject();
        refetch();
        toast.success("Project created successfully");
      }
    } catch (err) {
      toast.error(err?.data?.message || "An error occurred");
    }
  };

  const deleteHandler = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this project?")) {
        await deleteProject(id);
        refetch();
        toast.success("Project deleted successfully");
      }
    } catch (error) {
      toast.error(error.data.message || "An error occurred");
    }
  };

  const columns = [
    { key: "_id", title: "ID" },
    { key: "createdAt", title: "Date" },
    { key: "image", title: "Image" },
    { key: "heading", title: "Heading" },
    { key: "actions", title: "Actions" },
  ];

  const renderProjectRow = (project) => (
    <tr key={project._id}>
      <td>{project._id}</td>
      <td>{new Date(project.createdAt).toLocaleDateString()}</td>
      <td>
        <img
          src={`${BASE_URL}${UPLOAD_URL}/${project.image}`}
          alt={project.heading}
          style={{ width: "50px", height: "50px" }}
        />
      </td>
      <td>
        <Link to={`/projects/${project._id}`}>{project.heading}</Link>
      </td>

      <td>
        <ButtonWrapper>
          <Button>
            <Link to={`/admin/project/${project._id}/edit`}>
              <FaRegEdit />
            </Link>
          </Button>
          <Button
            disabled={loadingDeleteProject}
            onClick={() => deleteHandler(project._id)}
          >
            <MdDeleteOutline />
          </Button>
        </ButtonWrapper>
      </td>
    </tr>
  );

  return (
    <Container>
      {loadingProjects ? (
        <Loader />
      ) : error ? (
        <Errors message="An error occurred" />
      ) : (
        <>
          <Header>
            <h1>Projects</h1>
            <Button onClick={createProjectHandler}>Add Project</Button>
          </Header>
          <TableItems
            data={projects}
            columns={columns}
            renderItem={renderProjectRow}
            itemPerPage={projects.length}
          />
        </>
      )}

      {loadingCreateProject && <Loader />}
      {error && <Errors message="An error occurred" />}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  color: var(--color-white);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: var(--color-button-red-1);
  color: var(--color-white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-button-red-2);
  }
`;

export default ProjectList;
