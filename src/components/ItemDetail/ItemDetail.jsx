

const ItemDetail = ( {item} ) => {
    




    return (
        <div>
            <div className="licores-detalle">
                <img  alt={item.nombre}/>
                <div>
                    <h3 className="titulo">{item.nombre}</h3>
                    <p className="descripcion">Descripcion</p>
                    <p className="categoria">{item.categoria}</p>
                    <p className="precio">{item.precio}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail