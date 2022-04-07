import { React } from "react";
import { useState } from 'react' 
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'


//
const ItemDetail  = ({ name, id, price, description, stock, img }) => {
  const [quantity, setQuantity] = useState(0)

    const compraOnAdd = (count) => {
      alert(`Agregado al carrito ${name}  ! excelente eleccion!`);
        setQuantity(count)
        
    }
        
  
  return (
    <div className='caja_contenido' >
    <div className='caja_detalle'  key={id}  >
    <img className='card_products' src={img} alt="producto"/>
    <h5>{name}</h5>
    <p >${price}</p>
    <p>{description}</p>
    <p className='stock'>Stock disponible: {stock}</p>
    {quantity === 0 ? <ItemCount stock={stock} onAdd={compraOnAdd}/> : <button className="button_carrito ">IR AL CARRITO</button>}
    </div>
    </div>
)      

};


export default ItemDetail