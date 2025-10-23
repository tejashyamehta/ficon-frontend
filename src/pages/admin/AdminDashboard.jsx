"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaUsers, FaProjectDiagram, FaCheckCircle, FaExclamationTriangle, FaEye, FaEdit } from "react-icons/fa"
import axios from "axios"
import { toast } from "react-toastify"
import "./AdminDashboard.css"

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    newContacts: 0,
    totalProjects: 0,
    completedProjects: 0,
  })
  const [recentContacts, setRecentContacts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get("/api/admin/dashboard")
      if (response.data.success) {
        setStats(response.data.data.stats)
        setRecentContacts(response.data.data.recentContacts)
      }
    } catch (error) {
      console.error("Dashboard error:", error)
      toast.error("Failed to load dashboard data")
    } finally {
      setLoading(false)
    }
  }

  const getStatusBadge = (status) => {
    const badges = {
      new: "badge-warning",
      contacted: "badge-info",
      "in-progress": "badge-info",
      completed: "badge-success",
    }
    return badges[status] || "badge-secondary"
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="container">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="dashboard-header"
        >
          <h1>Admin Dashboard</h1>
          <p>Welcome to FICON Systems admin panel</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="stat-card"
          >
            <div className="stat-icon bg-primary">
              <FaUsers />
            </div>
            <div className="stat-content">
              <h3>{stats.totalContacts}</h3>
              <p>Total Contacts</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="stat-card"
          >
            <div className="stat-icon bg-warning">
              <FaExclamationTriangle />
            </div>
            <div className="stat-content">
              <h3>{stats.newContacts}</h3>
              <p>New Contacts</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="stat-card"
          >
            <div className="stat-icon bg-info">
              <FaProjectDiagram />
            </div>
            <div className="stat-content">
              <h3>{stats.totalProjects}</h3>
              <p>Total Projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="stat-card"
          >
            <div className="stat-icon bg-success">
              <FaCheckCircle />
            </div>
            <div className="stat-content">
              <h3>{stats.completedProjects}</h3>
              <p>Completed Projects</p>
            </div>
          </motion.div>
        </div>

        {/* Recent Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="recent-contacts"
        >
          <div className="section-header">
            <h2>Recent Contacts</h2>
            <a href="/admin/contacts" className="btn btn-primary btn-sm">
              View All
            </a>
          </div>

          <div className="contacts-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Industry</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentContacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>
                      <div className="contact-info">
                        <strong>{contact.name}</strong>
                        <small>{contact.email}</small>
                      </div>
                    </td>
                    <td>{contact.company}</td>
                    <td>
                      <span className="industry-tag">{contact.industry}</span>
                    </td>
                    <td>
                      <span className={`badge ${getStatusBadge(contact.status)}`}>{contact.status}</span>
                    </td>
                    <td>{formatDate(contact.createdAt)}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-icon" title="View">
                          <FaEye />
                        </button>
                        <button className="btn-icon" title="Edit">
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminDashboard
