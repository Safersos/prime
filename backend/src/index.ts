import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5003

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Allow inline scripts for Vite
}))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API routes - must be defined before static file serving
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' })
})

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  // Resolve path relative to the compiled dist folder
  const frontendBuildPath = path.resolve(process.cwd(), 'frontend/dist')
  
  // Serve static files (CSS, JS, images, etc.)
  app.use(express.static(frontendBuildPath))
  
  // Handle React routing - return all requests to React app
  // This must be last to catch all non-API routes
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'))
  })
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📡 API available at http://localhost:${PORT}/api`)
  if (process.env.NODE_ENV === 'production') {
    console.log(`🌐 Serving frontend from production build`)
  }
})

