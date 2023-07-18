import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Block/Layout"
import Homescreen from "../Pages/Homescreen"


export const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>,
            children: [

                {
                    index: true,
                    element: <Homescreen/>
                }
            ]
        }
    ]
)