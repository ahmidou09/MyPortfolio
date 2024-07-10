import express from "express";
const router = express.Router();
import {
  getProjects,
  getProjectById,
  deleteProject,
  createProject,
  updateProject,
} from "../controllers/projectController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProjects).post(protect, admin, createProject);
router
  .route("/:id")
  .get(getProjectById)
  .delete(protect, admin, deleteProject)
  .put(protect, admin, updateProject);

export default router;
