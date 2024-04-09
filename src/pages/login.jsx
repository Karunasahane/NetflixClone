import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../config/firebase-config";
import {signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth"
import Background from "../components/background";
import Header from "../components/header";
import "./styles/loginstyle.css"

function Login(){
const [formvalues , setformvalues]=useState({email:"",password:""})
/*const handlelogin = async()=>{
    const {email,password} = formvalues;
    await signInWithEmailAndPassword(firebaseAuth,email,password)
}
const navigate=useNavigate();
onAuthStateChanged(firebaseAuth,(currentuser)=>{
    if(currentuser) navigate("/");
})*/

    return <div className="Lpage">
        <Background/>
        <div className="Lcontent">
            <Header/>
            <div className="Lform-container flex column a-center j-center">
                <div className="Lform flex column a-centre j-centre">
                    <div className="Ltitle">
                        <h3>Login</h3>
                    </div>
                    <div className="Lcontainer flex column">
                        <input className="Linput" type="email" placeholder="email address" name="email" value={formvalues.email} onChange={(e)=>setformvalues({...formvalues, [e.target.name]:e.target.value})}/>
                        <input className="Linput" type="password" placeholder="password" name="password" value={formvalues.password} onChange={(e)=>setformvalues({...formvalues, [e.target.name]:e.target.value})}/>
                        <button className="Lbutton">Login</button> 
                    </div>
                </div>
            </div>
         </div>
    </div>
}

export default Login;