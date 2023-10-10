import React,{useState} from 'react'
import AddProduct from './AddProduct';
import ProductList from './ProductList';
function Home() {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
      setProducts([...products, product]);
    };
  return (
    <div>
<h1 className='d-flex justify-content-center'> add Product </h1>
      <AddProduct onAddProduct={addProduct} />
      <ProductList products={products} />
    </div>
  )
}

export default Home