import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <img
            src={logo}
            alt="Divija Speciality Polymers"
            className="footer-logo"
          />
        </div>

        {/* Explore */}
        <div>
          <h4>Explore</h4>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/applications">Applications</Link>
          {/* <Link to="/industries">Industries</Link> */}
          <Link to="/contact">Contact</Link>
        </div>

        {/* Legals */}
        <div>
          <h4>Legals</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Divija Speciality Polymers · All rights reserved
      </div>
    </footer>
  )
}