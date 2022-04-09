import { createContext, useState } from "react";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const agregarProducto = (product, quantity) => {
        
  //creo estado con valor 
       let cantidad = true ;
       
       //mapeo el array y vemos si el id = id para no duplicar , suma cantidad de products
        cart.filter((prod) => {
            if(prod.id===product.id) {
            prod.quantity =    quantity + prod.quantity;
                cantidad =  false;
                setCart([...cart])
            }
  
        })
        // pero si es como cantidad retorno obj
        if (cantidad  ===true) {
            const objItemCart = {
                ...product,
                quantity
            }
            setCart([...cart, objItemCart ])
        }


            
    }


    const borrarCarrito = () => {
        setCart([])
    }


    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }


    


    return (
        <Context.Provider value={{ 
            cart, 
            agregarProducto,
            borrarCarrito,
            getQuantity,
           
            
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
