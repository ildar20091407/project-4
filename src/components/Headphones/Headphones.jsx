import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Headphones.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from '../../store/users/usersSlice';
import { toggleFavorite, selectFavoriteItems } from '../../store/users/favoritesSlice';
import basic from '../../assets/images/Vector (6).png'
import active from '../../assets/images/Vector (3).png'

function HeadPhones() {
  const data = useSelector(usersSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems); // Get favorite items from Redux

  if (!Array.isArray(data)) {
    return <p>Ошибка: Ожидается массив данных.</p>;
  }

  const filteredProducts = useMemo(() => {
    return data.filter(item => item.id >= 4 && item.id <= 9);
  }, [data]);

  const handleButtonClick = (itemId) => {
    navigate(`/products/${itemId}`);
  };

  const isFavorite = (itemId) => {
    return favoriteItems.some(item => item.id === itemId); // Check if item is in favorites
  };


  return (
    <div className={s.items}>
      {filteredProducts.map(product => (
        <div key={product.id} className={s.item}>
          <button onClick={() => handleButtonClick(product.id)} className={s.btn}>
            <div className={s.item__img}>
              <img src={product.img} alt={product.title} />
            </div>
            <div className={s.item__box}>
              <div className={s.text}>
                <div className={s.productCard}>
                  <h2 className={s.productTitle}>{product.title}</h2>
                  <div className={s.price}>
                    <div className={s.first}>
                      <p className={s.productStockWithDiscount}>
                        {Math.floor(product.price - ((product.price / 100) * Math.floor(product.descount)))}T
                      </p>
                      <p className={s.productPrice}>{product.price}T</p>
                    </div>
                    <p className={s.producDiscount}>-{Math.floor(product.descount)}%</p>
                  </div>
                </div>
                <div className={s.raiting__box}>
                  <p className={s.raiting__box_text}>{product.raiting}</p>
                </div>
              </div>
            </div>
          </button>
          {/* Favorite Button */}
          <button
            className={s.favoriteButton}
            onClick={() => dispatch(toggleFavorite(product))} // Dispatch action to toggle
          >
            {isFavorite(product.id) ? <img src={basic} className={s.favoriteButton}/> : <img src={active} className={s.favoriteButton}/>}
          </button>
        </div>
      ))}
    </div>
  );
}

export default HeadPhones;
