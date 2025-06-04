import React from 'react';
import s from './Users.module.scss';

const Users = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, e) => {
    const value = Number(e.target.value);
    if (value >= 1) {
      updateQuantity(id, value);
    }
  };

  return (
    <div className="border p-2 w-64">
      <h2 className="text-xl font-semibold mb-2">Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div className={s.tableWrapper}>
          <table className={s.cartTable}>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Изображение</th>
                <th>Цена, руб.</th>
                <th>Количество</th>
                <th>Сумма, руб.</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((data) => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>
                    <img src={data.img} alt={data.title} />
                  </td>
                  <td>{data.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={data.quantity}
                      onChange={(e) => handleQuantityChange(data.id, e)}
                    />
                  </td>
                  <td>{data.price * data.quantity}</td>
                  <td>
                    <button
                      onClick={() => removeFromCart(data.id)}
                      title="Удалить товар"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className={s.total}>Итого: {total} руб.</p>
    </div>
  );
};

export default Users;


