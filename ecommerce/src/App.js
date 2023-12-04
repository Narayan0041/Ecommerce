import { useState } from 'react';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import Verification from './component/Verification';
import ProductList from './component/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/productList' element={<ProductList />} />
          <Route path='/productList/:id' element={<ProductDetail/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;
