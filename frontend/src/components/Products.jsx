import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './Products.css'

const productCategories = [
  {
    title: 'PU Resins & Adhesives',
    image: 'https://images.unsplash.com/photo-1581092919534-1b6c8f07b7b3',
    description:
      'PU resins, PU adhesives (1K), PU paints, clear coats and specialty polyurethane systems for industrial and coating applications.',
  },
  {
    title: 'Epoxy Systems',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    description:
      'Epoxy polyamide hardeners, cycloaliphatic hardeners, epoxy adhesives, grouts and high-performance epoxy solutions.',
  },
  {
    title: 'Acrylics & Emulsions',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758',
    description:
      'Acrylic resins, emulsions, binders, pressure-sensitive adhesives, thickeners and water-based acrylic systems.',
  },
  {
    title: 'Alkyd & Polyester Resins',
    image: 'https://images.unsplash.com/photo-1581093458791-9c7c7df6b3b4',
    description:
      'Alkyd resins, UPR & saturated polyester resins used in industrial coatings, paints and specialty applications.',
  },
]

export default function Products() {
  const navigate = useNavigate()

  return (
    <section className="products">
      <div className="products-header">
        <h2>Product Categories</h2>
        <p>
          Our manufacturing portfolio covers a wide range of specialty resin
          systems engineered for performance, durability and application
          flexibility across industries.
        </p>
      </div>

      <div className="products-grid">
        {productCategories.map((item) => (
          <Card
            key={item.title}
            className="mui-card"
            onClick={() => navigate('/products')}
          >
            <CardMedia
              component="img"
              height="220"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h5" className="card-title">
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
