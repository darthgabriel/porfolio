import BioInfo from './components/BioInfo'
import Contactos from './components/Contactos'
import Experiencias from './components/Experiencias'
import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'

export default function Home () {
  return (
    <div className='container-fluid'>
      <div className='text-end'>
        <p className='badge text-bg-light'>Disponible para Realizar Proyectos</p>
      </div>
      <BioInfo />
      <Experiencias />
      <Proyectos />
      <SobreMi />
      <Contactos />
    </div>
  )
}
