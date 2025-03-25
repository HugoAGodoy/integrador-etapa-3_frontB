import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

// ! CREANDO CONTEXTO

// ! 1. Creamos el Context
const ProductosContext = createContext()
// ! 2. Armamos el Provider
const ProductosProvider = ( { children } ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])
    

    const getAllProductos = async () => {

        try {
            
            const prods = await peticionesHttp(url, {})

            setProductos(prods)

        } catch (error) {
            console.error('[getAllProductos]', error)
        }

    }

    const data = {
        productos
    }

    return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}
// ! 3. Exportamos el Context y el Provider
export { ProductosProvider }
export default ProductosContext

