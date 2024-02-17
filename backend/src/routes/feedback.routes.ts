import express from "express";

import { feedbackController } from "../controllers/feedback.controllers";

const router = express.Router();

// fetch the feedbacks
router.get("/", feedbackController.getAllFeedbacks);
// fetch a single feedback
router.get("/:id", feedbackController.getFeedbackById);
// create a feedback
router.post("/", feedbackController.createFeedback);
// update a feedback
router.patch("/:id", feedbackController.updateFeedback);
// delete a feedback
router.delete("/:id", feedbackController.deleteFeedback);

export default router;
