
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'
import './Products.css'

export default function Products() {
  return (
    <section className="products">
      <Card className="mui-card">
        <CardMedia
          component="img"
          height="220"
          image="https://images.unsplash.com/photo-1581092919534-1b6c8f07b7b3"
          alt="PALATAC"
        />
        <CardContent>
          <Typography variant="h5" className="card-title">PALATAC</Typography>
          <Typography variant="body2">
            Acrylic polymer emulsion pressure sensitive adhesives (PSAs) used in
            label stock, tape and specialist adhesive markets.
          </Typography>
        </CardContent>
      </Card>

      <Card className="mui-card">
        <CardMedia
          component="img"
          height="220"
          image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
          alt="PALACRYL"
        />
        <CardContent>
          <Typography variant="h5" className="card-title">PALACRYL</Typography>
          <Typography variant="body2">
            Acrylic polymer emulsions (APEO-free) used as high-performance binders
            in coatings, construction, waterproofing and artist paints.
          </Typography>
        </CardContent>
      </Card>
    </section>
  )
}
