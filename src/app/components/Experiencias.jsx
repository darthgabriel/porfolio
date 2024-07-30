const experiencias = [
  {
    empresa: 'Kyoto Motors, S.A.',
    puesto: 'Jefe de IT y Marketing Digital',
    tiempo: 'Actualmente...',
    descripcion: 'Responsable de la infraestructura tecnológica, Desarrollo de su App AutoWeb y de la estrategia de marketing digital de la empresa.'
  },
  {
    empresa: 'Inversiones Punto Visual',
    puesto: 'Desarrollador Web y Auditor',
    tiempo: '2014-2016',
    descripcion: 'Desarrollo de sitios web y auditoría de Cobranza.'
  },
  {
    empresa: 'Moravi',
    puesto: 'Analista de Soporte y Programador',
    tiempo: '2011-2013',
    descripcion: 'Soporte técnico y programación de su app de Inventario en PHP.'
  }

]

export default function Experiencias () {
  return (
    <section id='experiencia'>
      <h4 className='text-light fw-bold'>
        <i className='bi bi-briefcase' />
        {' '}Experiencia Laboral
      </h4>
      <table className='table table-dark border border-light rounded table-borderless mt-2'>
        <tbody className='align-middle'>
          {experiencias.map((exp, i) => (
            <tr key={i}>
              <th>
                <span className='text-warning'>*</span>
              </th>
              <th>
                <span className='text-warning'>{' '}{exp.empresa}{' '}</span> <br />
                <span className='fw-normal small'>{exp.tiempo}</span>
              </th>
              <td>
                <span className='text-warning'>{' '}{exp.puesto}{' '}</span> <br />
                {exp.descripcion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
