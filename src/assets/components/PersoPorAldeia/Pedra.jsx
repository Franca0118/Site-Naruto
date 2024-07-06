import React, { useState , useEffect} from "react";
import Header from "../Header/index";
import './Aldeias.css'




export default () =>{
    let [meusPersonagens, setmeusPersonagens] = useState([])
    let [minhaVila, setminhaVila] = useState([])


    useEffect(()=>{
        fetch(`https://dattebayo-api.onrender.com/characters?limit=1431`)
        .then(data => data.json())
        .then(data => setmeusPersonagens(data.characters))
    },[])

    useEffect(()=>{
        fetch(`https://dattebayo-api.onrender.com/villages/11`)
        .then(data => data.json())
        .then(data => setminhaVila(data))
    },[])

    
    

    return(
        <>
            <Header></Header>
            <h1>PERSONAGNS DA VILA DA PEDRA</h1>
            <div id="all">
            {
               meusPersonagens.length < 1  ? 
               "CARREGANDO..." :
                   minhaVila.length < 1 ? "CARREGANDO...":
               meusPersonagens.map((perso)=>{
                    if (minhaVila.characters.includes(perso.id))
                    {
                        return ( 
                        <div key={perso.id}>
                            <h1 key={perso.id}>{perso.name}</h1>
                            <img src={perso.images[1] ? perso.images[1] : perso.images[0] ? perso.images[0] : "https://t.ctcdn.com.br/6cKn51P3N2zuCixJVhbXqJN8_x4=/0x197:1393x1048/1024x0/smart/filters:format(webp)/i734534.png"} />
                        </div>
                        )
                    }
                })
            }
            </div>
        </>
    )
}