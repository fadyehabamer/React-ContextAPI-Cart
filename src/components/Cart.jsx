import React, { useContext } from 'react'
import { CartCxt } from '../context/CartContext'

function Cart() {
    const { items } = useContext(CartCxt)

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart