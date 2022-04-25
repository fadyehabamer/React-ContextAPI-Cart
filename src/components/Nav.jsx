import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartCxt } from '../context/CartContext'


function Nav() {
    const {items} = useContext(CartCxt)
    console.log(items)
    return (

        <div className="topnav">
            <NavLink exact to='/' >Home</NavLink>
            <NavLink to="/cart"> Cart ({items.length}) </NavLink>
        </div>


    )
}

export default Nav