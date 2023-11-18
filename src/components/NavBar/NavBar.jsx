import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link to={'/'} className='nav-link'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={'/products'} className='nav-link'>Tienda</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'/products'} className='dropdown-item'>Todos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={'/products/celulares'} className='dropdown-item'>Celulares</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/products/indumentaria"} className='dropdown-item'>Remeras</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/products/cocina"} className='dropdown-item'>Electrodomesticos</Link></li>
          </ul>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    )
}

export default NavBar