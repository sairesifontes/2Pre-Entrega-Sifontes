import React from "react";
import logo from './assets/LOGO.png'
import Cart from '../Carrito/CartWidget';
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="container-NavBar">
          <Link to="/"><img className="logo" src={logo} alt="logo de empresa"/></Link>
          <ul>
            <li><Link className="item" to="/">Inicio</Link></li>
            <li><Link className="item" to="/licores">Licores</Link></li>
            <li><Link className="item" to="/licores/cervezas">Cervezas</Link></li>
            <li><Link className="item" to="/licores/vinos">Vinos</Link></li>
            <li><Link className="item" to="/licores/vodka">Vodka</Link></li>
          </ul>

          <Cart/>

        </nav>

    )
}

export default NavBar 