import {useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Movielogo from "../assets/homeTitle.webp";
import backgroundimg from "../assets/home.jpg";
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai"
import "./styles/netflixstyle.css"
import Cardslider from "../components/cardslider";

function Netflix(){
const [isscrolled,setIsScrolled] = useState(false);
const navigate = useNavigate();
/*const dispatch=useDispatch();

useEffect(()=>{
    dispatch(getGenres());
},[])

window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false : true)
    return ()=> (window.onscroll=null);
}*/


    return <div>
        <Navbar isscrolled={isscrolled}/>
        <div className="hero">
            <img className="background-image" src={backgroundimg} alt="bg"/>
            <div className="nfcontainer">
                <div className="nflogo">
                    <img className="nfimg" src={Movielogo} alt="Movielogo"/>
                </div>
                <div className="buttons flex">
                    <button className="nfbutton flex j-center a-center" onClick={() => navigate("/player")}>  
                        <FaPlay/> 
                        Play
                    </button>
                    <button className="nfbutton flex j-center a-center">
                        <AiOutlineInfoCircle/> 
                        More info
                    </button>
                </div>
            </div>
        </div>
        <div style={{backgroundColor:"black"}}><Cardslider/></div>
    </div>
}

export default Netflix;