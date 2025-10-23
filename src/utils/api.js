import axios from "axios"

// Create axios instance
const api = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api",
  timeout: 10000,
})

// Add auth token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken")
    if (token) {
      config.headers["x-auth-token"] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken")
      localStorage.removeItem("adminInfo")
      window.location.href = "/admin/login"
    }
    return Promise.reject(error)
  },
)

export default api
