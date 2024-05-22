
import React from 'react';
import ProductPage from './productDetails'; 
import data from '../db/data'; 

const ParentComponent = () => {
  return (
    <div>
      {data.map((product, index) => (
        <div key={index}>
          <ProductPage product={product} />
        </div>
      ))}
    </div>
  );
};

export default ParentComponent;
