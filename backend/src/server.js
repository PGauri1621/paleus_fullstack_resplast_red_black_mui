import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoute from './routes/contactus.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoute)

app.get('/', (_, res) => {
  res.send('Contact API running') //updated email address of stakeholder
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
