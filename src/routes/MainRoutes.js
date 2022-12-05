import { MainLayout, DefaultLayout } from "../layouts";
import UserPage from "../pages/User";


const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DefaultLayout title='Users'/>,
            children: [
                {
                    path: 'user',
                    element: <UserPage />
                },
            ]
        },

    ]
}

export default mainRoutes