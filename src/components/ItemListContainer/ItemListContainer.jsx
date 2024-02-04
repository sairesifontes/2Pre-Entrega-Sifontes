import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const [licores, setLicores] = useState([]);
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("Licores")
  

    useEffect (() => {
        pedirDatos()
            .then((res) => {
                if(categoria) {
                    const licoresFiltrados = res.filter((licor) => licor.categoria === categoria)
                    setLicores(licoresFiltrados);
                    setTitulo(categoria)
                }else{
                    setLicores(res);
                    setTitulo("Licores")
                }
                
            })
    }, [categoria])

    return (
        <div>
            <ItemList licores={licores} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;
