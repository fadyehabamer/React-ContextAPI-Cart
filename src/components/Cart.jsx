import { useContext } from 'react'
import { CartCxt } from '../context/cart'
import { formatPrice } from '../utils/cart'

function Cart() {
    const { items, total, addItemCart, decrementItemCart, removeItemCart } = useContext(CartCxt)

    if (items.length === 0) {
        return (
            <div>
                <h1>Cart</h1>
                <p>Your cart is empty.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {formatPrice(item.price)} x {item.quantity}{' '}
                        <button type="button" aria-label={`Remove one ${item.name}`} onClick={() => decrementItemCart(item.id)}>-</button>
                        <button type="button" aria-label={`Add one ${item.name}`} onClick={() => addItemCart(item)}>+</button>
                        <button type="button" aria-label={`Remove all ${item.name} from cart`} onClick={() => removeItemCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p><strong>Total: {formatPrice(total)}</strong></p>
        </div>
    )
}

export default Cart
