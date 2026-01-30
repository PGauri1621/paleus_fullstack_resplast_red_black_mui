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

/* ---------------- PRODUCT BROCHURES ---------------- */
const productBrochures = [
  {
    title: 'Acrylic Resins',
    description:
      'TPA, TSA and PU-based acrylic resin systems used in paints, coatings, inks and specialty applications.',
  },
  {
    title: 'Alkyd Resins',
    description:
      'High-performance alkyd resins developed for industrial paint and coating formulations.',
  },
  {
    title: 'Aromatic PU Hardeners',
    description:
      'Aromatic polyurethane hardeners (L 75) designed for durable industrial coating systems.',
  },
  {
    title: 'Aliphatic PU Hardeners',
    description:
      'Aliphatic polyurethane hardeners (N 75) offering excellent weather and UV resistance.',
  },
  {
    title: 'Blocked Isocyanides',
    description:
      'Blocked isocyanides available in 100% and 63% grades for controlled curing applications.',
  },
  {
    title: 'Epoxy Polyamide Hardeners',
    description:
      'Polyamide hardeners used in epoxy coatings, flooring, adhesives and protective systems.',
  },
  {
    title: 'Epoxy Cycloaliphatic Hardeners',
    description:
      'Cycloaliphatic epoxy hardeners offering superior chemical resistance and performance.',
  },
  {
    title: 'Amino Resins',
    description:
      'Amino resin systems formulated for specialized coating and adhesive applications.',
  },
  {
    title: 'PU Resins for Inks',
    description:
      'Polyurethane resins specifically designed for ink formulations and printing applications.',
  },
  {
    title: 'PU Adhesives (1K)',
    description:
      'Single-component polyurethane adhesive systems for industrial and construction use.',
  },
  {
    title: 'PU Paints (1K)',
    description:
      'One-component polyurethane paint systems delivering durability and performance.',
  },
  {
    title: 'Industrial Paints & Thinners',
    description:
      'Comprehensive range of industrial paints along with compatible thinners.',
  },
  {
    title: 'UPR & Saturated Polyester Resins',
    description:
      'Unsaturated and saturated polyester resins used in industrial and specialty applications.',
  },
  {
    title: 'Emulsions & Binders',
    description:
      'Styrene acrylic and pure acrylic emulsions for water-based paints and inks.',
  },
  {
    title: 'Acrylic Thickeners',
    description:
      'Acrylic thickener systems developed for paints and ink formulations.',
  },
  {
    title: 'Wax Dispersion Agents',
    description:
      'Water-based and solvent-based wax dispersions for improved surface performance.',
  },
  {
    title: 'Fabric Glues & Adhesives',
    description:
      'Adhesive solutions designed for fabric bonding and specialty applications.',
  },
  {
    title: 'Industrial & Automotive Clear Coats',
    description:
      'Clear coat systems available in 1K and 2K for industrial and automotive applications.',
  },
  {
    title: 'Aluminium Coating Clear Coats',
    description:
      '1K clear coat systems developed for aluminium coating at construction sites.',
  },
  {
    title: 'Epoxy Adhesives & Grouts',
    description:
      '2K and 3K epoxy adhesive and grout systems for demanding industrial applications.',
  },
  {
    title: 'Specialty Products',
    description:
      'Custom-developed specialty products tailored to specific end-use requirements.',
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
            Products
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
        {/* -------- PRODUCTS -------- */}
        {activeTab === 'brochures' &&
          productBrochures.slice(0, visibleCount).map((item, index) => (
            <Paper key={index} className="product-card" elevation={0}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
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

        {/* -------- TDS (UNCHANGED) -------- */}
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
