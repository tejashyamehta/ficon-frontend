"use client";

import { useState } from "react";
import {
  FaFire,
  FaShieldAlt,
  FaCogs,
  FaFlask,
  FaTint,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaTools,
  FaBroadcastTower, // ← missing before
} from "react-icons/fa";
import "./Services.css";

const services = {
  fire: {
    sections: [
      {
        title: "Fire Protection Systems",
        subsections: [
          {
            name: "Water-based Systems",
            description:
              "Includes Hydrant Systems, Sprinkler Systems, High/Medium Velocity Water Spray Systems, Pre-action Systems, and Foam Systems. Designed as per NFPA, Bureau of Indian Standards & National Building Code.",
          },
        ],
      },
    ],
  },

  detection: {
    sections: [
      {
        title: "Fire Detection & Public Address Systems",
        subsections: [
          {
            name: "Conventional & Intelligent Systems",
            description:
              "Conventional, microprocessor-based, and intelligent addressable fire detection systems from brands like Bosch, Tyco, and Notifier.",
          },
          {
            name: "Special Detection",
            description:
              "Includes Smoke, Flame, Gas, Linear Heat Detection, IR/UV Flame Detection, High Sensitivity Early Warning Systems, and Integrated Graphical Systems.",
          },
          {
            name: "Public Address Systems",
            description:
              "Analogue & Digital PA Systems integrated with fire detection for real-time alerts.",
          },
        ],
      },
    ],
  },

  gas: {
    sections: [
      {
        title: "Gas-based Fire Suppression Systems",
        subsections: [
          {
            name: "Clean Agent Systems",
            description:
              "Novec 1230, FM-200, Inergen, CO2 Flooding, and FK5-1-12 systems for protecting critical infrastructure.",
          },
          {
            name: "Automatic Aerosol Systems",
            description:
              "Compact and efficient aerosol suppression systems for rapid extinguishing.",
          },
          {
            name: "Special Applications",
            description:
              "Restaurant kitchen suppression systems and DLP/ILP tubing-based fire suppression systems.",
          },
        ],
      },
    ],
  },

  chemical: {
    sections: [
      {
        title: "Dry Chemical Systems",
        subsections: [
          {
            name: "Total Flooding Systems",
            description:
              "IND-X Dry Chemical Agent systems to combat Class A, B & C fires in industrial and high-risk facilities.",
          },
        ],
      },
    ],
  },

  water: {
    sections: [
      {
        title: "Water Mist Systems",
        subsections: [
          {
            name: "Advanced Water Mist",
            description:
              "Low water usage suppression systems from brands like Fike & Komtes, effective in sensitive areas where sprinklers aren’t feasible.",
          },
        ],
      },
    ],
  },

  security: {
    sections: [
      {
        title: "Security Systems",
        subsections: [
          {
            name: "CCTV & Surveillance",
            description:
              "IP/Analogue Fiber CCTV, intruder detection, home automation, and video door phones.",
          },
          {
            name: "Access Control",
            description:
              "IP-based Time Attendance, Biometric & Card-based systems with multi-level authorization.",
          },
        ],
      },
    ],
  },

  turnkey: {
    sections: [
      {
        title: "Turnkey Project Capabilities",
        subsections: [
          {
            name: "End-to-End Solutions",
            description:
              "Design, supply, and installation of fire protection, detection, and security systems with in-house engineering expertise.",
          },
        ],
      },
    ],
  },

  consultancy: {
    sections: [
      {
        title: "Consultancy & Training",
        subsections: [
          {
            name: "Fire Risk Assessments",
            description:
              "Comprehensive consultancy for fire & security compliance, tailored designs, and fire safety audits.",
          },
          {
            name: "Training Programs",
            description:
              "Operator and staff training to ensure effective system use and emergency preparedness.",
          },
        ],
      },
    ],
  },

  maintenance: {
    sections: [
      {
        title: "Maintenance & Support",
        subsections: [
          {
            name: "Annual Maintenance Contracts",
            description:
              "Service contracts for fire detection, suppression, and security systems ensuring ongoing performance and reliability.",
          },
        ],
      },
    ],
  },
};

const serviceButtons = [
  { key: "fire", label: "FIRE Protection Systems", icon: FaFire },
  { key: "detection", label: "Fire Detection Systems & Public Address Systems", icon: FaBroadcastTower },
  { key: "gas", label: "Gas-based Systems", icon: FaCogs },
  { key: "chemical", label: "Dry Chemical Systems", icon: FaFlask },
  { key: "water", label: "Water Mist Systems", icon: FaTint },
  { key: "security", label: "Security Systems", icon: FaShieldAlt },
  { key: "turnkey", label: "Turnkey Project Capabilities", icon: FaProjectDiagram },
  { key: "consultancy", label: "Consultancy and Training", icon: FaChalkboardTeacher },
  { key: "maintenance", label: "Maintenance and Support", icon: FaTools },
];

export default function Services() {
  const [activeService, setActiveService] = useState("fire"); // ← define state

  return (
    <div className="services-container">
      <div className="services-layout">
        {/* Sidebar Navigation */}
        <div className="services-sidebar">
          <div className="sidebar-header">
            <h2>SOLUTIONS Offered</h2>
            <div className="header-underline"></div>
          </div>

          <div className="service-buttons">
            {serviceButtons.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                className={`service-btn ${activeService === key ? "active" : ""}`}
                onClick={() => setActiveService(key)}
              >
                <Icon className="service-icon" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="services-content">
          <div className="content-sections">
            {services[activeService].sections.map((section, index) => (
              <div key={index} className="content-section">
                <h3 className="section-title">
                  {section.title}
                  <div className="section-underline"></div>
                </h3>

                <div className="subsections">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="subsection">
                      <h4 className="subsection-title">{subsection.name}</h4>
                      <p className="subsection-description">{subsection.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
