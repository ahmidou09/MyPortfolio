import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import FormFields from "../../ui/FormFields";
import Loader from "../../ui/Loader";
import {
  useGetProjectByIdQuery,
  useUpdateProjectMutation,
  useUploadSingleProjectImageMutation,
  useUploadMultipleProjectImagesMutation,
} from "../../redux/slices/projectsApiSlice";

const UpdateProject = () => {
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const {
    data: project,
    isLoading,
    isError,
    refetch,
  } = useGetProjectByIdQuery(projectId);
  const [updateProject, { isLoading: isUpdating }] = useUpdateProjectMutation();
  const [uploadSingleProjectImage, { isLoading: isUploadingSingle }] =
    useUploadSingleProjectImageMutation();
  const [uploadMultipleProjectImages, { isLoading: isUploadingMultiple }] =
    useUploadMultipleProjectImagesMutation();

  const [formFields, setFormFields] = useState({
    heading: "",
    image: "",
    images: [],
    subheading: "",
    overview: "",
    techonlogy: [],
    features: [],
    githubLink: "",
    liveLink: "",
  });

  useEffect(() => {
    if (project) {
      setFormFields({
        heading: project.heading || "",
        image: project.image ? project.image : "",
        images: project.images?.map((file) => file) || [],
        subheading: project.subheading || "",
        overview: project.overview || "",
        techonlogy: project.techonlogy || [],
        features: project.features || [],
        githubLink: project.githubLink || "",
        liveLink: project.liveLink || "",
      });
    }
  }, [project]);

  const handleInputChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [id]:
        type === "file"
          ? id === "images"
            ? Array.from(files)
            : files[0]
          : id === "colors" || id === "sizes"
          ? value.split(",").map((item) => item.trim())
          : type === "number"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProject = { ...formFields };

      // Handle image upload
      if (updatedProject.image instanceof File) {
        const formData = new FormData();
        formData.append("image", updatedProject.image);
        const res = await uploadSingleProjectImage(formData).unwrap();
        updatedProject.image = res.image;
      }

      // Handle additional images upload
      if (
        Array.isArray(updatedProject.images) &&
        updatedProject.images.length &&
        updatedProject.images[0] instanceof File
      ) {
        const imagesFormData = new FormData();
        updatedProject.images.forEach((file) =>
          imagesFormData.append("images", file)
        );
        const res = await uploadMultipleProjectImages(imagesFormData).unwrap();
        updatedProject.images = res.images;
      }

      await updateProject({ id: projectId, ...updatedProject }).unwrap();
      toast.success("Project updated successfully");
      refetch();
      navigate(`/admin/projects`);
    } catch (error) {
      console.error("Upload Error:", error);
      toast.error(error?.data?.message || error.error);
    }
  };

  const fields = [
    { id: "heading", label: "Heading", type: "text", required: true },
    { id: "image", label: "Image", type: "file", required: false },
    {
      id: "images",
      label: "Additional Images",
      type: "file",
      multiple: true,
      required: false,
    },
    { id: "subheading", label: "Subheading", type: "text", required: true },
    { id: "overview", label: "Overview", type: "text", required: true },
    {
      id: "techonlogy",
      label: "techonlogy",
      type: "text",
      required: false,
    },
    { id: "features", label: "Features", type: "text", required: false },
    { id: "githubLink", label: "Github Link", type: "text", required: false },
    { id: "liveLink", label: "Live Link", type: "text", required: false },
  ];

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error loading project details</div>
      ) : (
        <>
          <Link to="/admin/projects">Go Back</Link>
          <FormContainer onSubmit={handleSubmit}>
            <h2>Edit Project</h2>
            <FormFields
              fields={fields}
              formFields={formFields}
              handleInputChange={handleInputChange}
            />
            <Button type="submit" disabled={isUpdating}>
              {isUpdating ? "Updating..." : "Update Project"}
            </Button>
          </FormContainer>
        </>
      )}
      {(isUploadingSingle || isUploadingMultiple) && <Loader />}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-white);
`;

const FormContainer = styled.form`
  max-width: 60rem;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  background-color: var(--color-primary-1);
  color: var(--color-white);
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-button-red-1);
  }
`;

export default UpdateProject;
