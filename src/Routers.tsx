import { Home } from "./Pages/Home/Home"
import { Aboutus } from "./Pages/Aboutus/Aboutus"
import { Category } from "./Pages/Category/Category"
import { Product } from "./Pages/Product/Product"
import { Basket } from "./Pages/Basket/Basket"
import { LoginAndRegester } from "./Pages/LoginAndRegester/LoginAndRegester"
import {CallUs} from "./Pages/CallUs/CallUs"
import { Page404 } from "./Pages/Page404/Page404"
import { ProductsInCat } from "./Pages/ProductsInCat/ProductsInCat"



export let pageRoutes = [

    { path: '/', element: <Home /> },
    { path: 'https://mahdi-maleki1991.github.io/shop', element: <Home /> }, //for github
    { path: '/Aboutus', element: <Aboutus /> },
    { path: '/Category', element: <Category /> },
    { path: '/Product/:productID', element: <Product /> },
    { path: '/Basket', element: <Basket /> },
    { path: '/LoginAndRegester', element: <LoginAndRegester /> },
    { path: '/CallUs', element: <CallUs /> },
    { path: '/ProductsInCat/:catTittle', element: <ProductsInCat /> },
    { path: '/*', element: <Page404 /> },


]











