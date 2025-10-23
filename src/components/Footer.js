import { Link } from "react-router-dom"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">FICON</span>
              <span className="logo-subtext">SYSTEMS</span>
            </div>
            <p>Professional fire safety and security solutions for over 30 years.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Fire Protection</li>
              <li>Fire Detection</li>
              <li>Security Systems</li>
              <li>Maintenance</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>info@ficonsystems.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FICON Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
