import './Cart.css'
import { useContext } from "react"
import CartContext from '../../Context/Context'

 


const Cart = () => {
    const { cart, borrarCarrito,  } = useContext(CartContext)

    return (
        <div>
            <h1 className='cart'>CARRITO DE COMPRAS !</h1>
            <ul className='cart'>
                {cart.map(prod => <li key={prod.id}> <img src={prod.img}/>
                    <p>{prod.name}</p> 
                    <p>${prod.price}</p>
                    <p>Cantidad elegida : {prod.quantity}</p> 
                    <button>borrar</button> </li>)}
            </ul>
            <button onClick={borrarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
