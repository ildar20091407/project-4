import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductsPage1 from "./components/ProductsBeerPages/ProductsPage1";
import { data } from '../src/store/users/usersSlice1';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Добавление товара в корзину с учётом количества
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingIndex >= 0) {
        // Если товар есть, увеличиваем количество
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // Добавляем новый товар с количеством
        return [...prevItems, { ...product }];
      }
    });
  };

  // Удаление товара по id
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Обновление количества товара в корзине
  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/products1/:id" 
          element={<ProductsPage1 data={data} addToCart={addToCart} />} 
        />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route 
          path="/users" 
          element={
            <Users 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          } 
        />
      </Routes>
    </>
  );
}

export default App;

