import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './ProductsBeer.module.scss';
import {data} from '../store/users/usersSlice1'; // укажи правильный путь

function ProductsBeer() {
  const navigate = useNavigate();

  if (!Array.isArray(data)) {
    return <p>Ошибка: Ожидается массив данных.</p>;
  }

  const filteredProducts = data.filter(item => item.id >= 1 && item.id <= 3);

  const handleButtonClick = (itemId) => {
    navigate(`/products1/${itemId}`);
  };

  return (
    <div className={s.main__bottom_items}>
      {filteredProducts.map(item => (
        <div key={item.id} className={s.main__bottom_item}>
          <div className={s.main__bottom_item_title}>{item.title}</div>
          <div className={s.main__bottom_item_img}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className={s.main__bottom_item_text}>{item.text}</div>
          <p className={s.rating}>Рейтинг: {item.rating}</p>
          <button
            className={s.main__bottom_item_btn}
            onClick={() => handleButtonClick(item.id)}
          >
            Посмотреть
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsBeer;


