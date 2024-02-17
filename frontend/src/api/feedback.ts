import apiClient from "./apiClient";

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
