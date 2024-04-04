import { apiClient, apiRoutes } from "src/utils/axios/api";
import { QUIZ_TYPE } from "src/utils/enums/api";

export const getQuizzesByType = async (type: string) => {
  const title = QUIZ_TYPE[type as keyof typeof QUIZ_TYPE] || "";
  const url = `${apiRoutes.quiz}?title=${title}&limit=10`;
  return (await apiClient.get(url)).data as Api.Quiz[];
};
