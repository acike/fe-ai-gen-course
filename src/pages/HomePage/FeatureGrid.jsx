import FeatureCard from './FeatureCard'

function FeatureGrid() {
    const features = [
        {
            icon: "🚀",
            title: "Lightning Fast",
            description: "Built with Vite & React"
        },
        {
            icon: "🎨",
            title: "Beautiful Design",
            description: "Modern UI/UX Excellence"
        },
        {
            icon: "⚡",
            title: "AI Powered",
            description: "Next-Gen Technology"
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    )
}

export default FeatureGrid
