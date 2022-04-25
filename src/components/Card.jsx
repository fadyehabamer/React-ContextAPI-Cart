import React , {useContext}from 'react'
import {CartCxt} from '../context/CartContext'

function Card({product}) {
    const {addItemCart} = useContext(CartCxt)
    // console.log()  ;
    return (
        <div className="card">
            <img src={product.image_src} alt="product"/>
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <p><button onClick={()=>{addItemCart(product.name , product.price)}}>Add to Cart</button></p>
        </div>
    )
}

export default Card