import "./About.css"

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="page-header">
          <h1>About FICON Systems</h1>
          <p>Your trusted partner in fire safety and security solutions</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              FICON Systems is a leading provider of fire safety and security solutions with over 30 years of experience
              in the industry. We specialize in designing, supplying, and installing comprehensive fire protection
              systems for industrial and commercial establishments across India.
            </p>
            <p>
              Our team of certified engineers and technicians work closely with clients to deliver customized solutions
              that meet the highest safety standards and regulatory requirements.
            </p>
          </div>

          <div className="about-image">
            <img src="/images/placeholder-8ro9h.png" alt="Our Team" />
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We use only the highest quality products and materials from trusted manufacturers.</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>Our systems are designed and installed to provide dependable protection when you need it most.</p>
            </div>
            <div className="value-card">
              <h3>Expertise</h3>
              <p>Our certified professionals bring decades of experience to every project.</p>
            </div>
            <div className="value-card">
              <h3>Service</h3>
              <p>We provide comprehensive support from initial consultation to ongoing maintenance.</p>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h2>Our Track Record</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Expert Engineers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
