import { React } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail  = ({ products }) => {
 
  const onAdd = (quantity) => {
    console.log(quantity)
  }
  
  return (
        <div   key={products.id} >
                <img className='card_products' src={products.img} alt="producto"/>
                <h5>{products.name}</h5>
                <p >${products.price}</p>
                <p>{products.description}</p>
                 <ItemCount  initial={1} stock={products.stock}  onAdd={onAdd}/> 
                </div>
          )      
            
};

export default ItemDetail