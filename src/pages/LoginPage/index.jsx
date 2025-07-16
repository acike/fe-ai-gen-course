import LoginForm from './LoginForm'
import LoginBackground from './LoginBackground'

function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-web-green-50 to-web-green-100 flex items-center justify-center p-5">
            <LoginBackground />
            <LoginForm />
        </div>
    )
}

export default LoginPage
