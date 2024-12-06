
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cadastrados from "./pages/Cadastrados";

//Importando componente

import Header from "./components/Header";


function RoutesApp(){

    return(

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/cadastrados" element={ <Cadastrados />} />
            </Routes>

        </BrowserRouter>
        
    )

}

export default RoutesApp;