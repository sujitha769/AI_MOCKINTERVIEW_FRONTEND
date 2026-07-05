import api from "../api/axios";

export const getHistory = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/api/interviews/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};