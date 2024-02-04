import Item from "../Item/Item"
import './ItemList.css';
import { mayuscula } from "../../helpers/mayuscula";

const ItemList = ( { licores, titulo } ) => {


    return (
        <div>
            <hr/>
            <h2 className="titulo-licores">{mayuscula(titulo)}</h2>

            <div className="container-licores">
                { licores.map((lic) => <Item licor={lic} key={lic.codigo}/>) }
            </div>

        </div>
    )
}

export default ItemList
