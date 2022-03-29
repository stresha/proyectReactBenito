import { React } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail  = ({ producto }) => {
  const { id, name, price, img , description} = producto;

  return (
        <div   key={id} >
                <img className='card_products' src={img} alt="producto"/>
                <h5>{name}</h5>
                <p >${price}</p>
                <p>{description}</p>
                 <ItemCount  initial={1} stock={product.stock}  onAdd={onAdd}/> 
                </div>
          )      
            
};

export default ItemDetail