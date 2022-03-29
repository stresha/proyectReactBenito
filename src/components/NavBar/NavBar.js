import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import { useState, useEffect } from 'react'
import { getProducts } from "../products/products"

const NavBar = () => {
    const [search, setSearch] = useState("")

   const Tester = () => {
       console.log("esto es una prueba para ver si funciona el boton")
   } 
    return (
        <nav>
            {/* <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={getProducts}>Buscar</button> */}
            <Button func={Tester} color='blue'/>
            <Button func={Tester} color='blue'/>
            <Button func={Tester}color='blue' />
            <Button func={Tester}color='blue' />
            <CartWidget />
            
        </nav>
    )
}

export default NavBar