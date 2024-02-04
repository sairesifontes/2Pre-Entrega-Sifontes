import cart from './assets/cart.svg'
import './Carrito.css';


const Cart = () => {
    return (
        <div className="container-carrito">
            <img className='carrito' src={cart} alt="carrito de compras"/>
            <p>0</p>
        </div>
    )
}

export default Cart