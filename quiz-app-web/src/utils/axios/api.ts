import axios from "axios";

export const apiClient = axios.create({ baseURL: "http://localhost:3000" });

export const apiRoutes = {
  quiz: "/quiz",
  quizReset: "/quiz/reset",
};
