import AuthLayout from "../layouts/AuthLayout"
import ForgotPasswordPage from "../pages/ForgotPassword"
import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Register"


const authRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <LoginPage />
        },
        {
            path: 'register',
            element: <RegisterPage />
        },
        {
            path: 'forgot-password',
            element: <ForgotPasswordPage />
        }
    ]
}


export default authRoutes