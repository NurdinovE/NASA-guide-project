import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home"
import Main from "../pages/Main";
import Error from "../pages/Error";

import {routerType} from "./interfaces/routerType";


const pagesData: routerType[] = [
    {
        path: "",
        title: "home",
        element: <Home/>
    },
    {
        path: "/nasa",
        element: <Main/>,
        title: "main"
    },
    {
        path: "*",
        element: <Error/>,
        title: "error"
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};
export default AppRouter;