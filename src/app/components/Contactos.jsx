import React from 'react'

export default function Contactos () {
  return (
    <footer className='text-center text-lg-start bg-dark text-light border border-light mt-5' id='contacto'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Contáctame</span>
        </div>

        <div>
          <a href='https://wa.me/+584145393140' className='me-4 text-reset'>
            <i className='bi bi-whatsapp' />
          </a>
          <a href='https://github.com/darthgabriel' className='me-4 text-reset'>
            <i className='bi bi-github' />
          </a>
          <a href='https://www.instagram.com/jparedesdev/' className='me-4 text-reset'>
            <i className='bi bi-instagram' />
          </a>
          <a href='https://www.facebook.com/ZadKiel.Randgris' className='me-4 text-reset'>
            <i className='bi bi-facebook' />
          </a>
        </div>
      </section>

      <div className='text-center p-4'>
        © 2024 Copyright | Ing. Jose Paredes
      </div>
    </footer>
  )
}
