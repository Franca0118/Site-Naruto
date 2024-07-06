import React, { useState, useEffect} from "react";
import Header from "../Header/index.jsx";


export default () => {
    let [meusClans, setmeusClans] = useState([])


    useEffect(()=>{
        fetch(`https://dattebayo-api.onrender.com/clans?limit=10000`)
        .then(data => data.json())
        .then(data => setmeusClans(data.clans))
    },[])

    

    
    return (
        <>
            <Header></Header>
             
             <div id="all">

                {
                    meusClans.length < 1 ? 
                    <h1>CARREGANDO</h1> :

                    meusClans.map((cla)=>{
                        
                          if (cla.id != 47)
                          {
                            return ( <a href={"/cla?idcla="+cla.id}><div className="poderClique">
                               <h1>{cla.name}</h1><br></br>
                              </div></a>)
                          }
                          
                          
                    })
                }

             </div>
            
                
        
        
        </>
    )
}