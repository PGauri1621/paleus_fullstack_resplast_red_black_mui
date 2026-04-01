import FactoryIcon from '@mui/icons-material/Factory'
import ScienceIcon from '@mui/icons-material/Science'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FlagIcon from '@mui/icons-material/Flag'
import './AboutUs.css'

// Images
import Company from '../assets/Company.jpg'
import Facility from '../assets/Facility.jpg'
import Research from '../assets/Research.png'

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
         Divija specialty polymers is a specialty resin & Paints manufacturing company delivering high-quality polymer systems 
         for decorative, industrial, constructions chemicals, floor coating and specialty coating applications.
        </p>
      </div>

      {/* =====================
          Company Overview
      ===================== */}
      <div className="about-content">
        <p>
        we manufacture a comprehensive range of systetic resins, including aromatic & aliphatic PU Hardeners, blocked isocynanides, epoxy hardeners, acrylics, alkyds, amino, constructions chemicals, industrial paints & thinners, PVC solvents cements, additives, 
        wax dispersion agent, PU clear, Mivan & automotive clear coats,  Epoxy & PU Adhesives & some specialty products..
        </p>

        <p>
         Our manufacturing facility is located at Khudus near akluj, maharashtra. Established on 09 august 2021, 
         we are recognised for consistent product quality, technical expertise and dependable customer support. 
        </p>

        <p>
          Divija specialty polymers operates as an ISO 9001-2015 Certified company, 
          supported by in-house Research & Development & quality control laboratories.
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
            To establish Divija Specialty polymers as a trusted resins & paints manufacturing company recognised for quality, 
            innovation and responsible growth across domestic and global markets.
          </p>
        </div>

        <div className="vm-card mission">
          <FlagIcon />
          <h3>Our Mission</h3>
          <p>
           To Design and manufacture reliable polymer systems through continuous improvement, 
           disciplined processes, and close collaboration with customers delivering consistent performance and long-term value.
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
            <li>SS316 Jacketed Reactor – 300 kg capacity.</li>
            <li>Pilot Plant Glass Reactor – 350 kg</li>
            <li> SS316 Reactor Limpet Coil + Jacket Capacity – 1600 kg with Monomers & catalyst Tank for addition.</li>
            <li>SS316 Reactor Limpet coil + Jacket, capacity – 2000 kg with Monomers & catalyst Tank for addition.</li>
            <li>Load cell tank for Acurate charging of RM’S to Reactors & Monomers tanks.</li>
            <li>150 kg SS316 Mixing tank with cowl blade stirrer & VFD.</li>
            <li> High speed Dispersers.</li>
            <li> Beed Mills –  200 kg, 100 kg, 50 kg, 20 kg & 2 ltr.</li>
            <li>SS304 Mixing tanks – 100 kg, 200 kg & 500 kg.</li>
            <li>Cooling tower – 100 TR</li>
            <li>Thermopack oil heater 2000 kilo cal/hrs</li>
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
            <li> All type of laboratory glass ware to check acid value, amine value, NCO%, Epoxy value & free formaldehyde content etc.</li>
            <li>Electrical & manual balances</li>
            <li> Laboratory ovens</li>
            <li>Various types of Heating mantel & hot plates</li>
            <li>3 NOs of Glass Reactors Set’s for R & D New product Developments.</li>
            <li>Cooling Water bath</li>
            <li> Gardeners Tubes & FCB4 Ford cup for Viscosity Checking.</li>
            <li> Melting point apparatus.</li>
            <li>Variable speed stirrer</li>
            <li>Hydrometer for checking the density of solvents.</li>
            <li>Boiling range apparatus.</li>
          </ul>
        </div>
      </div>

      {/* =====================
          Gallery
      ===================== */}
      <div className="about-gallery">
        {/* <div className="gallery-item">
          <img src={Company} alt="Company Premises" />
          <span>Company Premises</span>
        </div> */}

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
