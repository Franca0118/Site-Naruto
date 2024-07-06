import React, { useState, useEffect} from "react";
import Header from "../../Header/index";
import '../../todosOsPerso/index.css'

export default () => {
    let [meuClas, setMeuCla] = useState([])
    let [meusPersonagens, setmeusPersonagens] = useState([])
    let id = new URLSearchParams(window.location.search)
    id = id.get("idcla") 
    
    


    useEffect(()=>{
        fetch(`https://dattebayo-api.onrender.com/characters?limit=1431`)
        .then(data => data.json())
        .then(data => setmeusPersonagens(data.characters))

    fetch(`https://dattebayo-api.onrender.com/clans/${id}`)
        .then(data => data.json())
        .then(data => setMeuCla(data))
    },[])

    
    
    

    
    return (
        <>
            <Header></Header>
            <h1 id="nomecla">{meuClas.name}</h1>
             <div id="all">
            
             {
                meusPersonagens < 1?
                    "CARREGANDO" :
                    meuClas < 1 ?  "CARREGANDO" :
                        
                        meusPersonagens.filter((perso)=>meuClas.characters.includes(perso.id)).map((perso)=>{
                            return (
                                <div key={perso.id}>
                                    <h1 key={perso.id}>{perso.name}</h1>
                                    <img src={perso.images[1] ? perso.images[1] : perso.images[0] ? perso.images[0] : "https://t.ctcdn.com.br/6cKn51P3N2zuCixJVhbXqJN8_x4=/0x197:1393x1048/1024x0/smart/filters:format(webp)/i734534.png"} />
                                </div>
                            )
                          })
                        
             }
             </div>
            
            
                
        
        
        </>
    )
}