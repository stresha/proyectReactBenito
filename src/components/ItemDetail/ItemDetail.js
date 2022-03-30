import { React } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail  = ({ name, id, price, description, stock, img }) => {
  
  const onAdd = (quantity) => {
    console.log(quantity)
  }
  
  return (
    <div className='caja'  key={id}  >
    <img className='card_products' src={img} alt="producto"/>
    <h5>{name}</h5>
    <p >${price}</p>
    <p>{description}</p>
    <ItemCount  initial={1} stock={stock}  onAdd={onAdd}/> 
    <p className='stock'>Stock disponible: {stock}</p>
    </div>
)      

};


export default ItemDetail