import React, { useState } from 'react';
import ProductCard from './components/ProductCard.Layout';
import { productsList } from '../../utils';
import { ProductsListContainer } from './products.styles';

function Products() {
  const [products, setProducts] = useState(productsList);

  return (
    <ProductsListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductsListContainer>
  );
}

export default Products;
