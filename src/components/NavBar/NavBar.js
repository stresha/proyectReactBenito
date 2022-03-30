import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    
    return (
        <nav>
           <div className="Categories">
          <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
          <NavLink to='/category/lamparas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>LAMPARAS</NavLink>
          <NavLink to='/category/veladores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>VELADORES</NavLink>
          <NavLink to='/category/guirnaldas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>GUIRNALDAS</NavLink>
          <NavLink to='/category/cortinas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CORTINAS</NavLink>
        </div>
        <CartWidget />
            
        </nav>
    )
}

export default NavBar