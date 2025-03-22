import axiosInstance from "./main.service"

export const AppointmentService = {
    getAll: async () => {
        const response = axiosInstance.get("/api/appointments")
        return response
    }
}