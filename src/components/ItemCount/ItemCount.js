import { useState } from 'react'

const ItemCount = ({ initial = 0, stock, onAdd}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
        else {
            alert("Sin Stock Disponible")
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className='card_boton' >
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button  onClick={() => onAdd(count)}><img src="https://i.postimg.cc/kGqHWcR4/cart.png" alt="carro pixel"/></button>
            
        </div>
    )
}



export default ItemCount

