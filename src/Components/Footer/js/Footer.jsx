import React from "react";
import AboutUsHome from "./AboutUsHome";
import { Link } from 'react-router-dom';



export default function Footer () {
    
        const currentYear = new Date().getFullYear();
        
    return (
        <footer>
            <div className="footer-container">
                <Link to="/o_stranici" >
                    <div className="aboutUs">
                       <AboutUsHome/> 
                    </div>
                </Link>                                
            </div> 
            <div className="copyRight">
                <Link to="/pravila_privatnosti"  style={{textDecoration:"none" }}> 
                    <div className="copyright">  
                    © <span>{currentYear} </span> 
                    Zguric App | sva prava pridržana
                    </div>
                </Link>
            </div>           
        </footer>
    );
}
