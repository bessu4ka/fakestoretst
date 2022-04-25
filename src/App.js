import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import CartContainer from './components/cart/CartContainer';
import ProductDetails from './components/productDetails/ProductDetails';
import NoMatch from './components/common/NoMatch/NoMatch';
import StoreContainer from './components/homePage/StoreContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<StoreContainer />} />
        <Route path='cart' element={<CartContainer />} />
        <Route path='details/:productId' element={<ProductDetails />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;