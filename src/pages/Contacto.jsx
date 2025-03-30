import React, { useState } from 'react';
import './Contacto.scss';
import useTitulo from '../hooks/useTitulo';

const Contacto = () => {
    useTitulo('Contacto');

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        tel: '',
        ideas: '',
        influencias: ''
    });

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        tel: '',
        ideas: ''
    });

    const [mensajeExito, setMensajeExito] = useState('');

    const validarNombre = () => {
        if (formData.nombre.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                nombre: 'El nombre es obligatorio',
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                nombre: '',
            }));
            return true;
        }
    };

    const validarEmail = () => {
        if (formData.email.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'El correo es obligatorio',
            }));
            return false;
        } else if (!formData.email.includes('@')) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Debe ser un correo válido',
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }));
            return true;
        }
    };

    const validarTel = () => {
        if (formData.tel.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                tel: 'El teléfono es obligatorio',
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                tel: '',
            }));
            return true;
        }
    };

    const validarIdeas = () => {
        if (formData.ideas.trim() === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ideas: 'Este campo es obligatorio',
            }));
            return false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ideas: '',
            }));
            return true;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const telValido = validarTel();
        const ideasValido = validarIdeas();

        if (nombreValido && emailValido && telValido && ideasValido) {
            setMensajeExito('¡Formulario enviado con éxito!');
            setTimeout(() => setMensajeExito(''), 5000);
            handleReset();
        } else {
            setMensajeExito('');
        }
    };

    const handleReset = () => {
        setFormData({
            nombre: '',
            email: '',
            tel: '',
            ideas: '',
            influencias: ''
        });

        setErrors({
            nombre: '',
            email: '',
            tel: '',
            ideas: ''
        });
    };

    return (
        <form id="form-form" onSubmit={handleSubmit}>
            <h1 className="form-title">Funatic! Guitarras Icónicas y Personalizadas</h1>

            <label htmlFor="nombre">Nombre:</label>
            <input
                className="form-input"
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Tu nombre"
            />
            <small className="texto-rojo__nombre">{errors.nombre}</small>

            <label htmlFor="email">Correo electrónico:</label>
            <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Tu correo electrónico"
            />
            <small className="texto-rojo__email">{errors.email}</small>

            <label htmlFor="tel">Teléfono:</label>
            <input
                className="form-input"
                type="tel"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleInputChange}
                placeholder="Tu número telefónico"
            />
            <small className="texto-rojo__tel">{errors.tel}</small>

            <label htmlFor="influencias">Influencias musicales y modelos de guitarras favoritas</label>
            <textarea
                className="form-textarea"
                id="influencias"
                name="influencias"
                rows="4"
                value={formData.influencias}
                onChange={handleInputChange}
                placeholder="¿Qué músicos o bandas te inspiran? ¿Cuáles marcas o modelos de guitarras son los que te apasionan? Este campo no es obligatorio, pero nos encantaría conocerte para poder darte nuestra mejor atención."
            ></textarea>

            <label htmlFor="ideas">Cuéntanos tus ideas:</label>
            <textarea
                className="form-textarea"
                id="ideas"
                name="ideas"
                rows="4"
                value={formData.ideas}
                onChange={handleInputChange}
                placeholder="¿Tienes un modelo en mente o alguna idea para una guitarra personalizada? Deja aquí tu consulta, te contestaremos en breve."
            ></textarea>
            <small className="texto-rojo__ideas">{errors.ideas}</small>

            <div className="button-container">
                <button className="boton-enviar" type="submit">ENVIAR</button>
                <button className="boton-reset" type="button" onClick={handleReset}>
                    BORRAR
                </button>
            </div>

            {mensajeExito && <p className="mensaje-exito">{mensajeExito}</p>}
        </form>
    );
};

export default Contacto;
