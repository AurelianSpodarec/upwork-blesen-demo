import { useRoutes } from "react-router-dom";

import NotFound from "../views/pages/NotFound/NotFound";

import HomeIndex from "../views/pages/Home/HomeIndex";
import AboutIndex from "../views/pages/About/AboutIndex";

function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <HomeIndex />
        },
        {
            path: "/about",
            element: <AboutIndex />
        }
    ]);

    return routes;
}

export default CustomRoutes;