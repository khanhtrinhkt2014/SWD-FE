import axiosInstance from "./main.service"

export const UserService = {
    getAll: async () => {
        const response = axiosInstance.get("/getAll")
        return response
    },
    register: async (formData) => {
        const response = axiosInstance.post("/register", formData)
        return response
    },
    login: async (formData) => {
        const response = axiosInstance.post("/login", formData)
        return response
    }
}