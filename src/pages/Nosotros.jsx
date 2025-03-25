import './Nosotros.scss'

const Nosotros = () => {
  return (
    <div className="container" id="nosotros">
      <h1 className="title-nos">Nosotros</h1>
      <img 
        className="nos-img" 
        src="/public/imagenes/funaticNosotros.webp" 
        alt="Guitarra con el logo de Funatic! Guitars" 
      />
      <p>
        Bienvenidos a <strong>Funatics! Guitars</strong>, un espacio creado para los apasionados de la guitarra eléctrica. Sabemos que este instrumento no es solo madera y cuerdas: es historia, identidad y expresión. Desde los riffs más legendarios hasta los sonidos más personales, cada guitarra cuenta una historia única.
      </p>
      <p>
        Nuestra misión es brindarte la posibilidad de llevar a casa una de las guitarras más emblemáticas de la historia o hacerla completamente tuya. Puedes elegir un modelo icónico tal cual es, personalizarlo a tu gusto o incluso construir una guitarra desde cero con las especificaciones que siempre soñaste.
      </p>
      <p>
        Las grandes influencias nos inspiran, pero encontrar nuestro propio sonido es igual de importante. Por eso, además de ofrecerte modelos icónicos, te damos la libertad de modificarlos o diseñar tu propia guitarra para que realmente se adapte a ti.
      </p>
      <p>
        Si ya tienes una guitarra y quieres darle una nueva vida, también ofrecemos modificaciones y mejoras para que evolucione contigo. Porque al final del día, la mejor guitarra es la que sientes como una extensión de tu creatividad.
      </p>
      <p>Explora, elige y crea. ¡Que la música nunca deje de sonar! 🎸</p>
      
      <div className="return">
        <a href="../../index.html">Volver a Inicio</a>
      </div>
    </div>
  );
};

export default Nosotros;
