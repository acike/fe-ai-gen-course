function AnimatedHero() {
    return (
        <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold mb-5 leading-tight">
                <span className="bg-gradient-to-r from-web-green-500 via-web-green-600 to-web-green-700 bg-clip-text text-transparent inline-block animate-gradient-flow animate-pulse-glow text-interactive cursor-pointer">
                    Hello
                </span>
                <span className="bg-gradient-to-r from-web-green-300 via-warning to-error bg-clip-text text-transparent inline-block ml-4 animate-floating-bounce hover:animate-rainbow-shake text-interactive cursor-pointer">
                    World !!
                </span>
            </h1>

            <p className="text-xl text-neutral-600 mb-16 font-light animate-pulse hover:text-web-green-600 transition-colors duration-500 cursor-default">
                Welcome to the Future of Learning
            </p>
        </div>
    )
}

export default AnimatedHero
