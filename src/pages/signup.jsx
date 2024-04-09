import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../config/firebase-config";
import {createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth"
import Background from "../components/background";
import Header from "../components/header";
import "./styles/signupstyle.css"

function Signup(){
const [showpassword,setshowpassword]=useState(false);
const [formvalues , setformvalues]=useState({email:"",password:""})
/*const handlesignin = async()=>{
    const {email,password} = formvalues;
    await createUserWithEmailAndPassword(firebaseAuth,email,password)
    console.log(formvalues)
}
const navigate=useNavigate();
onAuthStateChanged(firebaseAuth,(currentuser)=>{
    if(currentuser) navigate("/");
})*/

    return <div className="container"showpassword={showpassword}>
        <Background className="signimg"/>
        <div className="content">
            <Header login/>
            <div className="body flex column a-centre j-centre">

                <div className="text flex column">
                    <h1>unlimited movies,TV shows and more</h1>
                    <h4>watch anywhere , cancel anytime</h4>
                    <h6>Ready to watch? Enter your mail to register or restart membership</h6>
                </div>
                <div className="form">
                    <input className="signupinput" type="email" placeholder="email address" name="email" value={formvalues.email} onChange={(e)=>setformvalues({...formvalues, [e.target.name]:e.target.value})}/>
                    {  
                    showpassword
                    ? <input type="password" placeholder="password" name="password" value={formvalues.password} onChange={(e)=>setformvalues({...formvalues, [e.target.name]:e.target.value})}/>
                    : <button onClick={()=>setshowpassword(true)}>Get started</button> 
                    }
                </div>
                <button className="btn">Sign Up</button>

            </div>
         </div>
    </div>
}


export default Signup;