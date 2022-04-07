import { useContext } from "react"
import CartContext from '../../context/CartContext'

const Cart = () => {

    const { cart, vaciarCart } = useContext(CartContext)

    return (
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            <ul>
                {cart.map(prod => <li key={prod.id}>{prod.name}{prod.price}{prod.quantity}</li>)}
            </ul>
            <button onClick={vaciarCart}>Borrar productos en el carrito</button>
        </div>
    )
}

export default Cart
