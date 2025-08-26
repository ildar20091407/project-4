import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProductsPage1 from "./components/ProductsId/ProductsPage1";
import { useSelector } from 'react-redux';
import { usersSelector } from './store/users/usersSlice';
import { selectFavoriteItems } from './store/users/favoritesSlice'; // Corrected Import Path!
import Design from './components/Design/Design';
import Favorites from './components/favourites/Favorites';
import Conditious from './components/conditions/Conditions';
import Contacts from './components/contacts/Contacts';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...product }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const data = useSelector(usersSelector);
  const favorites = useSelector(selectFavoriteItems);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/products/:id"
          element={<ProductsPage1 data={data} addToCart={addToCart} />}
        />

        {/* Передаем данные корзины и функции управления в компонент Design */}
        <Route
          path="/design"
          element={
            <Design
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              total={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} // Передаем total
            />
          }
        />

        <Route path="/" element={<Products />} />
        <Route
          path="/favourites"
          element={<Favorites data={favorites} />}
        />
        <Route
          path="/conditions"
          element={<Conditious/>}
        />
        <Route
          path="/contacts"
          element={<Contacts/>}
        />
        <Route
          path="/card"
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

