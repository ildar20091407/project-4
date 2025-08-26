import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Phone.module.scss';
import phone from '../../assets/images/iPhone-13-Pro-Max-silver-1000x1000 1.png';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/users/usersSlice';
import { useTranslation } from "react-i18next";
import Swiper from 'swiper/bundle';  // Import Swiper
import 'swiper/css/bundle';         // Import Swiper styles

function Phones() {
  const data = useSelector(usersSelector);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const swiperRef = useRef(null); // Create a ref for Swiper instance

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);

  useEffect(() => {
    let swiperInstance = null;

    const initializeSwiper = () => {
      if (isMobile && !swiperInstance) {
        swiperInstance = new Swiper(swiperRef.current, {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      } else if (!isMobile && swiperInstance) {
        swiperInstance.destroy();
        swiperInstance = null;
      }
    };

    initializeSwiper();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 320);
      initializeSwiper();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [isMobile]);



  if (!Array.isArray(data)) {
    return <p>Ошибка: Ожидается массив данных.</p>;
  }

  const filteredProducts = data.filter(item => item.id >= 1 && item.id <= 3);

  const handleButtonClick = (itemId) => {
    navigate(`/products/${itemId}`); // Corrected route
  };

  return (
    <>
      <div className="bottom">
        <div className="bottom__box">
          <p className="bottom__box-text">{t("Аксессуары для Iphone 13 Pro Max")}</p>
          <img src={phone} alt="iPhone 13 Pro Max" />
        </div>
      </div>
      <p className="products__nav-link">
        {t("Чехлы")}
      </p>

      {isMobile ? (
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {filteredProducts.map(item => (
              <div className="swiper-slide" key={item.id}>
                <button onClick={() => handleButtonClick(item.id)} className={s.btn}>
                  <div className={s.main__bottom_item}>
                    <div className={s.main__bottom_item_img}>
                      <img src={item.img} alt={item.title} />
                      <div className={s.main__bottom_item_title}>{t(item.title)}</div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      ) : (
        <div className={s.main__bottom_items}>
          {filteredProducts.map(item => (
            <button key={item.id} onClick={() => handleButtonClick(item.id)} className={s.btn}>
              <div className={s.main__bottom_item}>
                <div className={s.main__bottom_item_img}>
                  <img src={item.img} alt={item.title} />
                  <div className={s.main__bottom_item_title}>{t(item.title)}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Phones;
