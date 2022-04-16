import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
import Context  from '../../Context/Context'
import { useContext } from 'react'

const NavBar = () => {
    
 const {cart} = useContext(Context)


    return (
        <nav>
         
           <div className="filtros">
           <Link to='/' className='link_tienda'>
            <h1>Tienda</h1>
            </Link>

            {cart == 0 ? <></>: <NavLink to='/Cart'><CartWidget/></NavLink>}  


          <NavLink to='/' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink>
          <NavLink to='/category/lamparas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>LAMPARAS</NavLink>
          <NavLink to='/category/veladores' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>VELADORES</NavLink>
          <NavLink to='/category/guirnaldas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>GUIRNALDAS</NavLink>
          <NavLink to='/category/cortinas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CORTINAS</NavLink>
          <NavLink to= '/cart' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>CARRITO</NavLink>
         
        </div>
        
            
        </nav>
    )
}

export default NavBar