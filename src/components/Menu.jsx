import React from "react"
import { Link } from "react-router-dom"


export default function Menu() {
    return (
        <nav class="menu">
            
            <Link to="/Home"><img src="./img/logoviagem.jpg" alt="Logo" /></Link><br/>
            <Link to="/Pacotes">Pacotes</Link><br/>
            <Link to="/Promocoes">Promoções</Link><br/>
            <Link to="/Contato">Contato</Link>

        </nav>
    
    );
}