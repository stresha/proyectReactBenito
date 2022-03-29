import React from 'react'
import { getProducts } from "../products/products"
import { useState, useEffect } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
const ItemList = () => {
    const [products, setProducts] = useState([])
    const onAdd = (quantity) => {
        console.log(quantity)
      }
      
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    console.log(products)
    return(
        <div className='contenedor_productos'>
            {products.map(product => <div className='caja'>
            <Item key={product.id} producto={product} />
        </div>)}
         
        </div>

    )
}

export default ItemList