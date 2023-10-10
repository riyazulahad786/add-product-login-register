import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null); // Store the image file

  const handleAddProduct = () => {
    // Create a new product object
    const newProduct = {
      name: productName,
      description: productDescription,
      image: productImage, // Now, it's the image file
    };

    // Call the parent component's callback function to add the product
    onAddProduct(newProduct);

    // Reset the form fields
    setProductName('');
    setProductDescription('');
    setProductImage(null);
  };

  const handleImageChange = (e) => {
    // Update the productImage state with the selected file
    setProductImage(e.target.files[0]);
  };

  return (
    <div className='container'>
      <h2>Add a Product</h2>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label>Product Description:</label>
        <textarea
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div>
        <label className='mx-3'>Product Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button className='mt-5' onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;
