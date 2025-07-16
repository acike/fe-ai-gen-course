import { useState, useEffect } from 'react'

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
    <div className="min-h-screen bg-gradient-to-br from-web-green-400 to-web-green-700 flex items-center justify-center p-5">
      {/* Tailwind v4 Test */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {/* Basic test */}
        <div className="bg-success text-white px-4 py-2 rounded-lg shadow-lg">
          Tailwind v4 Working! 🎉
        </div>

        {/* v4 specific features */}
        <div className="bg-gradient-to-r from-web-green-500 to-web-green-700 text-white px-4 py-2 rounded-xl shadow-xl">
          Version: 4.x
        </div>

        {/* Modern CSS features in v4 */}
        <div className="bg-info/80 backdrop-blur-sm text-white px-4 py-2 rounded-2xl border border-white/20">
          Design Tokens (v4 feature)
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-warning to-error rounded-full blur-3xl opacity-30 top-[10%] left-[10%] animate-pulse"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-info to-web-green-400 rounded-full blur-3xl opacity-30 top-[60%] right-[15%] animate-pulse delay-1000"></div>
        <div className="absolute w-60 h-60 bg-gradient-to-r from-web-green-300 to-warning rounded-full blur-3xl opacity-30 bottom-[20%] left-[20%] animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className={`bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl p-10 max-w-4xl w-full shadow-lg relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex justify-between items-center mb-16 pb-5 border-b border-neutral-200">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 bg-gradient-to-br from-web-green-500 to-web-green-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">FE</span>
            </div>
            <div>
              <h3 className="text-neutral-700 text-lg font-semibold">Frontend Masters</h3>
              <p className="text-neutral-500 text-sm">AI-Generated Course Platform</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-info to-web-green-400 text-white px-5 py-3 rounded-md font-semibold shadow-md">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>

        <main className="text-center mb-10">
          <h1 className="text-6xl font-extrabold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-web-green-500 to-web-green-700 bg-clip-text text-transparent">Hello</span>
            <span className="bg-gradient-to-r from-web-green-300 to-error bg-clip-text text-transparent">World !!!</span>
          </h1>

          <p className="text-xl text-neutral-600 mb-16 font-light">
            Welcome to the Future of Learning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow border border-neutral-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-web-green-200">
              <div className="text-5xl mb-5">🚀</div>
              <h3 className="text-neutral-700 text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-neutral-500">Built with Vite & React</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border border-neutral-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-web-green-200">
              <div className="text-5xl mb-5">🎨</div>
              <h3 className="text-neutral-700 text-lg font-semibold mb-2">Beautiful Design</h3>
              <p className="text-neutral-500">Modern UI/UX Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow border border-neutral-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-web-green-200">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-neutral-700 text-lg font-semibold mb-2">AI Powered</h3>
              <p className="text-neutral-500">Next-Gen Technology</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-web-green-500 to-web-green-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </button>
        </main>

        <footer className="text-center pt-8 border-t border-neutral-200 text-neutral-500 text-sm">
          <p>&copy; 2025 Frontend Masters. Crafted with ❤️ and AI</p>
        </footer>
      </div>
    </div>
  )
}

export default App
