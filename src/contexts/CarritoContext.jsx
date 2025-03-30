import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CarritoContext = createContext()

const CarritoProvider = ( { children} ) => {

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

    const data ={
        agregarProductoAlCarritoContext,
        carrito
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

export { CarritoProvider }
export default CarritoContext

