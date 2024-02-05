import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos"; 
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    
    const [licores, setLicores] = useState ([]);
    const categoria = useParams().categoria
    const [titulo, setTitulo] = useState("Licores")
  

    useEffect (() => {
        pedirDatos()
            .then((res) => {
                console.log(res)
                if (categoria) {
                    setLicores( res.filter((lic) => lic.categoria.toLowerCase() === categoria.toLowerCase()) );
                    setTitulo(categoria)
                }else{
                    setLicores(res);
                    setTitulo("Licores")
                }
                console.log("Licores", licores)
            })
    }, [categoria])

    return (
        <div>
            <ItemList licores={licores} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;
