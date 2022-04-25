import { useState } from 'react'
import './App.css'

import Nav from './components/Nav'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CartProvider from './context/CartContext'

function App() {

  return (
    <CartProvider>
      <>
        <Router>
          <Nav />
          <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          {/* <Route exact path="/post/:id" component={PostDetails} />  */}
          </Routes>
        </Router>
      </>
    </CartProvider>
  )
}

export default App
