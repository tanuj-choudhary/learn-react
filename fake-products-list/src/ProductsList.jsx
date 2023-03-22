import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { productsList } from './utils';
import { ProductsListContainer } from './styles';

function ProductsList() {
  const [products, setProducts] = useState(productsList);

  return (
    <ProductsListContainer>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </ProductsListContainer>
  );
}

export default ProductsList;
