import App from "@/App"
import { lazy } from "react"
const Home = lazy(()=>import("@/pages/home/index"))
const ChildrenA = lazy(()=>import("@/pages/home/childrenA/index"))
const ChildrenB = lazy(()=>import("@/pages/home/childrenB/index"))
const News = lazy(()=>import("@/pages/news/index"))
const MainRoutes = {
    path: "/",
    element:<App/>,
    children:[
        {
            path: 'home',
            element: <Home/>,
            children:[
                {
                    path:'childrenA',
                    element: <ChildrenA/>
                },
                {
                    path:'childrenB',
                    element: <ChildrenB/>
                }
            ]
        },
        {
            path:'news',
            element: <News/>
        }
    ]
}
export default MainRoutes