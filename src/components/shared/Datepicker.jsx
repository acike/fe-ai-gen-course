import { useState, useMemo } from 'react'

function Datepicker({ value, onChange, placeholder = "Select date", className = "" }) {
    const [selectedDate, setSelectedDate] = useState(value || null)
    const [showCalendar, setShowCalendar] = useState(false)
    const today = new Date()
    const [currentMonth, setCurrentMonth] = useState(today.getMonth())
    const [currentYear, setCurrentYear] = useState(today.getFullYear())

    const formattedDate = useMemo(() =>
        selectedDate ? selectedDate.toLocaleDateString() : '',
        [selectedDate]
    )

    const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

    const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

    const calendarDays = useMemo(() => {
        const days = []
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay()

        // Previous month days
        const prevMonthDays = daysInMonth(currentYear, currentMonth - 1)
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            days.push({
                date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
                otherMonth: true,
            })
        }

        // Current month days
        const thisMonthDays = daysInMonth(currentYear, currentMonth)
        for (let i = 1; i <= thisMonthDays; i++) {
            days.push({
                date: new Date(currentYear, currentMonth, i),
                otherMonth: false
            })
        }

        // Next month days (fill to 6 weeks grid)
        const nextDays = 42 - days.length
        for (let i = 1; i <= nextDays; i++) {
            days.push({
                date: new Date(currentYear, currentMonth + 1, i),
                otherMonth: true
            })
        }

        return days
    }, [currentYear, currentMonth])

    const currentMonthName = useMemo(() =>
        new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' }),
        [currentYear, currentMonth]
    )

    const toggleCalendar = () => setShowCalendar(!showCalendar)

    const prevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const selectDate = (day) => {
        if (day.otherMonth) return
        setSelectedDate(day.date)
        setShowCalendar(false)
        if (onChange) onChange(day.date)
    }

    const isSelected = (day) =>
        selectedDate && day.date.toDateString() === selectedDate.toDateString()

    const isToday = (day) =>
        !day.otherMonth && day.date.toDateString() === today.toDateString()

    return (
        <div className="relative inline-block">
            <input
                type="text"
                readOnly
                value={formattedDate}
                onClick={toggleCalendar}
                placeholder={placeholder}
                className={`px-4 py-3 border border-neutral-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-web-green-500 focus:border-transparent transition-all duration-200 bg-neutral-50 hover:bg-white ${className.includes('w-full') ? 'w-full' : 'w-40'} ${className}`}
            />

            {showCalendar && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 p-6 min-w-80">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={prevMonth}
                            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200 text-neutral-600 hover:text-web-green-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <span className="font-semibold text-lg text-neutral-700">
                            {currentMonthName} {currentYear}
                        </span>

                        <button
                            onClick={nextMonth}
                            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200 text-neutral-600 hover:text-web-green-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Weekdays */}
                    <div className="grid grid-cols-7 text-center mb-2">
                        {weekdays.map(day => (
                            <span key={day} className="font-semibold text-neutral-500 text-sm py-2">
                                {day}
                            </span>
                        ))}
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 text-center gap-1">
                        {calendarDays.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => selectDate(day)}
                                disabled={day.otherMonth}
                                className={`
                  p-2 h-10 w-10 text-sm rounded-full transition-all duration-200 relative
                  ${day.otherMonth
                                        ? 'text-neutral-300 cursor-not-allowed'
                                        : 'text-neutral-700 cursor-pointer hover:bg-web-green-50 hover:text-web-green-700'
                                    }
                  ${isSelected(day)
                                        ? 'bg-web-green-500 text-white hover:bg-web-green-600 font-semibold'
                                        : ''
                                    }
                  ${isToday(day) && !isSelected(day)
                                        ? 'bg-web-green-100 text-web-green-700 font-semibold'
                                        : ''
                                    }
                `}
                            >
                                {day.date.getDate()}
                                {isToday(day) && !isSelected(day) && (
                                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-web-green-500 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Today button */}
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                        <button
                            onClick={() => selectDate({ date: today, otherMonth: false })}
                            className="w-full py-2 px-4 text-sm text-web-green-600 hover:text-web-green-700 hover:bg-web-green-50 rounded-lg transition-colors duration-200 font-medium"
                        >
                            Today
                        </button>
                    </div>
                </div>
            )}

            {/* Backdrop to close calendar */}
            {showCalendar && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowCalendar(false)}
                />
            )}
        </div>
    )
}

export default Datepicker
