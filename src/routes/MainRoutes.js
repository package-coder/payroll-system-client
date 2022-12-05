import { MainLayout, DefaultLayout, ModuleLayout } from "../layouts";
import CreateUserPage from "../pages/CreateUser";
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
                {
                    path: 'create/user',
                    element: <CreateUserPage />
                }
            ]
        },

    ]
}

export default mainRoutes