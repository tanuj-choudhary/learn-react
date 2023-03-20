import React, { useState } from 'react';

function Orders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: 'iphone 13',
      price: 50000,
    },
    {
      id: 2,
      name: 'iphone 12',
      price: 40000,
    },
    {
      id: 3,
      name: 'iphone 11',
      price: 30000,
    },
  ]);

  return (
    <>
      <h1>My Orders:</h1>
      <ul id="orders-list">
        {orders.map((item) => {
          return (
            <li key={item.id}>
              {item.name} : ₹{item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Orders;
