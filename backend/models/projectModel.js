import mongoose from "mongoose";

// Project Schema
const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    heading: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], required: true },
    subheading: { type: String, required: true },
    overview: { type: String, required: true },
    techonlogy: { type: [String], required: true },
    features: { type: [String], required: true },
    githubLink: { type: String, required: true },
    liveLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
