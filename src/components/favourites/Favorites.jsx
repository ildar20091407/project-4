import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavoriteItems } from '../../store/users/favoritesSlice'; // Correct import path!
import s from './Favorites.module.scss';
import Footer from '../footer/Footer';

function FavoritesPage() {
  const favoriteItems = useSelector(selectFavoriteItems); // Get favorite items from Redux

  if (favoriteItems.length === 0) {
    return <div className={s.noFavorites}>No favorite items yet!</div>;
  }

  return (
    <div className={s.favoritesContainer}>
      <h1>My Favorites</h1>
      <div className={s.favoritesGrid}>
        {favoriteItems.map(item => (
          <div key={item.id} className={s.favoriteItem}>
            <Link to={`/products/${item.id}`}> {/* Corrected the Link component! */}
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
            <p>Price: {item.price} T</p>
            {/* Add other relevant item details here */}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;



