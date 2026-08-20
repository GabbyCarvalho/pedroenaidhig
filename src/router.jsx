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

//subpages
import PoliticaPrivacidade from "./pages/subpages/Privacidade"
import DireitoFamilia from "./pages/subpages/DireitoFamilia"
import DireitoCivil from "./pages/subpages/DireitoCivil"
import DireitoImobiliario from "./pages/subpages/DireitoImobiliario"
import DireitoSaude from "./pages/subpages/DireitoSaude"
import DireitoSucessorio from "./pages/subpages/DireitoSucessorio"
import Dpo from "./pages/subpages/Dpo"


const router = createBrowserRouter ([{
    path: "/",
    element: <RootLayout />,
    children: [
        {index: true, element: <Home />}, 
        {path: "sobrenos", element: <SobreNos />}, 
        {path: "areas", element: <Areas />}, 
        {path: "areas/familia", element: <DireitoFamilia />},
        {path: "areas/civil", element: <DireitoCivil />},
        {path: "areas/imobiliario", element: <DireitoImobiliario />},
        {path: "areas/saude" , element: <DireitoSaude />},
        {path: "areas/sucessorio", element: <DireitoSucessorio />},
        {path: "areas/dpo", element: <Dpo />},
        {path: "blog", element: <Blog />}, 
        {path: "blog/:slug", element: <BlogPost />},
        {path: "faq", element: <Faq />}, 
        {path: "contato", element: <Contato />}, 
        {path: "privacidade", element: <PoliticaPrivacidade />}, 
    ]
}])

export default router