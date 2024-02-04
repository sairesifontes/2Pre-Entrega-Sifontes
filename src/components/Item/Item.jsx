import { Link } from 'react-router-dom';
import './Item.css';


const Item = ( {licor} ) => {

    return (
        <div className='licor'>
            <img className='imagen-licor' src={`/img/${licor.imagen}`} alt={licor.nombre}/>

            <div>
                <h3>{licor.nombre}</h3>
                <p>Precio: ${licor.precio}</p>
                <p>Categoria: {licor.categoria}</p>
                <button className='btn-ver-mas'><Link className="ver-mas" to={`/item/${licor.codigo}`}>Ver más</Link></button>
            </div>
        </div>
    )
}

export default Item