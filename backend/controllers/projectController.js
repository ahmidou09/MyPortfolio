import asyncHandler from "../middleware/asyncHandler.js";
import Project from "../models/projectModel.js";

// @ desc    get all projects or projects by category
// @ route   GET /api/projects
// @ access  public

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

// @ desc    get single project
// @ route   GET /api/projects/:id
// @ access  public

const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @ desc    delete project
// @ route   DELETE /api/projects/:id
// @ access  private/admin

const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    await project.deleteOne();
    res.json({ message: "Project removed" });
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @ desc    create project
// @ route   POST /api/projects
// @ access  private/admin

const createProject = asyncHandler(async (req, res) => {
  const project = new Project({
    user: req.user._id,
    heading: "Sample name",
    image: "/images/sample.jpg",
    images: [],
    subheading: "Sample subheading",
    overview: "Sample description",
    techonlogy: [],
    features: [],
    githubLink: "Sample category",
    liveLink: "Sample live link",
  });
  const createdProject = await project.save();
  res.status(201).json(createdProject);
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private/Admin

const updateProject = asyncHandler(async (req, res) => {
  const {
    heading,
    image,
    images,
    subheading,
    overview,
    techonlogy,
    features,
    githubLink,
    liveLink,
  } = req.body;

  console.log(req.body);
  const project = await Project.findById(req.params.id);

  if (project) {
    project.heading = heading || project.heading;
    project.image = image || project.image;
    project.images = images || project.images;
    project.subheading = subheading || project.subheading;
    project.overview = overview || project.overview;
    project.techonlogy = techonlogy || project.techonlogy;
    project.features = features || project.features;
    project.githubLink = githubLink || project.githubLink;
    project.liveLink = liveLink || project.liveLink;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

export {
  getProjects,
  getProjectById,
  deleteProject,
  createProject,
  updateProject,
};
