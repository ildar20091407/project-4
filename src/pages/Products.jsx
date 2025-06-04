import React, { useState } from 'react';
import ProductsBeer from '../components/ProductsBeer';
import ProductsVino from '../components/ProductsVino';
import ProductsVodka from '../components/ProductsVodka';

const Products = () => {
  // Состояние для выбранной категории
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Функция для выбора категории
  const handleCardClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <main className="main__bottom">
        <div className="main__top-title">
          <p>Мои работы</p>
          <nav className="nav">
            <ul className="products__list nav__list" style={{ display: 'flex', gap: '20px' }}>
              {/* Карточки категорий */}
              <li 
                className="products__nav-link nav__link" 
                style={{ cursor: 'pointer', border: selectedCategory === 'vino' ? '2px solid blue' : '1px solid gray', padding: '10px', borderRadius: '8px' }}
                onClick={() => handleCardClick('vino')}
              >
                Вино
              </li>
              <li 
                className="products__nav-link nav__link" 
                style={{ cursor: 'pointer', border: selectedCategory === 'vodka' ? '2px solid blue' : '1px solid gray', padding: '10px', borderRadius: '8px' }}
                onClick={() => handleCardClick('vodka')}
              >
                Водка
              </li>
              <li 
                className="products__nav-link nav__link" 
                style={{ cursor: 'pointer', border: selectedCategory === 'beer' ? '2px solid blue' : '1px solid gray', padding: '10px', borderRadius: '8px' }}
                onClick={() => handleCardClick('beer')}
              >
                Пиво
              </li>
            </ul>
          </nav>
        </div>
      </main>

      {/* Отображение компонента в зависимости от выбранной категории */}
      <div style={{ marginTop: '20px' }}>
        {selectedCategory === 'vino' && <ProductsVino />}
        {selectedCategory === 'vodka' && <ProductsVodka />}
        {selectedCategory === 'beer' && <ProductsBeer />}
        {!selectedCategory && <p>Выберите категорию, чтобы посмотреть продукты</p>}
      </div>
    </>
  );
};

export default Products;