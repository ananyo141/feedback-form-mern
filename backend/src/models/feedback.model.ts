import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: null,
  },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);
