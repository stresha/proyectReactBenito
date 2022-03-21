import React from 'react'
import { getProducts } from "../products/products"
import { useState, useEffect } from 'react'
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    console.log(products)
    return(
        <div className='contenedor_productos'>
            {products.map(product => <div className='caja'  key={product.id} >
                <img className='card_products' src={product.img} alt="producto"/>
                <h5  >{product.name}</h5>
                <p  >${product.price}</p>
                <ItemCount  initial={1} stock={product.stock} />
            
            </div>)}
         
        </div>

    )
}

export default ItemListContainer