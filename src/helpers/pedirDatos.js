import data from "../data/data.json";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const pedirItemCodigo = (codigo) => {

    return new Promise ((resolve, reject) => {


        const item = data.find((cod) => cod.codigo === 1433)

        if(item){
            resolve(item)
        }else{
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}