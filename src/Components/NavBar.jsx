import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/about">DVITHRO</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto">
            <NavLink end to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/free-mvp" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Free MVP
            </NavLink>            
            <NavLink to="/services" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
