import React from 'react';
import s from './Users.module.scss';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import bin from '../assets/images/Illustration.png'

const Users = ({ cartItems, updateQuantity}) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleIncrementQuantity = (id) => {
        updateQuantity(id, (cartItems.find(item => item.id === id)?.quantity || 0) + 1);
    };

    const handleDecrementQuantity = (id) => {
        const currentQuantity = cartItems.find(item => item.id === id)?.quantity || 0;
        if (currentQuantity > 1) {
            updateQuantity(id, currentQuantity - 1);
        }
    };

    return (
        <div className="container">
            <h2>Корзина</h2>
{cartItems.length === 0 ? (
  <div className="empty-cart">
    <img src={bin} className="empty-cart__image" alt="Empty Cart" /> {/* Added alt attribute for accessibility */}
    <h2 className="empty-cart__title">Корзина пуста</h2>
    <p className="empty-cart__subtitle">{`Но это никогда не поздно исправить :)`}</p> {/* Corrected the string */}
    <Link to="/" className="products__nav_link">В каталог товаров</Link> {/* Removed s. prefix */}
  </div>
) : (

    <>
                <div className={s.flex}>

                    <div className={s.card}>
                        <div className={s.tableWrapper}>
                            {cartItems.map((item) => {
                                return (
                                    <div key={item.id} className={s.good}>
                                        <div className={s.good__box}>
                                            <div className={s.good__box_left}>
                                                <img className={s.good__box_left_img} src={item.img} alt={item.title} />
                                            </div>
                                            <div className={s.good__box_right}>
                                                <p className={s.good__box_right_title}>{item.title}</p>
                                                <p className={s.good__box_right_price}>{item.price} руб.</p>
                                            </div>
                                        </div>
                                        <div className={s.bottom}>
                                            <div className={s.quantityControl}>
                                                <button
                                                    onClick={() => handleDecrementQuantity(item.id)}
                                                    disabled={item.quantity <= 1}
                                                    >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    id={`quantity-${item.id}`}
                                                    min="1"
                                                    value={item.quantity}
                                                    readOnly
                                                    className={s.quantityInput}
                                                    />
                                                <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                                            </div>

                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                                <div className={s.item}>
              <p className={s.item__title}>Доставка</p>
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
                  <p className={s.item__price}> 499 ₸</p>
                </div>
              </div>
                  </div>
             </div>
                        <div className={s.total}>
                            <div className={s.sum}>
                                <p className={s.sum}>Итог: {total} T</p>
                            </div>
                            <div className={s.btn}>
                            </div>
                    <Link to={{ pathname: "/design", state: { total} }} className={s.btn1}>
                      Перйти к оформлению
                    </Link>
               </div>
               </div>
                </>
)}

<Footer/>
</div>
)
}



export default Users;
