import Formulario from "../components/components-alta/Formulario"
import Tabla from "../components/components-alta/Tabla"
import useTitulo from "../hooks/useTitulo"

const Alta = () => {

    useTitulo('Alta')

  return (
  
   <>
   <h1>Formulario de alta de productos</h1>
   <hr />
   <Formulario />
   <Tabla />

   </>
  )
}

export default Alta