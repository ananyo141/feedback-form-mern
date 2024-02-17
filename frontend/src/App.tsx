import { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log("Form submitted:", formData);
  };

  return (
    <main
      style={{
        backgroundImage:
          "url('https://unsplash.com/photos/ANY0Pyj5X8Y/download')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "300px",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="flex flex-col min-h-screen border bg-blue-50 h-full justify-center items-center min-w-fit w-screen"
    >
      <div className="max-w-md opacity-80 backdrop-blur-3xl mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl text-red-500 font-semibold mb-4">
          School Trip Feedback Form
        </h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-600"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="" disabled>
              Select a rating
            </option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
          </select>
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-600"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </main>
  );
};

export default FeedbackForm;
