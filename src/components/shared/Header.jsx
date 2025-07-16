import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

function Header() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const location = useLocation()

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/datepicker', label: 'Datepicker' },
        { path: '/login', label: 'Login' }
    ]

    return (
        <div className="flex justify-between items-center mb-16 pb-5 border-b border-neutral-200">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-15 h-15 bg-gradient-to-br from-web-green-500 to-web-green-700 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-xl">FE</span>
                    </div>
                    <div>
                        <h3 className="text-neutral-700 text-lg font-semibold">Frontend Masters</h3>
                        <p className="text-neutral-500 text-sm">AI-Generated Course Platform</p>
                    </div>
                </Link>

                <nav className="flex items-center gap-6">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-web-green-600 border-b-2 border-web-green-600'
                                    : 'text-neutral-600 hover:text-web-green-600'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="bg-gradient-to-r from-info to-web-green-400 text-white px-5 py-3 rounded-md font-semibold shadow-md">
                {currentTime.toLocaleTimeString()}
            </div>
        </div>
    )
}

export default Header
