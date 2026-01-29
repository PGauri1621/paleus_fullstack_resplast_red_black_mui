import FactoryIcon from '@mui/icons-material/Factory';
import ScienceIcon from '@mui/icons-material/Science';
import './AboutUs.css';

// Import images
import Company from '../assests/Company.jpg';
import Facility from '../assests/Facility.jpg';
import Research from '../assests/Research.jpg';

export default function AboutUs() {
  return (
    <section className="about">
      {/* =====================
          Header Section
      ===================== */}
      <div className="about-header">
        <span className="about-eyebrow">About Us</span>

        <h2>Divija Speciality Polymers</h2>

        <p className="about-intro">
          Divija Speciality Polymers is a leading manufacturer of specialty polymers
          and industrial resins, serving customers with high-quality products and
          dependable technical support.
        </p>
      </div>

      {/* =====================
          Description
      ===================== */}
      <div className="about-content">
        <p>
          We manufacture Synthetic Resins, Aromatic & Aliphatic PU Hardeners, Blocked
          Isocyanides, Epoxy Hardeners, Paints, Primers, Lacquers, PU Clear Coats,
          Emulsions, Thickeners, Additives, Epoxy & PU Adhesives and other specialty
          products.
        </p>

        <p>
          Our manufacturing facility is located at <strong>Khudus near Akluj</strong>.
          We are well known in the industrial resins and specialty polymers industry
          for quality products and dependable service.
        </p>

        <p>
          We are an <strong>ISO 9001:2008 certified company</strong> with fully equipped
          R&amp;D and Quality Control laboratories. We specialise in developing
          tailor-made products as per end-user requirements.
        </p>

        <p>
          <strong>Company Establishment:</strong> 09 August 2021.  
          Divija Speciality Polymers is a single-owner firm operating since Aug 2021.
        </p>
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
            <li>High Speed Dispersers</li>
            <li>Bead Mills – 200 kg, 50 kg, 20 kg & 1 L</li>
            <li>Cooling Tower – 100 TR</li>
            <li>Semi-auto filling machines – 30 g to 1 L</li>
          </ul>
        </div>

        <div className="facility-card">
          <div className="facility-section-title">Research &amp; Development</div>

          <div className="facility-header">
            <ScienceIcon />
            <h3>R &amp; D Facility</h3>
          </div>

          <ul>
            <li>Acid, amine, NCO & epoxy value testing</li>
            <li>Electrical & manual balances</li>
            <li>Laboratory ovens</li>
            <li>Heating mantles & hot plates</li>
            <li>Glass reactors for product development</li>
            <li>Viscosity, density & boiling range testing</li>
          </ul>
        </div>
      </div>

      {/* =====================
          Gallery (REAL IMAGES)
      ===================== */}
      <div className="about-gallery">
        <div className="gallery-item">
          <img src={Company} alt="Company Entrance" />
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
  );
}