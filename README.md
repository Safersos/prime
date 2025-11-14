# Prime RecruiterZ - React & Node.js Application

A modern, full-stack web application built with React, Node.js, and TypeScript, featuring beautiful animations powered by Framer Motion.

## 🚀 Features

- **Modern React Frontend** with Vite
- **Node.js/Express Backend** with TypeScript
- **Beautiful Animations** using Framer Motion
- **Responsive Design** with Tailwind CSS
- **TypeScript** for type safety
- **Modern UI/UX** with smooth transitions

## 📦 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Framer Motion (Animations)
- Tailwind CSS
- React Router
- Lucide React (Icons)
- Axios

### Backend
- Node.js
- Express
- TypeScript
- CORS
- Helmet (Security)
- Morgan (Logging)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

   Or install separately:
   ```bash
   # Root dependencies
   npm install

   # Frontend dependencies
   cd frontend
   npm install

   # Backend dependencies
   cd ../backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cd backend
   cp .env.example .env
   ```

3. **Start development servers:**
   ```bash
   # From root directory - runs both frontend and backend
   npm run dev
   ```

   Or run separately:
   ```bash
   # Frontend (runs on http://localhost:3000)
   npm run dev:frontend

   # Backend (runs on http://localhost:5000)
   npm run dev:backend
   ```

## 📁 Project Structure

```
prime/
├── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── App.tsx     # Main app component
│   │   └── main.tsx    # Entry point
│   ├── public/         # Static assets
│   └── package.json
├── backend/            # Node.js backend API
│   ├── src/
│   │   └── index.ts    # Server entry point
│   └── package.json
├── package.json        # Root package.json (workspaces)
└── README.md
```

## 🎨 Animation Libraries

The project uses **Framer Motion** for animations. You can easily add:
- Page transitions
- Scroll animations
- Hover effects
- Loading animations
- Complex motion sequences

## 📝 Available Scripts

### Root Level
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both projects
- `npm run install:all` - Install all dependencies

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Start production server

## 🌐 API Endpoints

- `GET /api/health` - Health check
- `GET /api/test` - Test endpoint

## 🚀 Deployment

### Production Build

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Build the backend:**
   ```bash
   cd backend
   npm run build
   ```

3. **Set environment variable:**
   ```bash
   export NODE_ENV=production
   ```

4. **Start the production server:**
   ```bash
   cd backend
   npm start
   ```

The backend will serve the frontend static files and handle all routes properly.

### Hosting Platform Configuration

The project includes configuration files for:
- **Netlify**: `netlify.toml` - Handles SPA routing
- **Vercel**: `vercel.json` - Handles SPA routing
- **Netlify**: `frontend/public/_redirects` - Fallback redirects

For other platforms, ensure all routes redirect to `index.html` to enable client-side routing.

## 🎯 Next Steps

Ready to build! Tell me what you'd like to create and I'll help you implement it.

## 📄 License

MIT

