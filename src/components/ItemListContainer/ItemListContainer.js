import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList/ItemList"
import { getProducts , getProductsByCategory} from "../products/products"
import { useState, useEffect } from 'react'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([]) // productos a filtrar
    const [loading, setLoading] = useState(true) //carga , se pone en finally, ya que lo hace al final y cambiamos estado, asi como un switch de tu boton js 

    const { categoryId } = useParams()


    // aca filtramos por cat, 
    useEffect(() => {
        if(categoryId) {
            setLoading(true)

            getProductsByCategory(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)

            getProducts().then(item => {
                setProducts(item)
            }).catch(err  => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }  

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    if(loading) {
        return <h1 className="text_busqueda">🐈‍ Nuestros gatitos estan buscando los productos.....🐈‍ </h1>
    }
    //muestra todo los product
    return (
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer
