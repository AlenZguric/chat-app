import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../../css/header.css";
import "../../css/body.css";

export default function NavBar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3>Zguric Apps</h3>
            <nav ref= {navRef}>
                <a href="/#">Početna</a>
                <a href="/#">Chat</a>
                <a href="/#">Kontakt</a>
                <a href="/#">O Stranici</a> 
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}