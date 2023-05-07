import React from "react";
import { Link } from 'react-router-dom';


export default function CopyRight (){
    const currentYear = new Date().getFullYear();


    return (
        <div className="copyRight">
                <Link to="/Privacy"  style={{textDecoration:"none" }}> 
                    <div className="copyright">  
                    © <span>{currentYear} </span> 
                    Zguric App | sva prava pridržana
                    </div>
                </Link>
            </div>  
    )
}