// import '/ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [cantidad, setCantidad] = useState(initial)

    const incrementa = () => {
        
        if( cantidad < stock ){
            setCantidad( cantidad + 1 )
        }
    }

    const decrementa = () => {

        if( cantidad > 1 ){
            setCantidad( cantidad - 1)
        }
    }

    return(

        <div className='Contador'>
            <div className='Controles'>
                <button className='Btn-Baja' onClick={decrementa}>-</button>
                <h4 className='Numero-cantidad'>{cantidad}</h4>
                <button className='Btn-Sube' onClick={incrementa}>+</button>
            </div>

            <div>
                <button className='Btn-agregar' onClick={() => onAdd (cantidad)} disabled={stock}></button>
            </div>
        </div>
    )

}


export default ItemCount