'use client'

const proyectos = [
  {
    nombre: 'Siaconca Cart',
    tecnologias: ['Next.js', 'Bootstrap', 'Zustand'],
    descripcion: 'Carrito de compras enlazado a su backend personalizado en JAVA.',
    preview: 'https://siaconca.vercel.app/'
  },
  {
    nombre: 'GPS Solutions',
    tecnologias: ['Next.js', 'TailwindCSS'],
    descripcion: 'Landing Page para empresa de Sistema de rastreo GPS para vehículos.',
    preview: 'https://www.gpsolutions.es/'
  },
  {
    nombre: 'Prologistics',
    tecnologias: ['Next.js', 'Bootstrap'],
    descripcion: 'App de formularios personalizados de empresa de Soluciones Migratorias',
    preview: 'https://prologistics.vercel.app/'
  },
  {
    nombre: 'autoWeb',
    tecnologias: ['Next.js', 'Bootstrap', 'Zustand'],
    descripcion: 'Solucion Enterprise de Contabilidad y Facturacion para Concesionario de Vehiculo en Venezuela.',
    preview: null
  }

]

export default function Proyectos () {
  return (
    <section id='proyectos'>
      <h4 className='text-light fw-bold'>
        <i className='bi bi-code-slash' />
        {' '}Proyectos
      </h4>
      <table className='table table-dark border border-light rounded table-borderless mt-2'>
        <tbody className='align-middle'>
          {proyectos.map((proy, i) => (
            <ProyectoRow key={i} proyecto={proy} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

function ProyectoRow ({ proyecto }) {
  return (
    <tr>
      <th>
        <span className='text-warning'>*</span>
      </th>
      <th>
        <span className='text-warning'>{' '}{proyecto.nombre}{' '}</span> <br />
        <span className='fw-normal small'>{proyecto.tecnologias.join(', ')}</span>
      </th>
      <td>
        {proyecto.descripcion}
      </td>
      <td>
        {proyecto.preview
          ? (
            <a href={proyecto.preview} target='_blank' className='btn btn-outline-warning' rel='noreferrer'>
              <i className='bi bi-eye' />
            </a>
            )
          : null}

      </td>
    </tr>
  )
}
