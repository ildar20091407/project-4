import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import s from './ProductPage.module.scss';
import { data } from '../../store/users/usersSlice1';

function ProductsPage1({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find(item => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const links = [
    { title: 'Продукты', url: '/products' },
  ];

  if (!product) {
    return <p>Товар не найден</p>;
  }

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div>
      <div className={s.container}>
        <button 
          className={s.backButton} 
          onClick={() => navigate(-1)}
        >
          Назад
        </button>

        <div className={s.main__bottom_item_title}>{product.title}</div>
        <div className={s.box}>
          <div className={s.box__right}>
            <div className={s.main__bottom_item_img}>
              <img src={product.img} alt={product.title} />
            <label>
              Количество: 
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange} 
                style={{width: '50px', marginLeft: '8px'}}
              />
            </label>

            <button onClick={handleAddToCart} style={{marginLeft: '10px'}}>
              Добавить в корзину
            </button>
            </div>
          </div> 
          <div className={s.box__left}>
            <div className={s.main__bottom_item_text}>{product.text2}</div>
            <p className={s.rating}>Рейтинг: {product.rating}</p>

            <ul className="nav__list">
              {links.map((link, i) => (
                <li key={i}>
                  <Link to={link.url} className="nav__link">{link.title}</Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage1;
