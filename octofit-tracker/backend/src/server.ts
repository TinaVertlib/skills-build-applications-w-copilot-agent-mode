import express, { Request, Response } from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT) || 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db'

app.use(express.json())

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'octofit-tracker-backend',
    port,
  })
})

app.get('/api/db-status', async (_req: Request, res: Response) => {
  const state = mongoose.connection.readyState
  res.json({
    status: state === 1 ? 'connected' : 'disconnected',
    readyState: state,
  })
})

async function startServer() {
  try {
    await mongoose.connect(mongoUri)
    app.listen(port, () => {
      console.log(`Backend listening on port ${port}`)
      console.log(`MongoDB URI: ${mongoUri}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
