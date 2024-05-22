import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productDetails.css';
import data from '../db/data'; 
const ProductDetail = () => {
  const { productId } = useParams(); 
 
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    console.log('Product ID:', productId);
    const id = Number(productId);
    console.log('Converted ID:', id);
    const selectedProduct = data.find(p => p.id === id);
    console.log('Selected Product:', selectedProduct);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.img);
    }
  }, [productId]);

  const handleAddToCart = () => {
    console.log(`${amount} ${product.title} added to cart`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product-page-container'>
      <div className='image-container'>
        <img src={mainImage} alt={product.title} className='product-image'/>
      </div>
      <div className='product-details'>
        <div>
          <span className='product-type'>{product.category}</span>
          <h1 className='product-title'>{product.title}</h1>
        </div>
        <p className='product-description'>
          {product.description}
        </p>
        <h6 className='product-price'>{product.newPrice}</h6>
        <div className='quantity-container'>
          <div className='quantity-control'>
            <button 
              className='quantity-button' 
              onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className='quantity'>{amount}</span>
            <button 
              className='quantity-button' 
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

