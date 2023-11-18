import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido a la Tiiiiiienda online</h1>
        <Link to={'/products'} className='b-home'>Entrar a la Tienda</Link>
    </div>
  )
}

export default Home