import React from "react";
import {BsArrowLeft} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./styles/playerstyle.css"
import video from "../assets/video.mkv";


function Player(){
const navigate=useNavigate();

    return <div>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>{navigate(-1)}}/>
            </div>
            <video src={video} autoplay loop controls muted/>
        </div>
    </div>
}

export default Player;