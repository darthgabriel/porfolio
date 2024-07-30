import React from 'react'

export default function Contactos () {
  return (
    <footer class='text-center text-lg-start bg-dark text-light border border-light mt-5' id='contacto'>
      <section class='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div class='me-5 d-none d-lg-block'>
          <span>Contáctame</span>
        </div>

        <div>
          <a href='https://wa.me/+584145393140' class='me-4 text-reset'>
            <i class='bi bi-whatsapp' />
          </a>
          <a href='https://github.com/darthgabriel' class='me-4 text-reset'>
            <i class='bi bi-github' />
          </a>
          <a href='https://www.instagram.com/jparedesdev/' class='me-4 text-reset'>
            <i class='bi bi-instagram' />
          </a>
          <a href='https://www.facebook.com/ZadKiel.Randgris' class='me-4 text-reset'>
            <i class='bi bi-facebook' />
          </a>
        </div>
      </section>

      <div class='text-center p-4'>
        © 2024 Copyright | Ing. Jose Paredes
      </div>
    </footer>
  )
}
