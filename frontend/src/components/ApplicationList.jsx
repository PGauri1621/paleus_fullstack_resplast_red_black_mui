import './ApplicationList.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const applications = [
  { title: 'Automotive Paints', image: '/assests/automotive.png' },
  { title: 'Decorative Paints', image: '/applications/decorative.png' },
  { title: 'Wood Coatings', image: '/applications/woodCoating.png' },
  { title: 'Coil Coatings', image: '/applications/coil.png' },
  { title: 'Inks', image: '/applications/inks.png' },
  { title: 'Floor Coatings', image: '/applications/floor.png' },
  { title: 'Adhesives', image: '/applications/adhesives.png' },
  { title: 'Construction Chemicals', image: '/applications/construction.png' },
]

export default function Applications() {
  return (
    <section className="applications">
      {/* Section header */}
      <div className="applications-header">
        <h2>Applications</h2>
        <p>
          Our specialty polymer systems are designed to perform across a wide
          range of industrial and decorative applications, delivering durability,
          performance, and consistency in demanding environments.
        </p>
      </div>

      {/* Cards grid (UNCHANGED layout) */}
      <div className="application-grid">
        {applications.map((app) => (
          <Card key={app.title} className="application-card" elevation={0}>
            <CardMedia
              component="img"
              height="160"
              image={app.image}
              alt={app.title}
            />
            <CardContent className="application-content">
              <Typography variant="subtitle1" component="h3">
                {app.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}