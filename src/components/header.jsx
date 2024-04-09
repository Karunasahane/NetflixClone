import React from "react";
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

function header(props){
    const navigate = useNavigate();
    return(
        <div className="flex" style={{display:"inline-flex",justifyContent:"space-between"}}>
            <div className="hlogo">
                <img src={logo} alt="logo" style={{height:"5rem"}}></img>
            </div>
            <button style={{margin:"2% 1%",height:"30px",paddingTop:"4px",borderRadius:"0.2rem"}}  onClick={() => navigate(props.login ? "/login" : "/signup")}>
                {props.login ? "Log In" : "Sign In"}
            </button>
        </div>
    )
}

export default header;