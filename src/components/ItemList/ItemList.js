import React from 'react'
import Item from "../Item/Item"
const ItemList = ({ products }) => {
    
    return(
        <div className='contenedor_productos'>
            {products.map(product => <div className='caja'>
            <Item key={product.id} producto={product} />
        </div>)}
         
        </div>

    )
}

export default ItemList