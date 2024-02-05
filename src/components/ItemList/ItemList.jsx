import Item from "../Item/Item"
import './ItemList.css';
import { mayuscula } from "../../helpers/mayuscula";

const ItemList = ( { licores, titulo } ) => {


    return (
        <>
            <hr/>
            <h2 className="titulo-licores">{mayuscula(titulo)}</h2>

            {licores.length > 0 ? ( 
                <div className="container-licores">
                    { licores.map((lic) => <Item licor={lic} key={lic.codigo}/>) }
                </div>) : (
                    <p>No hay licores disponibles para esta categoria😓</p>
                )
            }
            

        </>
    )
}

export default ItemList
