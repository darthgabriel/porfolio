import BioInfo from './components/BioInfo'
import Contactos from './components/Contactos'
import Experiencias from './components/Experiencias'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'

export default function Home () {
  return (
    <div className='container-fluid'>
      <div className='text-end sticky-top'>
        <p className='badge text-bg-light'>
          <i className='bi bi-star-fill' /> {' '}
          Disponible para Realizar Proyectos
        </p>
      </div>
      <BioInfo />
      <Experiencias />
      <Proyectos />
      <SobreMi />
      <Contactos />
    </div>
  )
}
