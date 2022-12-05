import AuthLayout from "../layouts/AuthLayout"
import LoginPage from "../pages/Login"


const authRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <LoginPage />
        }
    ]
}


export default authRoutes