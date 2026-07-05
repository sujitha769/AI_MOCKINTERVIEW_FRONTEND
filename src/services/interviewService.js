import api from "../api/axios";

export const startInterview = async (request) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/api/interviews/start",
        request,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};

export const uploadResume = async (interviewId, file) => {

    const token = localStorage.getItem("token");

    const formData = new FormData();

    formData.append("interviewId", interviewId);
    formData.append("resume", file);

    const response = await api.post(
        "/api/interviews/upload-resume",
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};


export const submitAnswer = async (request) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/api/interviews/answer",
        request,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};