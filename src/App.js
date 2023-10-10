import React, { useState } from 'react';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
function App() {
  // const [products, setProducts] = useState([]);

  // const addProduct = (product) => {
  //   setProducts([...products, product]);
  // };

  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>

      </Routes>
    </Router>
      {/* <h1 className='d-flex justify-content-center'> add Product </h1>
      <AddProduct onAddProduct={addProduct} />
      <ProductList products={products} /> */}
     
    </div>
  );
}

export default App;
