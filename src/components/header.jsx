import React, { useState } from "react";
import "./header.css";
import headerLogo from "../assets/logo-carim.jpg"
import logoMenu from "../assets/logo-menu.png"


export default function Header() {
    const [menuAberto, setEstadoMenu] = useState(false);

    function alterarEstadoMenu(){
        setEstadoMenu(!menuAberto);

        if(!menuAberto)
        {
            document.getElementsByClassName("menu-aberto").width = "90px"
        }
}

    return (
        <header>
            <div className="header-container">
                <img className="headerLogo" src={headerLogo} alt="logo do Carim" />

                <img className="logoMenu" onClick={alterarEstadoMenu} src={logoMenu} alt="logo do Menu" />
            </div>
            <div className="header-container-menu">
                <nav className={menuAberto ? 'menu-aberto' : 'menu-fechado'}>
                    <ul className="header-lista">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Doação</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}