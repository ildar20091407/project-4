// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice'; // Correct import path!
import favoritesReducer from './favoritesSlice'; // Import the favorites reducer

const store = configureStore({
  reducer: {
    usersSlice: usersReducer,
    favorites: favoritesReducer, // Register the favorites reducer
  },
});

export default store;

