import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";
import Swal from "sweetalert2";

const CarritoContext = createContext()

const CarritoProvider = ( { children} ) => {

    const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO
    /*console.log(urlCarrito)*/

    const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

function elProductoEstaEnElCarrito(producto) {
    const nuevoArray = carrito.filter(prod => prod.id === producto.id)
    return nuevoArray.length
}

function obtenerProductoDeCarrito(producto) {
return carrito.find(prod => prod.id === producto.id) 
}

const agregarProductoAlCarritoContext = (producto) => {
console.log('Ya estoy en agreagr de contexto', producto)

if (!elProductoEstaEnElCarrito(producto)) {
  console.log('No esta en el carrito')
  producto.cantidad = 1
  agregarAlCarrito(producto)
} else {
    console.log('Ys esta en el carrito')
    const productoDeCarrito = obtenerProductoDeCarrito(producto)
    console.log(productoDeCarrito)
    productoDeCarrito.cantidad++
    window.localStorage.setItem('carrito', JSON.stringify(carrito))
}

}

const eliminarProductoDelCarritoContext = (id) => {
    console.log(id)
    eliminarDelCarrito(id)
}


const limpiarCarritoContext = () =>{
    console.log('limpando carrito')
    limpiarCarrito()
}


const guardarCarritoBackendContext = async () => {
    try {
        console.log('Llego al contexto la señal de guardado'); 
     
        const dataCarrito = {
            createAt: Date.now(),
            cantidad: carrito.length,
            carrito
        }

        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(dataCarrito)
        };

        const carritoGuardado = await peticionesHttp(urlCarrito, options);
        console.log(carritoGuardado);

       
        Swal.fire({
            title: "Compra realizada",
            text: "Tu compra se ha registrado con éxito",
            icon: "success",
            confirmButtonText: "OK"
        });

        limpiarCarrito();

    } catch (error) {
        console.error('[guardarCarritoBackendContext]', error);

        
        Swal.fire({
            title: "Error",
            text: "Hubo un problema al guardar la compra",
            icon: "error",
            confirmButtonText: "Intentar de nuevo"
        });
    }
};



   const data ={
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        limpiarCarritoContext,
        guardarCarritoBackendContext,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext

