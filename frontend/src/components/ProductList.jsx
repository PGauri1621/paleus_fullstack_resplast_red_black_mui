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
      'TPA, TSA and PU-based acrylic resin systems designed for coatings, paints, inks and specialty applications.',
  },
  {
    title: 'Alkyd Resins',
    description:
      'High-performance alkyd resins used in industrial paints and coating formulations.',
  },
  {
    title: 'PU Hardeners',
    description:
      'Aromatic (L 75) and Aliphatic (N 75) polyurethane hardeners for durable coating systems.',
  },
  {
    title: 'Blocked Isocyanides',
    description:
      'Blocked isocyanides available in 100% and 63% grades for controlled curing applications.',
  },
  {
    title: 'Epoxy Hardeners',
    description:
      'Epoxy polyamide and cycloaliphatic hardeners for industrial coatings, flooring and grouting.',
  },
  {
    title: 'Amino Resins',
    description:
      'Amino resin systems developed for specialized coating and adhesive formulations.',
  },
  {
    title: 'PU Resins for Inks',
    description:
      'Specially formulated polyurethane resins designed for ink applications.',
  },
  {
    title: 'PU Adhesives',
    description:
      '1K polyurethane adhesive systems suitable for industrial and construction applications.',
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
