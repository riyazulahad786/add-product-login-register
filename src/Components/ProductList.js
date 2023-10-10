import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className='mt-5'>
      <h2 className='d-flex justify-content-center'>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img
              src={product.image ? URL.createObjectURL(product.image) : ''}
              alt={product.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
