import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  const [openPrivacy, setOpenPrivacy] = useState(false)
  const [openTerms, setOpenTerms] = useState(false)

  return (
    <>
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
            <Link to="/contact">Contact</Link>
          </div>

          {/* Legals */}
          <div>
            <h4>Legals</h4>
            <a onClick={() => setOpenPrivacy(true)}>Privacy Policy</a>
            <a onClick={() => setOpenTerms(true)}>Terms & Conditions</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Divija Speciality Polymers · All rights reserved
        </div>
      </footer>

      {/* ---------------- Privacy Policy Modal ---------------- */}
      <Dialog
        open={openPrivacy}
        onClose={() => setOpenPrivacy(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Privacy Policy</DialogTitle>
        <DialogContent dividers>
          <Typography paragraph>
            Divija Speciality Polymers respects your privacy and is committed to
            protecting any personal information you share with us.
          </Typography>

          <Typography paragraph>
            We collect personal information only when voluntarily provided
            through contact forms, email communication, or business inquiries.
            This information is used solely to respond to inquiries, provide
            requested services, and improve our offerings.
          </Typography>

          <Typography paragraph>
            We do not sell, trade, or share your personal information with third
            parties except where required by law or to fulfill a business
            request.
          </Typography>

          <Typography paragraph>
            Our website may use basic cookies to enhance user experience.
            Continued use of the website implies consent to this policy.
          </Typography>

          <Typography paragraph>
            For questions regarding this policy, please contact us directly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPrivacy(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* ---------------- Terms & Conditions Modal ---------------- */}
      <Dialog
        open={openTerms}
        onClose={() => setOpenTerms(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Terms & Conditions</DialogTitle>
        <DialogContent dividers>
          <Typography paragraph>
            By accessing this website, you agree to comply with and be bound by
            the following terms and conditions of use.
          </Typography>

          <Typography paragraph>
            All content on this website, including text, graphics, logos, and
            documents, is the property of Divija Speciality Polymers and is
            protected by applicable intellectual property laws.
          </Typography>

          <Typography paragraph>
            Information provided on this website is for general informational
            purposes only and does not constitute technical or commercial
            advice.
          </Typography>

          <Typography paragraph>
            Divija Speciality Polymers shall not be liable for any direct or
            indirect damages arising from the use of this website or its
            content.
          </Typography>

          <Typography paragraph>
            These terms may be updated at any time without prior notice.
            Continued use of the website constitutes acceptance of the revised
            terms.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTerms(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
