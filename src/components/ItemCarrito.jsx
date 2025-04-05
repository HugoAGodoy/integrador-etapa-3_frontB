import React, { useContext } from 'react';
import CarritoContext from '../contexts/CarritoContext';
import './ItemCarrito.scss'

const ItemCarrito = ({ producto }) => {
  const { eliminarProductoDelCarritoContext } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    console.log('Eliminando el producto...', id);
    eliminarProductoDelCarritoContext(id);
  };

  
  const imagenSrc = producto.foto2 ? producto.foto2 : 'https://res.cloudinary.com/dwpzgd7kr/image/upload/v1743809003/logofun1_cxokng.webp';

  return (
    <tr>
      <td>
        <img src={imagenSrc} alt={producto.nombre} width="50px" />
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td>{producto.cantidad * producto.precio}</td>
      <td>
        <button className="boton-eliminar" onClick={() => handleEliminar(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
