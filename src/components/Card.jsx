import { useContext } from 'react'
import {CartCxt} from '../context/cart'
import { formatPrice } from '../utils/cart'

function Card({product}) {
    const {addItemCart} = useContext(CartCxt)
    return (
        <div className="card">
            <img src={product.image_src} alt={product.name}/>
            <h1>{product.name}</h1>
            <p className="price">{formatPrice(product.price)}</p>
            <p>{product.description}</p>
            <p><button type="button" onClick={()=>{addItemCart(product)}}>Add to Cart</button></p>
        </div>
    )
}

export default Card
