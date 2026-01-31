import FactoryIcon from '@mui/icons-material/Factory'
import ScienceIcon from '@mui/icons-material/Science'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FlagIcon from '@mui/icons-material/Flag'
import './AboutUs.css'

// Images
import Company from '../assets/Company.jpg'
import Facility from '../assets/Facility.jpg'
import Research from '../assets/Research.jpg'

export default function AboutUs() {
  return (
    <section className="about">
      {/* =====================
          Header
      ===================== */}
      <div className="about-header">
        <span className="about-eyebrow">About Us</span>
        <h2>Divija Speciality Polymers</h2>

        <p className="about-intro">
          Divija Speciality Polymers is a specialty resin manufacturing company
          delivering high-quality polymer systems for decorative, industrial,
          and specialty coating applications.
        </p>
      </div>

      {/* =====================
          Company Overview
      ===================== */}
      <div className="about-content">
        <p>
          We manufacture a comprehensive range of <strong>synthetic resins</strong>,
          including Aromatic & Aliphatic PU Hardeners, Blocked Isocyanides,
          Epoxy Hardeners, Acrylics, Alkyds, Emulsions, Thickeners, Additives,
          Industrial Paints, Clear Coats, and Epoxy & PU Adhesives.
        </p>

        <p>
          Our manufacturing facility is located at <strong>Khudus near Akluj,
          Maharashtra</strong>. Established on <strong>09 August 2021</strong>,
          we are recognised for consistent product quality, technical expertise,
          and dependable customer support.
        </p>

        <p>
          Divija Speciality Polymers operates as an
          <strong> ISO 9001 certified company</strong>, supported by in-house
          Research & Development and Quality Control laboratories.
        </p>
      </div>

      {/* =====================
          Vision & Mission (DISTINCT STYLE)
      ===================== */}
      <div className="vision-mission">
        <div className="vm-card vision">
          <VisibilityIcon />
          <h3>Our Vision</h3>
          <p>
            To establish Divija Speciality Polymers as a trusted resin
            manufacturing company recognised for quality, innovation,
            and responsible growth across domestic and global markets.
          </p>
        </div>

        <div className="vm-card mission">
          <FlagIcon />
          <h3>Our Mission</h3>
          <p>
            To design and manufacture reliable polymer systems through
            continuous improvement, disciplined processes, and close
            collaboration with customers—delivering consistent performance
            and long-term value.
          </p>
        </div>
      </div>

      {/* =====================
          Facilities
      ===================== */}
      <div className="facility-grid">
        <div className="facility-card">
          <div className="facility-section-title">Manufacturing</div>

          <div className="facility-header">
            <FactoryIcon />
            <h3>Manufacturing Facility</h3>
          </div>

          <ul>
            <li>SS316 Jacketed Reactor – 300 kg capacity</li>
            <li>Pilot Plant Glass Reactor – 350 kg</li>
            <li>SS316 Mixing Tank – 150 kg with VFD</li>
            <li>High-speed dispersers and bead mills</li>
            <li>Cooling tower – 100 TR</li>
            <li>Semi-automatic filling machines (30 g to 1 L)</li>
          </ul>
        </div>

        <div className="facility-card">
          <div className="facility-section-title">Research & Development</div>

          <div className="facility-header">
            <ScienceIcon />
            <h3>R &amp; D Facility</h3>
          </div>

          <ul>
            <li>Acid, amine, NCO & epoxy value testing</li>
            <li>Viscosity, density & boiling range analysis</li>
            <li>Glass reactors for formulation development</li>
            <li>Laboratory ovens, balances & heating systems</li>
          </ul>
        </div>
      </div>

      {/* =====================
          Gallery
      ===================== */}
      <div className="about-gallery">
        <div className="gallery-item">
          <img src={Company} alt="Company Premises" />
          <span>Company Premises</span>
        </div>

        <div className="gallery-item">
          <img src={Facility} alt="Manufacturing Facility" />
          <span>Manufacturing Facility</span>
        </div>

        <div className="gallery-item">
          <img src={Research} alt="R&D Laboratory" />
          <span>R &amp; D Laboratory</span>
        </div>
      </div>
    </section>
  )
}
