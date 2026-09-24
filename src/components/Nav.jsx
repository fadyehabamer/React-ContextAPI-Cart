import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartCxt } from '../context/CartContext'


function Nav() {
    const {itemCount} = useContext(CartCxt)
    return (

        <div className="topnav">
            <NavLink end to='/' >Home</NavLink>
            <NavLink to="/cart"> Cart ({itemCount}) </NavLink>
        </div>


    )
}

export default Nav
