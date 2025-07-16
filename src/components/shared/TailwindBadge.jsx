function TailwindBadge() {
    return (
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
    )
}

export default TailwindBadge
