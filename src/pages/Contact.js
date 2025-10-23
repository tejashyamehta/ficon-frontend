"use client"

import { useState } from "react"
import axios from "axios"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("/api/contact", formData)
      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      alert("Error sending message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="contact">
        <div className="container">
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We will contact you soon.</p>
            <button onClick={() => setSuccess(false)} className="btn">
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our fire safety experts</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to enhance your fire safety? Contact us for a consultation.</p>

            <div className="contact-details">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 87654 32109</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@ficonsystems.com</p>
                  <p>projects@ficonsystems.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Office</h4>
                  <p>Mumbai, Maharashtra</p>
                  <p>India - 400001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Company *</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
              </div>

              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
