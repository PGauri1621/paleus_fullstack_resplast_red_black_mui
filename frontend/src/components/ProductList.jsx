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

const productBrochures = [
  {
    title: 'Acrylic Resins',
    description:
      'TPA, TSA and PU-based acrylic resin systems used in paints, coatings, inks and specialty applications.',
    pdf: '/pdfs/Acrylic Resins_260126_145612.pdf',
  },
  {
    title: 'Alkyd Resins',
    description:
      'High-performance alkyd resins developed for industrial paint and coating formulations.',
    pdf: '/pdfs/Alkyd Resins_260126_145627.pdf',
  },
  {
    title: 'Aromatic PU Hardeners',
    description:
      'Aromatic polyurethane hardeners (L 75) designed for durable industrial coating systems.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Aliphatic PU Hardeners',
    description:
      'Aliphatic polyurethane hardeners (N 75) offering excellent weather and UV resistance.',
    pdf: '/pdfs/Epoxy Hardener& Adhesives_260126_145546.pdf',
  },
  {
    title: 'Blocked Isocyanides',
    description:
      'Blocked isocyanides available in 100% and 63% grades for controlled curing applications.',
    pdf: '/pdfs/Epoxy Hardener& Adhesives_260126_145546.pdf',
  },
  {
    title: 'Epoxy Polyamide Hardeners',
    description:
      'Polyamide hardeners used in epoxy coatings, flooring, adhesives and protective systems.',
    pdf: '/pdfs/Epoxy Hardener& Adhesives_260126_145546.pdf',
  },
  {
    title: 'Epoxy Cycloaliphatic Hardeners',
    description:
      'Cycloaliphatic epoxy hardeners offering superior chemical resistance and performance.',
    pdf: '/pdfs/Epoxy Hardener& Adhesives_260126_145546.pdf',
  },
  {
    title: 'Amino Resins',
    description:
      'Amino resin systems formulated for specialized coating and adhesive applications.',
    pdf: '/pdfs/Alkyd Resins_260126_145627.pdf',
  },
  {
    title: 'PU Resins for Inks',
    description:
      'Polyurethane resins specifically designed for ink formulations and printing applications.',
    pdf: '/pdfs/Alkyd Resins_260126_145627.pdf',
  },
  {
    title: 'PU Adhesives (1K)',
    description:
      'Single-component polyurethane adhesive systems for industrial and construction use.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'PU Paints (1K)',
    description:
      'One-component polyurethane paint systems delivering durability and performance.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Industrial Paints & Thinners',
    description:
      'Comprehensive range of industrial paints along with compatible thinners.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'UPR & Saturated Polyester Resins',
    description:
      'Unsaturated and saturated polyester resins used in industrial and specialty applications.',
    pdf: '/pdfs/Acrylic Resins_260126_145612.pdf',
  },
  {
    title: 'Emulsions & Binders',
    description:
      'Styrene acrylic and pure acrylic emulsions for water-based paints and inks.',
    pdf: '/pdfs/Epoxy Hardener& Adhesives_260126_145546.pdf',
  },
  {
    title: 'Acrylic Thickeners',
    description:
      'Acrylic thickener systems developed for paints and ink formulations.',
    pdf: '/pdfs/Acrylic Resins_260126_145612.pdf',
  },
  {
    title: 'Wax Dispersion Agents',
    description:
      'Water-based and solvent-based wax dispersions for improved surface performance.',
    pdf: '/pdfs/Acrylic Resins_260126_145612.pdf',
  },
  {
    title: 'Fabric Glues & Adhesives',
    description:
      'Adhesive solutions designed for fabric bonding and specialty applications.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Industrial & Automotive Clear Coats',
    description:
      'Clear coat systems available in 1K and 2K for industrial and automotive applications.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Aluminium Coating Clear Coats',
    description:
      '1K clear coat systems developed for aluminium coating at construction sites.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Epoxy Adhesives & Grouts',
    description:
      '2K and 3K epoxy adhesive and grout systems for demanding industrial applications.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
  {
    title: 'Specialty Products',
    description:
      'Custom-developed specialty products tailored to specific end-use requirements.',
    pdf: '/pdfs/PU Resins_260126_145643.pdf',
  },
]

export default function ProductList() {
  const [activeTab, setActiveTab] = useState('brochures')
  const [visibleCount, setVisibleCount] = useState(6)
  const [loading, setLoading] = useState(false)

  const handleLoadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6)
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

        {/* Load more */}
        {activeTab === 'brochures' &&
          visibleCount < productBrochures.length && (
            <Box className="load-more">
              {loading ? (
                <CircularProgress size={26} />
              ) : (
                <Button onClick={handleLoadMore}>
                  Load more
                </Button>
              )}
            </Box>
          )}

        {activeTab === 'tds' && (
          <Typography variant="body1">
            Technical Data Sheets will be available here.
          </Typography>
        )}
      </Box>
    </Box>
  )
}
