import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `https://fakestoreapi.com/products`;
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div className="products-list">
        <h1>My Products</h1>
        <div>
          {products.map((item) => {
            return (
              <Link
                className="product-list-item"
                to={`/product-details/${item.id}`}
                key={item.id}
              >
                <p>
                  {item.id}. {item.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
