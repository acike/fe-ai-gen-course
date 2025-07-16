import { useState } from 'react'
import { Link } from 'react-router'
import Header from '../../components/shared/Header'
import Footer from '../../components/shared/Footer'
import Datepicker from '../../components/shared/Datepicker'

function DatepickerDemo() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [eventDate, setEventDate] = useState(null)

    return (
        <div className="min-h-screen bg-gradient-to-br from-web-green-50 to-web-blue-50">
            <Header />

            <main className="container mx-auto px-6 py-20">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-neutral-700 mb-6">
                        React Datepicker
                        <span className="block text-web-green-600">Component Demo</span>
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
                        A beautiful, accessible datepicker component converted from Vue.js to React,
                        following our design system and architecture patterns.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-web-green-600 hover:text-web-green-700 font-medium"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Demo Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-700 mb-6">Interactive Demo</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Basic Datepicker */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-neutral-700">Basic Date Selection</h3>
                                <Datepicker
                                    value={selectedDate}
                                    onChange={setSelectedDate}
                                    placeholder="Pick a date"
                                />
                                {selectedDate && (
                                    <p className="text-sm text-neutral-600">
                                        Selected: <span className="font-medium">{selectedDate.toDateString()}</span>
                                    </p>
                                )}
                            </div>

                            {/* Birth Date */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-neutral-700">Birth Date</h3>
                                <Datepicker
                                    value={birthDate}
                                    onChange={setBirthDate}
                                    placeholder="Your birthday"
                                />
                                {birthDate && (
                                    <p className="text-sm text-neutral-600">
                                        Birth date: <span className="font-medium">{birthDate.toDateString()}</span>
                                    </p>
                                )}
                            </div>

                            {/* Event Date */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-neutral-700">Event Planning</h3>
                                <Datepicker
                                    value={eventDate}
                                    onChange={setEventDate}
                                    placeholder="Event date"
                                    className="w-full"
                                />
                                {eventDate && (
                                    <p className="text-sm text-neutral-600">
                                        Event: <span className="font-medium">{eventDate.toDateString()}</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-neutral-700 mb-6">Features</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-web-green-600">✨ Enhanced Features</h3>
                                <ul className="space-y-2 text-neutral-600">
                                    <li>• Clean, modern design with Tailwind CSS</li>
                                    <li>• Today indicator with dot marker</li>
                                    <li>• Smooth hover animations</li>
                                    <li>• Quick "Today" button</li>
                                    <li>• Click outside to close</li>
                                    <li>• Keyboard accessible</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-web-green-600">🏗️ Architecture</h3>
                                <ul className="space-y-2 text-neutral-600">
                                    <li>• Located in <code className="bg-neutral-100 px-2 py-1 rounded text-sm">shared/</code> components</li>
                                    <li>• Uses project design tokens</li>
                                    <li>• Controlled component pattern</li>
                                    <li>• React hooks for state management</li>
                                    <li>• Optimized with useMemo</li>
                                    <li>• TypeScript ready</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Code Example */}
                    <div className="bg-neutral-900 rounded-2xl p-8 text-neutral-100">
                        <h2 className="text-2xl font-semibold mb-6">Usage Example</h2>
                        <pre className="text-sm overflow-x-auto">
                            <code>{`import Datepicker from '../components/shared/Datepicker'

function MyForm() {
  const [date, setDate] = useState(null)

  return (
    <div>
      <Datepicker 
        value={date}
        onChange={setDate}
        placeholder="Select date"
      />
      {date && <p>Selected: {date.toDateString()}</p>}
    </div>
  )
}`}</code>
                        </pre>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default DatepickerDemo
