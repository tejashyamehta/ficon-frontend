"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import "./AdminLogin.css"

const AdminLogin = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { email, password } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post("/api/admin/login", formData)

      if (response.data.success) {
        // Store token and admin info
        localStorage.setItem("adminToken", response.data.token)
        localStorage.setItem("adminInfo", JSON.stringify(response.data.admin))

        // Set axios default header
        axios.defaults.headers.common["x-auth-token"] = response.data.token

        setIsAuthenticated(true)
        toast.success("Login successful!")
        navigate("/admin/dashboard")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error(error.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <img src="/images/ficon-logo.png" alt="FICON Systems" className="login-logo" />
            <h2>Admin Login</h2>
            <p>Access the FICON Systems admin panel</p>
          </div>

          <form onSubmit={onSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="login-footer">
            <p>Default credentials:</p>
            <p>
              <strong>Email:</strong> admin@ficonsystems.com
            </p>
            <p>
              <strong>Password:</strong> admin123456
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
