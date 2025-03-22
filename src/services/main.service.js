import axios from "axios";
const baseURL = "http://localhost:8080";
const timeout = parseInt("5000", 10);
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("Error in response: ", error);
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
