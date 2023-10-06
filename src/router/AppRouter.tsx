import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home"
import Main from "../pages/Main";
import Error from "../pages/Error";
import Layout from "../latout/Layout";

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
        return (
            <Route path={"/"} element={<Layout />} key={path}>
                <Route key={title} path={`/${path}`} element={element} />
            </Route>
        )
    });

    return <Routes> {pageRoutes} </Routes>
};
export default AppRouter;