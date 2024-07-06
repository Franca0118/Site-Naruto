
import React, { useState, useEffect} from "react";
import Header from "../Header/index.jsx";


export default () => {
    let [meusPoderes, setmeusPoderes] = useState([])


    useEffect(()=>{
        fetch(`https://dattebayo-api.onrender.com/kekkei-genkai?limit=1000`)
        .then(data => data.json())
        .then(data => setmeusPoderes(data['kekkei-genkai']))
    },[])

    
    return (
        <>
            <Header></Header>
             
             <div id="all">

                {
                    meusPoderes.length < 1 ? 
                    <h1>CARREGANDO</h1> :

                    meusPoderes.map((poder)=>{
                        
                            return ( <a key={poder.id} href={"/poder?idpoder="+poder.id}><div key={poder.id} className="poderClique">
                               <h1>{poder.name}</h1><br></br>
                              </div></a>)
                          
                          
                          
                    })
                }

             </div>
            
                
        
        
        </>
    )
}