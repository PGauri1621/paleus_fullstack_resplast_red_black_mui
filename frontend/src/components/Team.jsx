import './Team.css'
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
} from '@mui/material'
import { motion } from 'framer-motion'

/* Animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Team() {
  return (
    <section className="team">
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="team-header"
        >
          <Typography variant="h4" component="h2">
            Leadership
          </Typography>
          <Typography variant="body1">
            Strong leadership and technical expertise form the foundation of
            Divija Specialty Polymers, driving quality, innovation, and long-term
            customer trust.
          </Typography>
        </motion.div>

        {/* Director Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          className="director-section"
        >
          <Grid item xs={12} md={5}>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card elevation={0} className="director-card">
                <CardMedia
                  component="img"
                  image="/team/Mr.Kale.jpg"
                  alt="Mr. Santosh V Kale"
                />
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box className="director-content">
                <Typography variant="h5" component="h3">
                  Mr. Santosh V Kale
                </Typography>

                <Typography className="director-role">
                  Director
                </Typography>

                <Typography variant="body1">
              Mr. Santosh V Kale is the Director of Divija specialty polymers, proving focused leadership in specialty polymers, PU Hardeners, coatings and adhesive systems. Under his Direction, the company has developed a fully equipped manufacturing, R & D and Quality control facility at Khudus near Akluj solapur.                                                                                                           His emphasis on product quality, customized solutions, and process reliability 
              has positioned the company as a dependable partner for customers across industrial and decorative applications segments.
                </Typography>

          
              </Box>
            </motion.div>
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
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box className="award-content">
                <Typography variant="h6" component="h4">
                  Industry Recognition
                </Typography>
                <Typography variant="body1">
                 Divija specialty polymers has received industry recognition for its commitment to quality, innovation, 
                 and customer focused solutions, reflecting strong leadership and technical excellence.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card elevation={0} className="award-card">
                <CardMedia
                  component="img"
                  image="/team/award.jpg"
                  alt="Industry award recognition"
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
