// import Titulo from './Titulo'
import logo from './logo.svg';
import './App.css';


export const Item = () => {
  return (
    <>
      <li><a href='#'>Soy item</a></li>
    </>
  )
} 


export function Input({placeholder}) {
  return (
    <div>
      <h2>Hola soy un input</h2>
      <input type = 'text' placeholder={placeholder} />
    </div>
  )
}

function Titulo ({titulo, subtitulo}){
  console.log(titulo)
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{titulo}</h2>
    </>
  )
}

export default function App() {
  let titulo= 'Hola soy titulo'

  return (
    <>
      <h1>Bienvenido/a a nuestro sitio web</h1>
      <Titulo titulo={titulo} subtitulo= 'soy subtitulo' />
      <hr></hr>
      <Input placeholder='Ingrese su nombre' />
      <input />
      <Item />
    </>
  );
}

// navbar
// const NavBar = () => {
//   return (
//   <>
//     <h3>Hola</h3>
//     <CartWidget />
//   </>)
// }

// </NavBar>

// const ItemListContainer = (props) = {]

// export default App;
