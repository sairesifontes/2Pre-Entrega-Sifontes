import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"


const ItemDetail = ( {item} ) => {
    

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }

    const handleAgregar = () => {
        console.log( {...item, cantidad} )
    }


    return (
        <div>
            <div className="licores-detalle">
                <img className='imagen-licor' src={`/img/${item.imagen}`} alt={item.nombre}/>
                <div>
                    <h3 className="titulo">{item.nombre}</h3>
                    <p className="descripcion">Descripcion</p>
                    <p className="categoria">{item.categoria}</p>
                    <p className="precio">$ {item.precio}</p>
                    <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail