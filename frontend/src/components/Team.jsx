import './Team.css'
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from '@mui/material'

export default function Team() {
  return (
    <section className="team">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="team-header">
          <Typography variant="h4" component="h2">
            Leadership
          </Typography>
          <Typography variant="body1">
            Strong leadership and technical expertise form the foundation of
            Divija Specialty Polymers, driving quality, innovation, and long-term
            customer trust.
          </Typography>
        </Box>

        {/* Director Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          className="director-section"
        >
          <Grid item xs={12} md={5}>
            <Card elevation={0} className="director-card">
              <CardMedia
                component="img"
                image="/team/Mr.Kale.jpg"
                alt="Mr. Santosh V Kale"
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="director-content">
              <Typography variant="h5" component="h3">
                Mr. Santosh V Kale
              </Typography>

              <Typography className="director-role">
                Director
              </Typography>

              <Typography variant="body2">
                Mr. Santosh V Kale is the Director of Divija Specialty Polymers,
                providing focused leadership in specialty polymers, PU
                hardeners, coatings, and adhesive systems. Under his direction,
                the company has developed a fully equipped manufacturing, R&amp;D,
                and quality control facility at Khudus near Akluj.
              </Typography>

              <Typography variant="body2">
                His emphasis on product quality, customized solutions, and
                process reliability has positioned the company as a dependable
                partner for customers across industrial and decorative
                application segments.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Award Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          className="award-section"
        >
          <Grid item xs={12} md={7}>
            <Box className="award-content">
              <Typography variant="h6" component="h4">
                Industry Recognition
              </Typography>
              <Typography variant="body2">
                Divija Specialty Polymers has received industry recognition for
                its commitment to quality, innovation, and customer-focused
                solutions, reflecting strong leadership and technical excellence.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Card elevation={0} className="award-card">
              <CardMedia
                component="img"
                image="/team/award.jpg"
                alt="Industry award recognition"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}