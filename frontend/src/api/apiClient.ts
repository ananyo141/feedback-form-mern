import axios from "axios";

const baseUrl = "http://backend:3000/";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
