import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductList from './Productlist';
import './index.css';
import Cart from './Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: 'product-details/:meraProductId',
    element: <ProductDetails />,
  },

  {
    path: 'products/cart',
    element: <Cart />,
  },

  {
    path: '*',
    element: <div>Bhiya, there is no such page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
