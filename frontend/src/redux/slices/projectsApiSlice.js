import { apiSlice } from "./apiSlice";
import { PROJECTS_URL, UPLOAD_URL } from "../../constants";

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: PROJECTS_URL,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Project"],
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `${PROJECTS_URL}/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    createProject: builder.mutation({
      query: () => ({
        url: PROJECTS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Project"],
    }),
    uploadSingleProjectImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}single`,
        method: "POST",
        body: data,
      }),
    }),
    uploadMultipleProjectImages: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}multiple`,
        method: "POST",
        body: data,
      }),
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `${PROJECTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
    updateProject: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${PROJECTS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
  useCreateProjectMutation,
  useUploadSingleProjectImageMutation,
  useUploadMultipleProjectImagesMutation,
} = projectsApiSlice;
