import { useContext, useEffect, useState } from "react";
import ProductosContext from "../../contexts/ProductosContext";
import './Formulario.scss';

const Formulario = () => {
    const { 
        crearProductoContext, 
        productoAEditar, 
        setProductoAEditar, 
        actualizarProductoContext 
    } = useContext(ProductosContext);

    const formInicial = {
        id: null,
        nombre: '',
        precio: '',
        stock: '',
        marca:'',
        categoria: '',
        detalles: '',
        foto1: '',
        foto2: '',
        foto3: '',
        envio: false
    };

    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial);
    }, [productoAEditar]);

    const [form, setForm] = useState(formInicial);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.id === null) {
            crearProductoContext(form); 
            handleReset();
        } else {
            actualizarProductoContext(form);
        }
    }

    const handleChange = (e) => {
        const { type, name, checked, value } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    const handleReset = () => {
        setForm(formInicial);
        setProductoAEditar(null);
    }

    return (
        <>
            <div className="formulario-container">
                <form className="formulario" onSubmit={handleSubmit}>
                    <h1 className="titulo-ppal-form">Formulario de Alta de Productos</h1>
                    <h2 className="titulo-form">Agregar: Editar</h2>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-nombre">Nombre</label>
                        <input className="imput-form" type="text" id="lbl-nombre" name="nombre" value={form.nombre} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-precio">Precio</label>
                        <input className="imput-form" type="text" id="lbl-precio" name="precio" value={form.precio} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-stock">Stock</label>
                        <input className="imput-form" type="text" id="lbl-stock" name="stock" value={form.stock} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-marca">Marca</label>
                        <input className="imput-form" type="text" id="lbl-marca" name="marca" value={form.marca} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-categoria">Categoría</label>
                        <input className="imput-form" type="text" id="lbl-categoria" name="categoria" value={form.categoria} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="label-form" htmlFor="lbl-detalle">Detalles</label>
                        <input className="imput-form" type="text" id="lbl-detalle" name="detalles" value={form.detalles} onChange={handleChange} />
                    </div>

                    {/* Campos de foto */}
                    {['foto1', 'foto2', 'foto3'].map((foto, index) => (
                        <div className="form-group" key={index}>
                            <label className="label-form" htmlFor={`lbl-${foto}`}>Foto {index + 1}</label>
                            <input className="imput-form" type="text" id={`lbl-${foto}`} name={foto} value={form[foto]} onChange={handleChange} />
                        </div>
                    ))}

                    <div className="form-group-check">
                        <label className="label-check" htmlFor="lbl-envio">Envío</label>
                        <input className="imput-check" type="checkbox" id="lbl-envio" name="envio" checked={form.envio} onChange={handleChange} />
                    </div>
                    <div className="botones-form">
                        <button className="boton-submit" type="submit">GUARDAR</button>
                        <button className="boton-clear" type="reset" onClick={handleReset}>LIMPIAR</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Formulario;
