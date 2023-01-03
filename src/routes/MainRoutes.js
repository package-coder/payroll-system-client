import RequireAuth from "../features/auth/components/RequireAuth";
import { DashboardLayout, PageLayout } from "../layouts";
import CreateJobPage from "../pages/CreateJob";
import CreateUserPage from "../pages/CreateUser";
import DepartmentPage from "../pages/Department";
import EmploymentTypePage from "../pages/EmploymentType";
import JobPage from "../pages/Job";
import JobItemPage from "../pages/JobItem";
import JobSettingPage from "../pages/JobSetting";
import PositionPage from "../pages/Position";
import UserPage from "../pages/User";
import UserProfilePage from "../pages/UserProfile";


const mainRoutes = {
    path: '/',
    element: <DashboardLayout />,
    children: [
        {
            path: '/',
            element: <RequireAuth />,
            children: [
                {
                    path: '/',
                    element: <PageLayout title='Users'/>,
                    children: [
                        {
                            path: 'users',
                            element: <UserPage />,
                            children: [
                                {
                                    path: 'create',
                                    element: <CreateUserPage />
                                },
                                {
                                    path: ':id',
                                    element: <UserProfilePage />
                                }
                            ]
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Jobs'/>,
                    children: [
                        {
                            path: 'jobs',
                            element: <JobPage />,
                            children: [
                                {
                                    path: 'create',
                                    element: <CreateJobPage />
                                }, 
                                {
                                    path: ':id',
                                    element: <JobItemPage />
                                }
                            ]
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Job Settings'/>,
                    children: [
                        {
                            path: 'jobs/settings',
                            element: <JobSettingPage />,
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Employees'/>,
                    children: [
                        {
                            path: 'employees',
                            element: <UserPage />
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Departments'/>,
                    children: [
                        {
                            path: 'departments',
                            element: <DepartmentPage />
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Positions'/>,
                    children: [
                        {
                            path: 'positions',
                            element: <PositionPage />
                        },
                    ]
                },
                {
                    path: '/',
                    element: <PageLayout title='Employment Types'/>,
                    children: [
                        {
                            path: 'employment-types',
                            element: <EmploymentTypePage />
                        },
                    ]
                },
            ]
        }
    ]
}

export default mainRoutes