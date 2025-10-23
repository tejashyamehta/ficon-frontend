import { Link } from "react-router-dom"
import "./Home.css"

const cardStyle = {
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "16px",
  background: "#ffffff",
}

const titleStyle = {
  fontSize: "20px",
  fontWeight: 600,
  color: "#1e40af",
  marginBottom: "12px",
}

const bulletRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  color: "#0f172a",
  lineHeight: 1.65,
  fontSize: "15px",
}

const bulletDot = {
  color: "#2563eb",
  fontWeight: 700,
  lineHeight: 1,
  marginTop: "2px",
}

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Professional Fire & Security Solutions</h1>
              <p>
                FICON Systems provides comprehensive fire protection, detection, and security systems for industrial and
                commercial establishments across India. With over 30 years of experience, we deliver reliable solutions
                that protect lives and property.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn">
                  Our Services
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Quote
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/industrial-fire-safety.png" alt="Fire Safety Equipment" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section
        className="section services-overview"
        aria-label="Our Core Services"
        style={{ position: "relative", zIndex: 20 }}
      >
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>

          <div
            className="services-grid"
            style={{
              display: "grid",
              gap: "40px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              marginTop: "40px",
            }}
          >
            <div className="service-item" style={cardStyle}>
              <h3 style={titleStyle}>Fire Protection Systems</h3>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Hydrant, sprinkler, foam suppression solutions</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>NFPA, BIS, NBC-compliant engineering</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>MVWS, HVWS, and pre-action systems</span>
              </div>
            </div>

            <div className="service-item" style={cardStyle}>
              <h3 style={titleStyle}>Fire Detection & Alarm</h3>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Addressable and conventional control panels</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Smoke, heat, UV/IR flame, and gas detection</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Early warning with precise zoning</span>
              </div>
            </div>

            <div className="service-item" style={cardStyle}>
              <h3 style={titleStyle}>Security & Surveillance</h3>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>IP CCTV with intelligent video analytics</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Access control and intrusion systems</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>24/7 monitoring and recording</span>
              </div>
            </div>

            <div className="service-item" style={cardStyle}>
              <h3 style={titleStyle}>Maintenance & Support</h3>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Preventive maintenance programs</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>Testing and calibration services</span>
              </div>
              <div style={bulletRow}>
                <span style={bulletDot}>•</span>
                <span>24/7 emergency technical support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="section-title">Why Choose FICON Systems?</h2>
              <div className="features-list">
                <div className="feature">
                  <h4>Three Decades of Excellence</h4>
                  <p>
                    Over 30 years of specialized experience in fire safety engineering with deep understanding of
                    industrial requirements and regulatory compliance.
                  </p>
                </div>
                <div className="feature">
                  <h4>Certified Engineering Team</h4>
                  <p>
                    Our team of qualified and certified fire safety professionals brings extensive expertise to every
                    project.
                  </p>
                </div>
                <div className="feature">
                  <h4>Quality Products & Brands</h4>
                  <p>
                    Authorized dealer for leading international fire safety brands including Bosch, Honeywell, Ansul,
                    and Hochiki.
                  </p>
                </div>
                <div className="feature">
                  <h4>Complete Turnkey Solutions</h4>
                  <p>
                    From initial consultation and design to installation, commissioning, and ongoing maintenance
                    support.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-image">
              <img src="/images/placeholder-fqa5r.png" alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section industries">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-content">
            <p className="industries-intro">
              We provide specialized fire safety and security solutions tailored to the unique requirements of various
              industries:
            </p>
            <div className="industries-list">
              <div className="industry-column">
                <ul>
                  <li>Petrochemicals & Refineries</li>
                  <li>Pharmaceutical Manufacturing</li>
                  <li>Chemical Processing Plants</li>
                </ul>
              </div>
              <div className="industry-column">
                <ul>
                  <li>Commercial Buildings & Offices</li>
                  <li>Warehouses & Storage Facilities</li>
                  <li>Hotels & Hospitality Sector</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Secure Your Facility?</h2>
            <p>Contact our experts for a comprehensive fire safety assessment and customized solution.</p>
            <Link to="/contact" className="btn">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
