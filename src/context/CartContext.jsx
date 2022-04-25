import React, { createContext, useState } from "react";

export const CartCxt = createContext();

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemCart = (name, price) => {
        setItems((prevState) => [...prevState, { name, price }])
    }

    const value = { items, addItemCart };
    return (
        <CartCxt.Provider value={value} >
            {props.children}
        </CartCxt.Provider>
    )
}

export default CartProvider;