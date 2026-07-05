import api from "../api/axios";

export const registerUser = async (userData) => {
    const response = await api.post("/api/auth/register", userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await api.post("/api/auth/login", userData);
    return response.data;
};

export const getProfile = async (token) => {

    const response = await api.get("/api/auth/profile", {

        headers: {
            Authorization: `Bearer ${token}`
        }

    });

    return response.data;
};