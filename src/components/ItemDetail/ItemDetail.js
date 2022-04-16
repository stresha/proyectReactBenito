import { React } from "react";
import { useState, useContext } from 'react' 
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import swal from "sweetalert"; // agrego libreria de sweet alert para personalizar alert
import { Link } from 'react-router-dom'
import CartContext from '../../Context/Context'
import { useNotification } from '../../Mensaje/Mensaje'

//
const ItemDetail  = ({ name, id, price, description, stock, img }) => {
  const [quantity, setQuantity] = useState(0)


  const { agregarProducto } = useContext(CartContext)
  const { setNotification } = useNotification()


    const compraOnAdd = (count) => {
     
        setQuantity(count)
        agregarProducto({ id, name, price, img}, count)
        setNotification('success', `Agregado al carrito ${name}! \n cantidad de productos: ${count} ! \n excelente eleccion!`)
    }
        
  
  return (
    <div className='caja_contenido' >
    <div className='caja_detalle'  key={id}  >
    <img className='card_products' src={img} alt="producto"/>
    <h5>{name}</h5>
    <p >${price}</p>
    <p>{description}</p>
    <p className='stock'>Stock disponible: {stock}</p>
    {quantity === 0 ? <ItemCount stock={stock} onAdd={compraOnAdd}/> : <Link to='/cart' className='Option'>Ir al carrito</Link>}
    </div>
    </div>
)      

};


export default ItemDetail