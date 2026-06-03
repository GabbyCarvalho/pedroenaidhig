import { createBrowserRouter } from "react-router-dom"
//Layout
import RootLayout from "./pages/layout/RootLayout"

//Paginas
import Home from "./pages/Home"
import SobreNos from "./pages/SobreNos"
import Areas from "./pages/Areas"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Faq from "./pages/Faq"
import Contato from "./pages/Contato"
import PoliticaPrivacidade from "./pages/subpages/Privacidade"

const router = createBrowserRouter ([{
    path: "/",
    element: <RootLayout />,
    children: [
        {index: true, element: <Home />}, 
        {path: "sobrenos", element: <SobreNos />}, 
        {path: "areas", element: <Areas />}, 
        {path: "blog", element: <Blog />}, 
        {path: "blog/:slug", element: <BlogPost />},
        {path: "Faq", element: <Faq />}, 
        {path: "contato", element: <Contato />}, 
        {path: "privacidade", element: <PoliticaPrivacidade />}, 
    ]
}])

export default router