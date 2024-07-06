import React from "react";
import Header from "../Header/index";
import "../../../index.css"



export default () =>{
    
    
        
    
    return (
        <>
            <Header></Header>
            <div id="tudo">
            

            <div className="card">
                <h1>VILA DA FOLHA</h1>
                <img src="src\assets\components\img\mapa2.png"/>
                <p></p>
               <a href="/PersonagensFolha"> <button>Ver</button></a>
            </div>

            <div className="card">
                <h1>VILA DA AREIA</h1>
                <img src="src\assets\components\img\mapa1.png"/>
                <p></p>
                <a href="/PersonagensAreia"> <button>Ver</button></a>
            </div>

            <div className="card">
                <h1>VILA DA PEDRA</h1>
                <img src="src\assets\components\img\mapa5.png"/>
                <p></p>
                <a href="/PersonagensPedra"> <button>Ver</button></a>
            </div>
            
            <div className="card">
                <h1>VILA NUVEM</h1>
                <img src="src\assets\components\img\mapa3.png"/>
                <p></p>
                <a href="/PersonagensNuvem"> <button>Ver</button></a>
            </div>



            <div className="card">
                <h1>VILA NEVOA</h1>
                <img src="src\assets\components\img\mapa4.png"/>
                <p></p>
                <a href="/PersonagensNevoa"> <button>Ver</button></a>
            </div>
            

            
            
            </div>
        </>
    )
}