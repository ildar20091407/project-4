import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductsPage1 from "./components/ProductsId/ProductsPage1";
import FavoritesPage from "./components/favourites/Favorites";
import Contacts from "./components/contacts/Contacts";
import Conditions from "./components/conditions/Conditions";

import Users from "./pages/Users";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Добавление товара в корзину с учётом количества
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id);
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
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Обновление количества товара в корзине
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Calculate the total value of the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="/products/:id" // Changed path for clarity
            element={<ProductsPage1 addToCart={addToCart} />}
          />
          <Route
            path="/favourites" // Changed path for clarity
            element={<FavoritesPage/>}
          />
          <Route
            path="/contacts" // Changed path for clarity
            element={<Contacts></Contacts>}
          />
          <Route
            path="/conditions" // Changed path for clarity
            element={<Conditions/>}
          />

          <Route
            path="/card"
            element={
              <Users
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                total={calculateTotal()}
              />
            }
          />
        </Routes>
      </>

  );
}

export default App;




