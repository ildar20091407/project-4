import React, { useState } from 'react';
import s from './Design.module.scss'; // Replace with your actual CSS Module path
import Footer from '../footer/Footer';

const Design = ({ cartItems, total }) => { // Receive cartItems and total as props
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [entrance, setEntrance] = useState('');
    const [apartment, setApartment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation
        // Call API to submit order
        // Handle success/error
    };
  const [isFavorite, setIsFavorite] = useState(false);
    const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };         
     <div className={s.item}>

              <button
                onClick={handleToggleFavorite}
                className={`${s.item} ${isFavorite ? s.favoriteActive : ''}`}
                >
                {isFavorite ? 'В избранном' : 'Добавить в избранное'}
              </button>
                </div>
    return (
        <>
        <div className="container">
            
                        <h3>Оформление заказа</h3>
                <div className={s.flex}>
                    <div className={s.left}>
                        <div className={s.checkout__address}>
                            <div className={s.mapContainer}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3823399717476!2d69.25897184115442!3d41.32229867142759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b15234bd621%3A0xb17c871fbdd0b36a!2z0KTQtdC00LXRgNCw0YbQuNGPINCU0JfQriDQlNCeINCYIFdCUEYgVVpC!5e0!3m2!1sru!2s!4v1728200162494!5m2!1sru!2s"
                                    borderRadius="10px"
                                    width="544"
                                    height="173"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                />
                                <div className={s.item__bottom}>
                                    <p className={s.item__text}>Доставка курьером</p>
                                </div>
                            </div>
                            <div className={s.checkout__input_wrapper}>

                                <select
                                    id="city"
                                    className={s.checkout__select}
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="">Выберите город</option>
                                    <option value="tashkent">Ташкент</option>
                                    {/* Add other city options */}
                                </select>
                            </div>
                            <div className={s.checkout__input_wrapper}>

                                <input
                                    type="text"
                                    id="street"
                                    placeholder="Улица / Район"
                                    className={s.checkout__input}
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <span className={s.checkout__input_icon}>✏️</span>
                            </div>
                            <div className={s.checkout__input_group}>
                                <div className={s.checkout__input_wrapper}>

                                    <input
                                        type="text"
                                        id="house"
                                        placeholder="Дом"
                                        className={s.checkout__input}
                                        value={house}
                                        onChange={(e) => setHouse(e.target.value)}
                                    />
                                    <span className={s.checkout__input_icons}>✏️</span>
                                </div>
                                <div className={s.checkout__input_wrapper}>

                                    <input
                                        type="text"
                                        id="entrance"
                                        placeholder="Подъезд"
                                        className={s.checkout__input}
                                        value={entrance}
                                        onChange={(e) => setEntrance(e.target.value)}
                                    />
                                    <span className={s.checkout__input_icon}>✏️</span>
                                </div>
                            </div>
                            <div className={s.checkout__input_wrapper}>

                                <input
                                    type="text"
                                    id="apartment"
                                    placeholder="Квартира"
                                    className={s.checkout__input}
                                    value={apartment}
                                    onChange={(e) => setApartment(e.target.value)}
                                />
                                <span className={s.checkout__input_icon}>✏️</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.checkout__order_summary}>
                            <h3>Ваш заказ</h3>
                            {cartItems && cartItems.map((item) => (
                                <div key={item.id} className={s.checkout__order_item}>
                                    <p>{item.title}</p>
                                    <span>T {item.price * item.quantity}</span>
                                </div>
                            ))}
                            <div className={s.checkout__order_item}>
                                <span>Доставка</span>
                                <span>T 499</span>
                            </div>
                            <div className={s.checkout__order_item}>
                                <span>К оплате</span>
                                <span>T {total}</span>
                            </div>
                        </div>

                        <div className={s.checkout__payment}>
                            <h3>Способ оплаты</h3>
                             <button className={s.checkout__payment_method}>
                                <span> Счет на kaspi.kz</span>

                            </button>
                            <button className={s.checkout__promo_code}>
                                <span> Есть промокод?</span>

                            </button>
                        </div>

                        <div className={s.checkout__phone_number}>
                            <h3>Номер получателя</h3>
                            <div className={s.checkout__input_wrapper}>
                                <label htmlFor="phoneNumber" className="visually-hidden">Номер телефона</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="+7 ____"
                                    className={s.checkout__input}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <span className={s.checkout__input_icon}>✏️</span>
                            </div>
                        </div>

                        <button className={s.checkout__submit} onClick={handleSubmit}>
                            Закончить оформление
                        </button>
                    </div>
                </div>
                <Footer/>
                </div>
            </>
    );
};

export default Design;