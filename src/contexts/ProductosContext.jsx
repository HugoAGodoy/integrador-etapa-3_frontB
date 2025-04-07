import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";
import { API_PRODUCTOS_URL } from "../config/apiConfig";

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [productoAEditar, setProductoAEditar] = useState(null);

    useEffect(() => {
        getAllProductos();
    }, []);

    // Obtener todos los productos
    const getAllProductos = async () => {
        try {
            const prods = await peticionesHttp(API_PRODUCTOS_URL);
            setProductos(prods);
        } catch (error) {
            console.error('[getAllProductos]', error.message);
        }
    };

    // Crear un nuevo producto
    const crearProductoContext = async (productoNuevo) => {
        try {
            delete productoNuevo.id;

            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoNuevo)
            };

            const prodCreado = await peticionesHttp(API_PRODUCTOS_URL, options);
            if (prodCreado) {
                setProductos([...productos, prodCreado]);
            }
        } catch (error) {
            console.error('[crearProductoContext]', error.message);
        }
    };

    // Actualizar un producto existente
    const actualizarProductoContext = async (productoAEditar) => {
        try {
            const options = {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(productoAEditar)
            };

            // URL con el ID del producto para actualizar
            const urlActualizar = `${API_PRODUCTOS_URL}/${productoAEditar.id}`;

            const productoEditado = await peticionesHttp(urlActualizar, options);
            if (productoEditado) {
                const nuevoEstadoProductos = productos.map(prod => 
                    prod.id === productoEditado.id ? productoEditado : prod
                );
                setProductos(nuevoEstadoProductos);
            }
        } catch (error) {
            console.error('[actualizarProductoContext]', error.message);
        }
    };

    // Eliminar un producto
    const eliminarProductoContext = async (id) => {
        try {
            const urlEliminacion = `${API_PRODUCTOS_URL}/${id}`;

            const options = {
                method: 'DELETE'
            };

            const prodEliminado = await peticionesHttp(urlEliminacion, options);
            if (prodEliminado) {
                const nuevoEstadoProductos = productos.filter(prod => prod.id !== id);
                setProductos(nuevoEstadoProductos);
            }
        } catch (error) {
            console.error('[eliminarProductoContext]', error.message);
        }
    };

    // Datos compartidos en el contexto
    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext,
        productoAEditar,
        setProductoAEditar
    };

    return (
        <ProductosContext.Provider value={data}>
            {children}
        </ProductosContext.Provider>
    );
};

export { ProductosProvider };
export default ProductosContext;
