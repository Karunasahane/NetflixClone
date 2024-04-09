import React from "react";
import bgimg from "../assets/login.jpg"


function Background(){
    return(
        <div>
            <img src={bgimg} alt="background" style={{height:"100vh",width:"100vw",overflow:"hidden"}}></img>
        </div>
    )
}

export default Background;