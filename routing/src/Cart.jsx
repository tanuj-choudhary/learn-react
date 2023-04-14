import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Cart() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartList(cartItems);
  }, []);

  return (
    <>
      <Navbar />
      <h1>CartList:</h1>
      <ul className="products-list">
        {cartList.length === 0 ? (
          <h1>Your Cart is empty ... </h1>
        ) : (
          cartList.map((item, index) => {
            return (
              <li className="cart-item">
                <div class="cart-item-id">{index}</div>
                <div class="cart-item-title">{item.title}</div>
                <div class="cart-item-qty">x{item.qty}</div>
                <div class="cart-item-price">${item.price * item.qty}</div>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default Cart;
