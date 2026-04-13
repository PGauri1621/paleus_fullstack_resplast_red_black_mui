import { useState } from 'react'
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Paper,
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import './ProductList.css'

/* ---------------- BROCHURES ---------------- */
const productBrochures = [
  {
    title: 'Isocynate Hardners',
    description:
      'Isocynate Hardners',
    pdf: '/pdfs/pdf - Isocynate Hardners.pdf',
  },
  {
    title: 'TPA, TSA, PU Acrylic Resins',
    description:
      'TPA, TSA, PU Acrylic Resins',
    pdf: '/pdfs/pdf - TPA, TSA, PU Acrylic Resins.pdf',
  },
  {
    title: 'Alkyd Resins',
    description:
      'Alkyd Resins',
    pdf: '/pdfs/pdf - Alkyd Resins.pdf',
  },
  {
    title: 'Epoxy Hardeners',
    description:
      'Epoxy Hardners',
    pdf: '/pdfs/pdf - epoxy hardner.pdf',
  },
  {
    title: 'Construction chemicals',
    description:
      'Construction chemicals',
    pdf: '/pdfs/pdf - construction chemicals.pdf',
  },
  {
    title: 'Amino Resins',
    description:
      'Amino Resins',
    pdf: '/pdfs/pdf - Amino Resins.pdf',
  },
  {
    title: 'Ketonic Resins',
    description:
      'Ketonic Resins',
    pdf: '/pdfs/pdf - Ketonic Resins.pdf',
  },
  {
    title: 'Speciality Products',
    description:
      'Speciality Products',
    pdf: '/pdfs/pdf - Speciality Products.pdf',
  },
  {
    title: 'Industrial Paints & Thinners',
    description:
      'Industrial Paints & Thinners',
    pdf: '/pdfs/pdf - Industrial paints & thinners.pdf',
  },
  {
    title: 'PVC Solvent',
    description:
      'PVC Solvent',
    pdf: '/pdfs/pdf - PVC Solvent cements.pdf',
  },
  {
    title: 'Clear coats & Laquers',
    description:
      'Clear coats & Laquers',
    pdf: '/pdfs/pdf - clear coats & laquers.pdf',
  },
  {
    title: 'Floor Coatings',
    description:
      'Floor Coatings',
    pdf: '/pdfs/pdf - floor coating.pdf',
  },

]

/* ---------------- TECHNICAL DATA SHEETS ---------------- */
const technicalDataSheets = [
  {
    title: 'DSP TPA 03 – 50%',
    description:
      'Acrylic polymer emulsion with 50% solid content designed for water-based coatings and inks.',
    pdf: '/tds pdf/tds - 1.pdf',
  },
  {
    title: 'DSP TPA 04 – 60%',
    description:
      'High-solid acrylic polymer emulsion suitable for demanding coating applications.',
    pdf: '/tds pdf/tds - 2.pdf',
  },
  {
    title: 'DSP 5081 – WAXSOL',
    description:
      'Wax dispersion additive developed for surface protection and performance enhancement.',
    pdf: '/tds pdf/tds - 3.pdf',
  },
  {
    title: 'DSP PU 09',
    description:
      'Polyurethane resin formulated for specialty industrial applications.',
    pdf: '/tds pdf/tds - 4.pdf',
  },
  {
    title: 'DSP PU 05',
    description:
      'PU resin system designed for coatings and adhesive formulations.',
    pdf: '/tds pdf/tds - 5.pdf',
  },
  {
    title: 'DSP PU 06',
    description:
      'High-performance polyurethane resin for industrial use.',
    pdf: '/tds pdf/tds - 6.pdf',
  },
  {
    title: 'DSP N 75',
    description:
      'Aliphatic polyurethane hardener offering excellent weather and UV resistance.',
    pdf: '/tds pdf/tds - 7.pdf',
  },
  {
    title: 'DSP L 75 – HV',
    description:
      'High-viscosity aromatic polyurethane hardener for durable coating systems.',
    pdf: '/tds pdf/tds - 8.pdf',
  },
   {
    title: 'DSP L 75 – HV',
    description:
      'High-viscosity aromatic polyurethane hardener for durable coating systems.',
    pdf: '/tds pdf/tds - 9.pdf',
  },
]

export default function ProductList() {
  const [activeTab, setActiveTab] = useState('brochures')
  const [visibleCount, setVisibleCount] = useState(6)
  const [tdsVisibleCount, setTdsVisibleCount] = useState(4)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = (type) => {
    setLoading(true)
    setTimeout(() => {
      if (type === 'brochures') {
        setVisibleCount((prev) => prev + 6)
      } else {
        setTdsVisibleCount((prev) => prev + 4)
      }
      setLoading(false)
    }, 700)
  }

  return (
    <Box className="products-page">
      {/* Sidebar */}
      <Box className="products-sidebar">
        <div className="sidebar-card">
          <div
            className={`sidebar-link ${
              activeTab === 'brochures' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('brochures')}
          >
            Product Brochures
          </div>

          <div
            className={`sidebar-link ${
              activeTab === 'tds' ? 'active' : ''
            }`}
            onClick={() => setActiveTab('tds')}
          >
            Technical Data Sheets
          </div>
        </div>
      </Box>

      {/* Content */}
      <Box className="products-content">
        {/* ---------- BROCHURES ---------- */}
        {activeTab === 'brochures' &&
          productBrochures.slice(0, visibleCount).map((item, index) => (
            <Paper key={index} className="product-card" elevation={0}>
              <Box className="product-left">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                className="download-btn"
                component="a"
                href={item.pdf}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </Button>
            </Paper>
          ))}

        {activeTab === 'brochures' &&
          visibleCount < productBrochures.length && (
            <Box className="load-more">
              {loading ? (
                <CircularProgress size={26} />
              ) : (
                <Button onClick={() => handleLoadMore('brochures')}>
                  Load more
                </Button>
              )}
            </Box>
          )}

        {/* ---------- TDS ---------- */}
        {activeTab === 'tds' &&
          technicalDataSheets
            .slice(0, tdsVisibleCount)
            .map((item, index) => (
              <Paper key={index} className="product-card" elevation={0}>
                <Box className="product-left">
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                  className="download-btn"
                  component="a"
                  href={item.pdf}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </Button>
              </Paper>
            ))}

        {activeTab === 'tds' &&
          tdsVisibleCount < technicalDataSheets.length && (
            <Box className="load-more">
              {loading ? (
                <CircularProgress size={26} />
              ) : (
                <Button onClick={() => handleLoadMore('tds')}>
                  Load more
                </Button>
              )}
            </Box>
          )}
      </Box>
    </Box>
  )
}