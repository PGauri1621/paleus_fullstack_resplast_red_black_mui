import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRoute from './routes/contactus.js'

dotenv.config()

const app = express()

// ✅ Allowed origins (ADD your Netlify URL here)
const allowedOrigins = [
  "http://localhost:3000",
  "https://splendid-madeleine-3c36d9.netlify.app", // 👈 IMPORTANT
  "https://divijapolymers.co.in",
  "https://www.divijapolymers.co.in"
]

// ✅ CORS configuration (FIXED)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    } else {
      return callback(new Error("Not allowed by CORS"))
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}))

// ✅ Handle preflight properly
app.options('*', cors())

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