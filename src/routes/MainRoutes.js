import RequireAuth from "../features/auth/components/RequireAuth";
import { DashboardLayout, PageLayout } from "../layouts";
import CreateJobPage from "../pages/CreateJob";
import DepartmentPage from "../pages/Department";
import EmploymentTypePage from "../pages/EmploymentType";
import JobPage from "../pages/Job";
import JobSettingPage from "../pages/JobSetting";
import PositionPage from "../pages/Position";
import UserPage from "../pages/User";


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
                            element: <UserPage />
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