import './Cart.css'
import { useContext } from "react"
import CartContext from '../../Context/Context'

 


const Cart = () => {
    const { cart, borrarCarrito,borrarProducto  } = useContext(CartContext)

    return (
        <div>
           <div className='cart'>
            <h1 className='cart_text'>CARRITO DE COMPRAS ! 🐈</h1>
            <button className='button_compra' onClick={borrarCarrito}>Vaciar carrito</button>
            </div>
            <ul className='cart_text'>
                {cart.map(prod => <li key={prod.id}> <img src={prod.img}/>
                    <p>{prod.name}</p> 
                    <p>${prod.price}</p>
                    <p>Cantidad elegida : {prod.quantity}</p> 
                    <button  onClick={() => borrarProducto(prod.id)}>borrar</button> </li>)}
            </ul>
            
        </div>
    )
}

export default Cart
