import './Inicio.scss'
import Card from "../components/Card"


const Inicio = () => {
  return (
    
    <main>
      <section className="section-cards" id="botoncitos">
        <header className="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p className="section-cards__subt">Se encontraron X productos</p>
        </header>
      </section>

      <section className="cards-container" id="container-productos">
        <Card />
      </section>
    
    </main> 

  )
}

export default Inicio