import { useState } from "react";
import { CartCxt } from "./cart";
import { addItem, decrementItem, removeItem, countItems, totalCents } from "../utils/cart";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemCart = (product) => {
        setItems((prevState) => addItem(prevState, product))
    }

    const decrementItemCart = (id) => {
        setItems((prevState) => decrementItem(prevState, id))
    }

    const removeItemCart = (id) => {
        setItems((prevState) => removeItem(prevState, id))
    }

    const value = {
        items,
        itemCount: countItems(items),
        total: totalCents(items) / 100,
        addItemCart,
        decrementItemCart,
        removeItemCart,
    };
    return (
        <CartCxt.Provider value={value} >
            {props.children}
        </CartCxt.Provider>
    )
}

export default CartProvider;
