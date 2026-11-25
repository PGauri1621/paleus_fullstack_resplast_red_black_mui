import './ApplicationList.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

// Import images
import automotive from '../assets/automotive.png'
import decorative from '../assets/decorative.png'
import wood from '../assets/woodCoating.png'
import coil from '../assets/coilCoating.png'
import inks from '../assets/Ink.png'
import floor from '../assets/floorCoating.png'
import adhesives from '../assets/Adhesives.png'
import construction from '../assets/construction.png'


const applications = [
{ title: 'Automotive Paints', image: automotive },
{ title: 'Decorative Paints', image: decorative },
{ title: 'Wood Coatings', image: wood },
{ title: 'Coil Coatings', image: coil },
{ title: 'Inks', image: inks },
{ title: 'Floor Coatings', image: floor },
{ title: 'Adhesives', image: adhesives },
{ title: 'Construction Chemicals', image: construction },
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