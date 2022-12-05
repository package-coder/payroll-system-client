import { useRoutes } from "react-router"
import mainRoutes from "./MainRoutes"


const Routes = () => {
    return useRoutes([mainRoutes]);
}
export default Routes