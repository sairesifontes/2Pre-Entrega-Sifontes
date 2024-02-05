import './ItemCount.css'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {
    
    
    return(

        <div className='contador-container'>
            <div className='controles'>
                <button className='btn-Baja' onClick={ handleRestar } >-</button>
                <p className='numero-cantidad'>{cantidad}</p>
                <button className='btn-Sube' onClick={ handleSumar } >+</button>
            </div>
            
            <button className='btn-agregar' onClick={handleAgregar}>Agregar al Carrito</button>
            
        </div>
    )

}


export default ItemCount