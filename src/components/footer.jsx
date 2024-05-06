import React from "react";
import './footer.css';
import logoCarim from '../assets/carim-logo-branco.png'

export default function footer(){
    return(
        <>
           <div className="footer-area">
                <div className="footer-interno">
                    <a href="#"><img src={logoCarim} alt="Logo da carim" /></a>
                    <hr className="row"/>
                    <p className="footer-assinatura">© 2024 Carim</p>
                </div>
           </div>
           
        </>
    );
}