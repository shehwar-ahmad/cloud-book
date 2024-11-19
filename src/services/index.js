import axios from "axios";

let backendPort = process.env.REACT_APP_BACKEND_PORT || 3001;

const apiInstance = axios.create({
  baseURL: "http://localhost:" + backendPort,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
