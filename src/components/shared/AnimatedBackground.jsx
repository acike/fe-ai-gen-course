function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-72 h-72 bg-gradient-to-r from-warning to-error rounded-full blur-3xl opacity-30 top-[10%] left-[10%] animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-gradient-to-r from-info to-web-green-400 rounded-full blur-3xl opacity-30 top-[60%] right-[15%] animate-pulse delay-1000"></div>
            <div className="absolute w-60 h-60 bg-gradient-to-r from-web-green-300 to-warning rounded-full blur-3xl opacity-30 bottom-[20%] left-[20%] animate-pulse delay-2000"></div>
        </div>
    )
}

export default AnimatedBackground
