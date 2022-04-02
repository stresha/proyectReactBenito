import { React } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail  = ({ name, id, price, description, stock, img }) => {
  
  const onAdd = () => {
    alert(`Agregado al carrito ${name}  ! excelente eleccion!`);
  }
  
  return (
    <div className='caja_contenido' >
    <div className='caja_detalle'  key={id}  >
    <img className='card_products' src={img} alt="producto"/>
    <h5>{name}</h5>
    <p >${price}</p>
    <p>{description}</p>
    <ItemCount  initial={1} stock={stock}  onAdd={onAdd}/> 
    <p className='stock'>Stock disponible: {stock}</p>
    </div>
    </div>
)      

};


export default ItemDetail