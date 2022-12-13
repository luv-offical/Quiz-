import React from "react";
import { useContext } from "react";
import { QuizContext } from "../main/Quiz2";
import image from "../img/i.jpg";


export default function Start(){   
   
    const {setStart} = useContext(QuizContext)
    return(
        
        <div style={{ backgroundImage:`url(${image})`,backgroundRepeat: "no-repeat", backgroundSize:"cover",display: "flex", justifyContent: "center", paddingTop:"400px", placeItems: "center", height: '100vh'}}>
            <button onClick={()=> setStart(true)} style={{ fontSize:"90px", color: "white", border:"4px dotted",borderRadius:"38px",  
       }}><span>Start</span></button> 
                   </div>
       
    )

}
