import { React } from "react";


const Item = ({ producto }) => {
  const { id, name, price, img } = producto;

  return (
        <div   key={id} >
                <img className='card_products' src={img} alt="producto"/>
                <h5>{name}</h5>
                <p >${price}</p>
                <button  className='card_products' >Ver detalles del producto</button>
                </div>
          )      
            
};

export default Item