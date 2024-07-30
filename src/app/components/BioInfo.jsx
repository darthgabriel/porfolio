export default function BioInfo () {
  return (
    <div className='d-flex flex-column'>
      <div className='text-center'>
        <img src='https://avatars.githubusercontent.com/u/54900085?v=4' className='img-fluid rounded' alt='...' width={200} />
        <h1 className='display-5 fw-bolder text-light'>Hola, soy Jose Paredes</h1>
      </div>

      <div className='px-5 w-50 fs-sm-5 fs-4 align-self-end bg-light bg-opacity-25 border border-light rounded overflow-auto'>
        +10 años de experiencia en el desarrollo de software,
        <span className='text-warning fw-bold'>{' '}Ing. de Computación{' '}</span>
        de Venezuela, 🇻🇪.
        Especializado en Desarrollo Web y Movil (Android).
      </div>
    </div>
  )
}
