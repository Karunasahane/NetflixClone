import React from "react";
import { moviesarray,moviesarray2 } from "../moviesarray";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();
    return (
      <div className="card" style={{width:"15%",height:"300px",overflowY:"clip",margin:"8px"}} onClick={()=>navigate("/player")}>
        <img src={props.Poster} className="card-img-top" alt="..." style={{width:"100%",height:"190px",overflowY:"clip"}}/>
        <div className="card-body" style={{backgroundColor:"black",opacity:"0.8",color:"white"}}>
            <h5 className="card-title">{props.Title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
      </div>
    );
  }

function Temp(movie){
    return <Card Title={movie.Title} Poster={movie.Poster} description={movie.Plot}/>
}

function Movies(props){
    const navigate = useNavigate();
    return <div style={{backgroundColor:"black"}}>
        <h1 style={{textDecorationLine:"underline",color:"red",fontSize:"60px",padding:"20px",fontFamily:"fantasy"}}>Movies</h1>
        
        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>English</h2>
        <div style={{display:"flex",justifyContent:"center"}}> {moviesarray.map(Temp)} </div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Hindi</h2>
        <div style={{display:"flex",justifyContent:"center"}}>{moviesarray2.map(Temp)}</div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Tamil</h2>
        <div style={{display:"flex",justifyContent:"center"}}> {moviesarray.map(Temp)} </div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Telugu</h2>
        <div style={{display:"flex",justifyContent:"center"}}>{moviesarray2.map(Temp)}</div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Marathi</h2>
        <div style={{display:"flex",justifyContent:"center"}}> {moviesarray.map(Temp)} </div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Korean</h2>
        <div style={{display:"flex",justifyContent:"center"}}>{moviesarray2.map(Temp)}</div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Chinese</h2>
        <div style={{display:"flex",justifyContent:"center"}}> {moviesarray.map(Temp)} </div>

        <h2 style={{color:"white",fontFamily:"revert",marginLeft:"15px"}}>Urdu</h2>
        <div style={{display:"flex",justifyContent:"center"}}>{moviesarray2.map(Temp)}</div>

    </div>
}

export default Movies;