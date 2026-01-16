import express from 'express'
import cors from 'cors'
import noteRoute from './routes/noteRoute.js'
import { errorHandler } from './middlewares/errorMiddleware.js'
import { notFound } from './middlewares/notFound.js'

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/notes', noteRoute)

app.use(notFound)
app.use(errorHandler)

export default app