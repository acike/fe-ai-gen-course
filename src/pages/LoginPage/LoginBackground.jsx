function LoginBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-72 h-72 bg-gradient-to-r from-web-green-200 to-web-green-300 rounded-full blur-3xl opacity-20 top-[10%] left-[10%] animate-pulse"></div>
            <div className="absolute w-48 h-48 bg-gradient-to-r from-info/30 to-web-green-200 rounded-full blur-3xl opacity-20 top-[60%] right-[15%] animate-pulse delay-1000"></div>
            <div className="absolute w-60 h-60 bg-gradient-to-r from-web-green-100 to-web-green-300 rounded-full blur-3xl opacity-20 bottom-[20%] left-[20%] animate-pulse delay-2000"></div>
        </div>
    )
}

export default LoginBackground
