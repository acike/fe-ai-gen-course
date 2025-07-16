import { Link } from 'react-router'

function CallToAction() {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-web-green-500 to-web-green-700 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>

            <Link
                to="/datepicker"
                className="bg-gradient-to-r from-web-blue-500 to-web-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
                <span className="relative z-10">📅 Datepicker Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </Link>

            <Link
                to="/login"
                className="bg-white/80 backdrop-blur-sm border border-web-green-200 text-web-green-700 px-12 py-4 rounded-lg text-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
                เข้าสู่ระบบ
            </Link>
        </div>
    )
}

export default CallToAction
