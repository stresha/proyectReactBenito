import './Cart.css'
import { useContext } from "react"
import CartContext from '../../Context/Context'

import { Link } from 'react-router-dom'

 


const Cart = () => {
    const { cart, borrarCarrito,borrarProducto, precioFinal, borrarTodos, finalizarCompra } = useContext(CartContext)


    return (
        <div>
           <div className='cart'>
            <h1 className='cart'>CARRITO DE COMPRAS ! 🐈</h1>
            <button className='button_compra' onClick={borrarCarrito}>Vaciar carrito</button>
            <button className='button_compra_final' onClick={finalizarCompra}>COMPRAR !! 🐈</button>
            </div>
            <p className='cart_compra'>Total Compra: $ {precioFinal()}</p>
            {cart.length === 0 ? <Link to='/' className='cart_option'> Tu carrito esta vacio..... IR A LA TIENDA </Link> : null}
            <ul className='cart_text'>
                {cart.map(prod => <li key={prod.id}> <img className='cart_img' src={prod.img}/> 
                    <p>{prod.name}</p> 
                    <p> precio unidad $ {prod.price}</p>
                    <p>Cantidad elegida : {prod.quantity}</p> 
                    <p> Total: $ {prod.quantity*prod.price}</p>
                    <button  className='button_compra'  onClick={() => borrarTodos(prod.id)}>eliminar todos</button>
                    <button  className='button_compra'  onClick={() => borrarProducto(prod.id)}>eliminar</button>
                    </li>)}
                   
                    
            </ul>
                   
    
        
        </div>
    )
}

export default Cart
