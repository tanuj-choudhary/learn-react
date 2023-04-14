import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const ProductDetails = () => {
  const { meraProductId } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    (async () => {
      const url = `https://fakestoreapi.com/products/${meraProductId}`;
      const res = await fetch(url);
      const data = await res.json();
      setProductDetails(data);
    })();
  }, [meraProductId]);

  const handleAddToCart = () => {
    const cartlist = JSON.parse(localStorage.getItem('cart')) || [];

    let foundIndex = cartlist.findIndex((item) => item.id == meraProductId);

    if (foundIndex !== -1) {
      cartlist[foundIndex].qty++;
    } else {
      cartlist.push({ ...productDetails, qty: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartlist));
    alert('Added to cart');
  };

  return (
    <>
      <Navbar />
      <p>Product Details : {meraProductId}</p>

      <div className="product-card-box">
        <img
          height="100px"
          width="100px"
          src={productDetails.image}
          alt={productDetails.title}
        />
        <p>{productDetails.title}</p>
        <p>${productDetails.price}</p>
      </div>
      <button onClick={handleAddToCart} className="add-cart-btn">
        Add to cart
      </button>
    </>
  );
};

export default ProductDetails;
