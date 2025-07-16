import { useState } from 'react'
import { Link } from 'react-router'
import Datepicker from '../../components/shared/Datepicker'

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        selectedDate: null
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            selectedDate: date
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempt:', {
            ...formData,
            selectedDate: formData.selectedDate ? formData.selectedDate.toLocaleDateString('th-TH') : null
        })
        // จัดการ login logic ที่นี่
        alert(`เข้าสู่ระบบสำเร็จ!\nอีเมล: ${formData.email}\nวันที่: ${formData.selectedDate ? formData.selectedDate.toLocaleDateString('th-TH') : 'ไม่ได้เลือก'}`)
    }

    return (
        <div className="bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl p-8 max-w-md w-full shadow-lg relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-web-green-500 to-web-green-700 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="text-white font-bold text-2xl">FE</span>
                </div>
                <h1 className="text-2xl font-bold text-neutral-700 mb-2">เข้าสู่ระบบ</h1>
                <p className="text-neutral-500">ยินดีต้อนรับกลับสู่ Frontend Masters</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        อีเมล
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent transition-all duration-200 bg-neutral-50 hover:bg-white"
                        placeholder="กรอกอีเมลของคุณ"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                        รหัสผ่าน
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent transition-all duration-200 bg-neutral-50 hover:bg-white"
                        placeholder="กรอกรหัสผ่านของคุณ"
                    />
                </div>

                {/* Date Input */}
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                        กรอกวันที่
                    </label>
                    <div className="w-full">
                        <Datepicker
                            value={formData.selectedDate}
                            onChange={handleDateChange}
                            placeholder="เลือกวันที่"
                            className="w-full"
                        />
                    </div>
                    {formData.selectedDate && (
                        <p className="mt-2 text-sm text-neutral-600">
                            วันที่เลือก: <span className="font-medium text-web-green-600">
                                {formData.selectedDate.toLocaleDateString('th-TH', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </p>
                    )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 text-web-green-500 bg-neutral-100 border-neutral-300 rounded focus:ring-web-green-500"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-neutral-600">
                            จดจำการเข้าสู่ระบบ
                        </label>
                    </div>
                    <a href="#" className="text-sm text-web-green-600 hover:text-web-green-700 transition-colors">
                        ลืมรหัสผ่าน?
                    </a>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-web-green-500 to-web-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-web-green-600 hover:to-web-green-700 focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    เข้าสู่ระบบ
                </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
                <p className="text-neutral-600">
                    ยังไม่มีบัญชี?{' '}
                    <a href="#" className="text-web-green-600 hover:text-web-green-700 font-medium transition-colors">
                        สมัครสมาชิก
                    </a>
                </p>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
                <Link
                    to="/"
                    className="inline-flex items-center text-neutral-500 hover:text-web-green-600 transition-colors"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    กลับหน้าหลัก
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
