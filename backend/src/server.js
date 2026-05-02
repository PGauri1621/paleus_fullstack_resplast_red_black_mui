import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoute from './routes/contactus.js'

dotenv.config()

const app = express()

// ✅ CORS configuration (UPDATED)
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://divijapolymers.co.in",
    "https://www.divijapolymers.co.in"
  ],
  methods: ["GET", "POST"],
  credentials: true
}))

// ✅ Middleware
app.use(express.json())

// ✅ Routes
app.use('/api/contact', contactRoute)

app.get('/', (_, res) => {
  res.send('Contact API running') 
})

// ✅ Server start
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)