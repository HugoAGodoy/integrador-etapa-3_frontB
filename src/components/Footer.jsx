import './Footer.scss'

const Footer = () => {
    return (
      <footer className="footer-contenedor">
        <h2 className="footer-title">Hablemos de Guitarras</h2>
        <p>
          Cada gran proyecto comienza con una conversación. Ya sea que estés buscando tu primera guitarra, un modelo especial o construyendo algo único, estamos aquí para ayudarte.
        </p>
  
        <div className="footer-data">
          <p className="footer-datos">
            <strong>Email:</strong> 
            <a className="footer-datos" href="mailto:contacto@tuwebdeguitarras.com">
              contacto@tuwebdeguitarras.com
            </a>
          </p>
          <p className="footer-datos">
            <strong>Teléfono:</strong> 
            <a className="footer-datos" href="tel:+XX123456789">
              (+XX) 123 456 789
            </a>
          </p>
          <p className="footer-datos">
            <strong>Dirección:</strong> Calle de la Música 123, Barrio Armónicos, Ciudad, País
          </p>
        </div>
  
        <div style={{ marginTop: "20px" }}>
          <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
            🐦 Twitter
          </a>
          <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
            📘 Facebook
          </a>
          <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
            📸 Instagram
          </a>
          <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
            💼 LinkedIn
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  