import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    
   const Tester = () => {
       console.log("esto es una prueba para ver si funciona el boton")
   } 
    return (
        <nav>
            <CartWidget />
            <Button func={Tester} color='blue'/>
            <Button func={Tester} color='blue'/>
            <Button func={Tester}color='blue' />
            <Button func={Tester}color='blue' />
            
        </nav>
    )
}

export default NavBar