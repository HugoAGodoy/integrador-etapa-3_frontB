import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import ItemCarrito from "./ItemCarrito";
import './ListadoCarrito.scss';

const ListadoCarrito = () => {
    const { carrito, limpiarCarritoContext, guardarCarritoBackendContext } = useContext(CarritoContext);
    
    console.log(carrito);

    const handleComprar = () => {
        console.log('Comprando...');
        guardarCarritoBackendContext();
    };
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito');
        limpiarCarritoContext();
    };

    
    const totalCompra = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
    
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    return (
        <>
            <table className='tabla-carrito'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carrito.length <= 0 ? (
                            <tr>
                                <td colSpan={6} style={{textAlign: 'center'}}>No hay productos</td>
                            </tr>
                        ) : (
                            carrito.map((producto, idx) => (
                                <ItemCarrito key={idx} producto={producto} />
                            ))
                        )
                    }
                </tbody>

                {carrito.length > 0 && (
                    <tfoot>
                        <tr>
                            <td colSpan={2} style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Productos:</td>
                            <td style={{ fontWeight: 'bold' }}>{totalProductos}</td>
                            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Compra:</td>
                            <td style={{ fontWeight: 'bold' }}>${totalCompra}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                )}
            </table>
            <hr />
            {carrito.length > 0 && (
                <>
                    <button className="botones-carrito" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="botones-carrito" onClick={handleComprar}>Comprar</button>
                </>
            )}
        </>
    );
};

export default ListadoCarrito;
