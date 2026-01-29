import './About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="about">
      <div className="about-inner">
        {/* LEFT COLUMN */}
        <div className="about-left">
          <h2>
            Leading manufacturers of specialty polymers, hardeners, emulsions
            and adhesive solutions.
          </h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <p>
            We, <strong>M/s. Divija Specialty Polymers</strong>, are leading
            manufacturers of Aromatic & Aliphatic PU Hardeners, Blocked
            Isocyanides, Epoxy Hardeners, Emulsions, Thickeners, Additives, Wax
            Dispersion Agents, Epoxy & PU Adhesives, Fabric Glues, Thinners and
            other specialty products.
          </p>

          <p>
            Established on <strong>09 August 2021</strong>, Divija Specialty
            Polymers is an ISO 9001:2015 certified company with a fully equipped
            manufacturing, R&D and Quality Control facility located at
            <strong> Khudus near Akluj</strong>. We are well recognised in the PU
            Hardener and specialty polymer industry for consistent quality and
            reliable service.
          </p>

          <p>
            Our in-house R&D and testing laboratory enables us to develop
            <strong> tailor-made products</strong> as per end-user requirements,
            supported by experienced manpower across production, QC,
            maintenance and stores.
          </p>

          {/* ROUTING TO AboutUs COMPONENT */}
          <Link to="/about" className="about-link">
            Learn more about us →
          </Link>
        </div>
      </div>
    </section>
  )
}