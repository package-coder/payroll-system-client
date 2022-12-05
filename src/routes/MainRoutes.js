import { DashboardLayout, PageLayout } from "../layouts";
import UserPage from "../pages/User";


const mainRoutes = {
    path: '/',
    element: <DashboardLayout />,
    children: [
        {
            path: '/',
            element: <PageLayout title='Users'/>,
            children: [
                {
                    path: 'users',
                    element: <UserPage />
                },
            ]
        },

    ]
}

export default mainRoutes