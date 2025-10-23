"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Clients", path: "/clients" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-brand" aria-label="FICON Systems Home">
            <img src="/images/ficon-logo.png" alt="FICON Systems" className="logo-img" />
          </Link>

          <div className={`nav-menu ${isOpen ? "nav-menu-open" : ""}`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
