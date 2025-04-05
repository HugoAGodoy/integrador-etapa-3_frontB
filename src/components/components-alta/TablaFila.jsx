import { useContext, useState } from "react";
import Swal from "sweetalert2";
import ProductosContext from "../../contexts/ProductosContext";
import './TablaFila.scss';

const TablaFila = ({ producto }) => {
    const { eliminarProductoContext, setProductoAEditar } = useContext(ProductosContext);
    const [imagenAmpliada, setImagenAmpliada] = useState(null);

    const handleEliminar = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás recuperar este producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoContext(id);
                Swal.fire("Eliminado", "El producto fue eliminado", "success");
            }
        });
    };

    const handleEditar = (producto) => {
        setProductoAEditar(producto);
    };

    const handleVerImagen = (foto) => {
        setImagenAmpliada(foto);
    };

    const handleCerrarImagen = () => {
        setImagenAmpliada(null);
    };

    const imagenSrc1 = producto.foto1 || 'https://res.cloudinary.com/dwpzgd7kr/image/upload/v1743809003/logofun1_cxokng.webp';
    const imagenSrc2 = producto.foto2 || 'https://res.cloudinary.com/dwpzgd7kr/image/upload/v1743809003/logofun1_cxokng.webp';
    const imagenSrc3 = producto.foto3 || 'https://res.cloudinary.com/dwpzgd7kr/image/upload/v1743809003/logofun1_cxokng.webp';

    return (
        <>
            <tr>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td>{producto.marca}</td>
                <td>{producto.categoria}</td>
                <td>{producto.detalles}</td>
                
                {/* Columna Foto 1 */}
                <td>
                    <div className="foto-columna">
                        <img className="imagen-tabla" src={imagenSrc1} alt={producto.nombre} onClick={() => handleVerImagen(imagenSrc1)} />
                        <button className="boton-ver" onClick={() => handleVerImagen(imagenSrc1)}>Ver</button>
                    </div>
                </td>

                {/* Columna Foto 2 */}
                <td>
                    <div className="foto-columna">
                        <img className="imagen-tabla" src={imagenSrc2} alt={producto.nombre} onClick={() => handleVerImagen(imagenSrc2)} />
                        <button className="boton-ver" onClick={() => handleVerImagen(imagenSrc2)}>Ver</button>
                    </div>
                </td>

                {/* Columna Foto 3 */}
                <td>
                    <div className="foto-columna">
                        <img className="imagen-tabla" src={imagenSrc3} alt={producto.nombre} onClick={() => handleVerImagen(imagenSrc3)} />
                        <button className="boton-ver" onClick={() => handleVerImagen(imagenSrc3)}>Ver</button>
                    </div>
                </td>

                <td>{producto.envio ? "si" : "no"}</td>
                <td>
                    <button className="boton-columna" onClick={() => handleEditar(producto)}>Editar</button>
                    <button className="boton-columna" onClick={() => handleEliminar(producto.id)}>Borrar</button>
                </td>
            </tr>

            {imagenAmpliada && (
                <div className="modal-imagen" onClick={handleCerrarImagen}>
                    <div className="modal-content">
                        <span className="cerrar" onClick={handleCerrarImagen}>&times;</span>
                        <img className="imagen-ampliada" src={imagenAmpliada} alt="Ampliada" />
                    </div>
                </div>
            )}
        </>
    );
};

export default TablaFila;
