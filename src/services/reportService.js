import api from "../api/axios";

export const getReport = async (interviewId) => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        `/api/reports/${interviewId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};