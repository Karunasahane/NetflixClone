import React from "react";
import Login from "../pages/login";
import { useNavigate } from "react-router-dom";

function Card(props) {
      const navigate = useNavigate();
      return (
        <div className="card" style={{width:"15%",height:"400px",overflowY:"clip",margin:"10px"}} onClick={()=>navigate("/player")}>
          <img src={props.Poster} className="card-img-top" alt="..." />
          <div className="card-body" style={{backgroundColor:"black",opacity:"0.8",color:"white"}}>
              <h5 className="card-title">{props.Title}</h5>
              <p className="card-text">{props.description}</p>
          </div>
        </div>
      );
    }
export default Card;