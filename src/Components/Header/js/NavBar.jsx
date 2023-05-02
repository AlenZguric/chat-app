import React from "react";
import { useRef, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import "../css/header.css";




export default function NavBar() {
    const navRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
          if (navRef.current && !navRef.current.contains(event.target)) {
            navRef.current.classList.remove("responsive_nav");
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [navRef]);
    

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header>
            <h3><Link to="/" alt="Zguric Apps" >Zguric Apps</Link></h3>
            <nav ref= {navRef}>
                <ul>
                    <CustomLink to="/" className="active">Početna</CustomLink>
                    <CustomLink to="/chat">Chat</CustomLink>
                    <CustomLink to="/kontakt">Kontakt</CustomLink>
                    <CustomLink to="/o_stranici">O Stranici</CustomLink> 
                    <CustomLink to="/pravila_privatnosti" >Pravila</CustomLink>
                </ul>
                
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

function CustomLink({to, children, ...props}){
   
   const reslovedPath = useResolvedPath(to)
   const isActive = useMatch({ path: reslovedPath.pathname, end: true })
   const closeNav = () => {
    const navRef = document.querySelector('nav')
    navRef.classList.remove('responsive_nav')
  }

    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} onClick={closeNav } {...props}>
                {children}
            </Link>
        </li>
    );
}