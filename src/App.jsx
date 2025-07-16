import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className={`container ${isVisible ? 'fade-in' : ''}`}>
        <div className="header">
          <div className="logo-section">
            <div className="logo">
              <span className="logo-text">FE</span>
            </div>
            <div className="company-info">
              <h3>Frontend Masters</h3>
              <p>AI-Generated Course Platform</p>
            </div>
          </div>
          <div className="time-display">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>

        <main className="main-content">
          <h1 className="hello-title">
            <span className="hello-text">Hello</span>
            <span className="world-text">World</span>
          </h1>

          <p className="subtitle">
            Welcome to the Future of Learning
          </p>

          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Built with Vite & React</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Beautiful Design</h3>
              <p>Modern UI/UX Excellence</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>AI Powered</h3>
              <p>Next-Gen Technology</p>
            </div>
          </div>

          <button className="cta-button">
            <span>Start Your Journey</span>
            <div className="button-shine"></div>
          </button>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Frontend Masters. Crafted with ❤️ and AI</p>
        </footer>
      </div>
    </div>
  )
}

export default App
