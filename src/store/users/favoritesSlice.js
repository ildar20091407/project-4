// src/store/favorites/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of favorite item objects
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload; // Полный объект товара
      const existingIndex = state.items.findIndex(favItem => favItem.id === item.id);

      if (existingIndex >= 0) {
        // Уже в избранном, удаляем
        state.items.splice(existingIndex, 1);
      } else {
        // Добавляем в избранное
        state.items.push(item);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavoriteItems = state => state.favorites.items;
export default favoritesSlice.reducer;
