import { useState } from 'react';

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      brand: 'Apple',
    },
    {
      id: 2,
      title: 'iPhone 13 Pro Max',
      brand: 'Apple',
    },
    {
      id: 3,
      title: 'iPhone 12 Pro Max',
      brand: 'Apple',
    },
  ]);

  return (
    <div className="App">
      <h1>Products List:</h1>
      {products.map((item) => {
        return (
          <li key={item.id}>
            {item.brand} | {item.title}
          </li>
        );
      })}
    </div>
  );
}

export default Products;
