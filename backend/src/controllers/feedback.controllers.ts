import { Request, Response } from "express";
import { Feedback } from "../models/feedback.model";

const getAllFeedbacks = async (_req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).send(feedbacks);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const getFeedbackById = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    res.status(200).send(feedback);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const createFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

const updateFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    res.status(200).send(feedback);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const deleteFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) {
      return res.status(404).send({ message: "Feedback not found" });
    }
    res.status(200).send(feedback);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

export const feedbackController = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
