import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./assets/components/Index/App.jsx";
import Aldeias from "./assets/components/Aldeias/Index.jsx"
import TodosPerso from "./assets/components/todosOsPerso/index.jsx"
import Clans from "./assets/components/Clans/index.jsx"
import Cla from "./assets/components/Clans/clansclique/index.jsx"
import Poder from "./assets/components/Poder/index.jsx"
import Poderes from "./assets/components/Poder/poderClique/index.jsx"

import PersoFolha from "./assets/components/PersoPorAldeia/Folha.jsx"
import PersoAreia from "./assets/components/PersoPorAldeia/Areia.jsx"
import PersoPedra from "./assets/components/PersoPorAldeia/Pedra.jsx"
import PersoNuvem from "./assets/components/PersoPorAldeia/Nuvem.jsx"
import PersoNevoa from "./assets/components/PersoPorAldeia/Nevoa.jsx"

const rotas = () => {
   return(
       <BrowserRouter>
           <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Aldeias" element={<Aldeias />} ></Route>
                <Route path="/TodosPersonagens" element={<TodosPerso />} ></Route>

                <Route path="/PersonagensFolha" element={<PersoFolha />} ></Route>
                <Route path="/PersonagensAreia" element={<PersoAreia />} ></Route>
                <Route path="/PersonagensPedra" element={<PersoPedra />} ></Route>
                <Route path="/PersonagensNuvem" element={<PersoNuvem />} ></Route>
                <Route path="/PersonagensNevoa" element={<PersoNevoa />} ></Route>

                <Route path="/Clans" element={<Clans />} ></Route>
                <Route path="/Cla" element={<Cla />} ></Route>

                <Route path="/Poderes" element={<Poder />} ></Route>
                <Route path="/Poder" element={<Poderes />} ></Route>
            </Routes>
       </BrowserRouter>
   )
}

export default rotas;