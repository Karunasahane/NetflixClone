import React from "react";
import Card from "../components/card";
import {moviesarray,moviesarray2} from "../moviesarray";
import { useNavigate } from "react-router-dom";

function Temp(movie){
    return <Card Title={movie.Title} Poster={movie.Poster} description={movie.Plot}/>
}

function Cardslider(){
    const navigate = useNavigate();
    return <div >
        <div style={{width:"100%",height:"35px"}}></div>
        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>New releases</h2>
        <div style={{display:"flex",justifyContent:"center"}}> {moviesarray.map(Temp)} </div>
        <p style={{color:"white",textAlign:"right", marginRight:"20px"}} onClick={()=>navigate("/movies")}>see more...</p>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>You might also like</h2>
        <div style={{display:"flex",justifyContent:"center"}}>{moviesarray2.map(Temp)}</div>
        <p style={{color:"white",textAlign:"right", marginRight:"20px",marginBottom:"0",paddingBottom:"30px"}} onClick={()=>navigate("/movies")}>see more...</p>
    </div>
  
}

export default Cardslider;