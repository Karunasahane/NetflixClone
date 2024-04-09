import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Movies from "./pages/movies";
import Netflix from "./pages/netflix";
import Player from "./pages/player";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Netflix/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/player" element={<Player/>}></Route>
                <Route path="/movies" element={<Movies/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;