export default function NavBar () {
  return (
    <nav className='navbar navbar-expand-sm bg-body-tertiary bg-opacity-25 sticky-top rounded border border-white'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <i className='bi bi-code-slash' />
        </a>
        <div className='d-none d-sm-flex'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#experiencia'>
                Experiencia
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#proyectos'>
                Proyectos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#sobremi'>
                Sobre mi
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contacto'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
