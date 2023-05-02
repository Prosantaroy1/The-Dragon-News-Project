import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Categories/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to='/categories/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
    {
        path: "categories",
        element: <Main/>,
        children:[
        
            {
                path: ':id',
                element: <Categories/>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout/>,
        children:[
            {
                path: ':id',
                element: <PrivetRouter><News/></PrivetRouter>,
                loader: ({params}) =>fetch(`http://localhost:5000/news/${params.id}`) 
            }
        ]
    }
])
export default router;