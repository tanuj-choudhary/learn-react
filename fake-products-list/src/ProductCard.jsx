import React from 'react';
import { ProductCardBox } from './styles';

function ProductCard({ title, price, image }) {
  return (
    <ProductCardBox>
      <img height="100px" width="100px" src={image} alt="product" />
      <p>{title}</p>
      <p>${price}</p>
    </ProductCardBox>
  );
}

export default ProductCard;
