import './Inicio.scss'
import Card from "../components/Card"
import { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import useTitulo from '../hooks/useTitulo'


const Inicio = () => {

  const {productos} = useContext(ProductosContext)

  useTitulo('Inicio')

  return (
    
    <main>
      <section className="section-cards" id="botoncitos">
        <header className="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="section-cards__subt">Se encontraron X productos</p>
        </header>
      </section>

      <section className="cards-container" id="container-productos">

        {
          productos && productos.map((producto) => (
        
          <Card producto={producto} key={producto.id} />

          )) 
        }
        
      </section>
    
    </main> 

  )
}

export default Inicio