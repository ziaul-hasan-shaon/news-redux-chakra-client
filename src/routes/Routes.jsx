import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import CategoryNews from "../Pages/Home/CategoryNews/CategoryNews";
import NewsDetails from "../layout/NewsDetails";
import DetailsNews from "../Pages/Home/SingleNews/DetailsNews";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: 'news',
        element: <NewsDetails></NewsDetails>,
        children: [
            {
                path: '/news/:id',
                element: <DetailsNews></DetailsNews>,
            }
        ]
    }
])

export default router;