import { useRoutes } from "react-router"
import authRoutes from "./AuthRoutes";
import mainRoutes from "./MainRoutes"


const Routes = () => {
    return useRoutes([mainRoutes, authRoutes]);
}
export default Routes