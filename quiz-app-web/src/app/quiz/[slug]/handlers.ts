import { apiClient, apiRoutes } from "src/utils/axios/api";

export const getQuizzesByType = async (type: string) => {
  const url = `${apiRoutes.quiz}?type=${type}&limit=10`;
  return (await apiClient.get(url)).data as Api.Quiz[];
};
