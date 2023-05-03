import React from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/Header/js/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Chat from "./pages/Chat/ChatP";
import Contakt from "./pages/Contact/Contakt";
import Privacy from "./pages/Privacy/Privacy";



function App() {
  return (
    <React.Fragment>
        <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/o_stranici" element={<About/>}/>
              <Route path="/chat" element={<Chat/>}/>
              <Route path="/kontakt" element={<Contakt/>}/>
              <Route path="/pravila_privatnosti" element={<Privacy/>}/>
            </Routes>     
    </React.Fragment>
   );
 }

export default App;


