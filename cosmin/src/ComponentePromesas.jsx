// nuevo
import {useEffect, useState} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
// chau nuevo

// OLD Q FUNCIONA
// const tareas = new Promise((res,rej) => {})

// const ComponentePromesas = () => {

//     tarea
//     .then ( (respuesta) => {
//         console.log("respuesta", respuesta);
//     })
// }
// CHAU OLD Q FUNCIONA


// otro nuevo
const personas = [
    {id: 1, name: 'jime', age: 21},
    {id: 2, name: 'marti', age: 20},
    {id: 3, name: 'cami', age: 20},
    {id: 4, name: 'luli', age: 18}
  ]
  
//   const getFetch = new Promise((resolve, reject) => {
//     let condicion = '200'
//     if (condicion === '200') {
//       setTimeout(() => {
//         resolve(personas)
//       }, 3000)
//     } else {
//       reject('404')
//     }
//   })

  const getFetch = new Promise((resolve) => {
      setTimeout(() => {
        resolve(personas)
      }, 3000)
  })
  
  const ComponentePromesas = () => {
    getFetch
    .then(res => console.log(res));
  }, []
  
//   const ComponentePromesas = () => {
//     const [persona, setPersona] = useState([])
//     const [loading, setLoading] = useState([true])
//   }, []

    // nuevo again
    useEffect(() => {
        getFetch
        .then(res => setPersona(res))
        .finally(setLoading(false))
    })
    // chau nuevo

    return (
      <>
        { loading ?
            <h2>Cargando...</h2>
            :
            personas.map(persona=> <div key={persona.id} className='card w-50 mt-5'>
                <div className='card-header'>
                {persona.name}
                </div>
                <div className='card-body'>
                <img src={persona.foto} />
                {persona.age}
                </div>
                <div className='card-footer'>
                <button className='btn btn-outline-primary btn-block'>
                    Detalle de persona
                </button>
                </div>
                </div>
        ) }
      </>
    )
  
  // chau otro nuevo

  export default ComponentePromesas