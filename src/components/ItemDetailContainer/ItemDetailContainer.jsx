import { useEffect, useState } from "react"
import { pedirItemCodigo } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const codigo = useParams().codigo


    useEffect(() => {
        pedirItemCodigo(Number(codigo))
            .then((res) => {
                setItem(res)
            })
    }, [codigo] ) 



    return (
        <div>
            { item && <ItemDetail item={item} />}
        </div>
    )

}


export default ItemDetailContainer