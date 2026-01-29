
import express from 'express'
const app = express()
app.use(express.json())
app.get('/',(_,res)=>res.send('API running'))
app.listen(5000,()=>console.log('Backend running'))
