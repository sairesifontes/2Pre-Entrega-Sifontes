import React from "react";
import logo from './assets/LOGO.png'
import Cart from '../Carrito/CartWidget';

function NavBar() {
    return (
        <div className="container-NavBar">
          <img className="logo" src={logo} alt="logo de empresa"/>
          <button className="item">Cervezas</button>
          <button className="item">Vinos</button>
          <button className="item">Vodkas</button>
          <Cart/>
        </div>
    )
}

export default NavBar 