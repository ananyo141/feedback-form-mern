import { useState, useEffect } from "react";
import { feedbackApi } from "../api/feedback";

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Fetch feedbacks from the backend API
    (async () => {
      try {
        const feedbacks = await feedbackApi.getFeedbacks();
        setFeedbacks(feedbacks.data);
        console.log(feedbacks.data);
      } catch (error: any) {
        console.log("Error fetching feedbacks:", error.message);
      }
    })();
  }, []);

  return (
    <div className="mx-auto p-6 bg-white w-screen rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-600">No feedbacks available</p>
      ) : (
        <ul className="grid mx-auto border rounded-xl gap-6">
          {feedbacks.map((feedback: any) => (
            <li key={feedback._id} className="rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold">{feedback.name}</span>
                <span className="text-gray-500">{feedback.rating}</span>
              </div>
              <p className="text-gray-700">
                {feedback.message || "No message provided"}
              </p>
              <div className="mt-2 flex items-center">
                <span className="text-gray-600">{feedback.email}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackPage;
