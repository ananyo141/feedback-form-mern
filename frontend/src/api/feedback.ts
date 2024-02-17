import axios from "axios";

const baseUrl = "http://localhost:3000/";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const getFeedbacks = async () => {
  return apiClient.get("/feedback");
};

const createFeedback = async (feedback: any) => {
  apiClient.post("/feedback", feedback);
};

const updateFeedback = async (feedback: any) => {
  apiClient.patch(`/feedback/${feedback.id}`, feedback);
};

const deleteFeedback = async (id: string) => {
  apiClient.delete(`/feedback/${id}`);
};

export const feedbackApi = {
  getFeedbacks,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
