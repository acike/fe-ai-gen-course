function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white p-8 rounded-lg shadow border border-neutral-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-web-green-200">
            <div className="text-5xl mb-5">{icon}</div>
            <h3 className="text-neutral-700 text-lg font-semibold mb-2">{title}</h3>
            <p className="text-neutral-500">{description}</p>
        </div>
    )
}

export default FeatureCard
