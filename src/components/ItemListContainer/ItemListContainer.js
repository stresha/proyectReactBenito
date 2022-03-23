import React from 'react'
import { useState} from 'react'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [products] = useState([])
    
    return(
        <ItemList products={products}/>

    )
}

export default ItemListContainer