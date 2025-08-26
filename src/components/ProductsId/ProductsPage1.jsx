
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './ProductPage.module.scss';
import { usersSelector } from '../../store/users/usersSlice';


function ProductsPage1({ addToCart }) {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const data = useSelector(usersSelector);
  const product = data.find(item => item.id === productId);

  // New: State for the "favorite" button


  if (!product) {
    return <p>Товар не найден</p>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    alert("Вы добавили " + product.title + " размере " + 1);
  };

  // New: Function to toggle "favorite" state


  return (
    <div className='container'>
      <div className={s.productDetail}>
        <div className={s.class}>
          <div className={s.details}>
            <img src={product.img} alt={product.title} className={s.productImage} />
          </div>

          <div className={s.imgContainer}>
            <h2 className={s.productTitle}>{product.title}</h2>
            <div className={s.text}>
              <div className={s.price}>
                <div className={s.first}>
                  <p className={s.productStockWithDiscount}>
                    {Math.floor(product.price) - ((product.price / 100) * Math.floor(product.descount))}T
                  </p>
                  <p className={s.productPrice}>{product.price}T</p>
                </div>
                <p className={s.producDiscount}> {Math.floor(product.descount)}%</p>
              </div>
              <div className={s.raiting__box}>

                <p className={s.raiting__box_text}>{product.raiting}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={s.box}>
        <div className={s.box2}>
          <h2 className={s.description__title}>Описание и характеристики</h2>
          <div className={s.description__text}>
            <ul>
              <li>Активное шумоподавление: Нет</li>
              <li>Вес: 10 гр</li>
              <li>Влагозащита: Нет</li>
              <li>Длина кабеля: 1.2 м</li>
              <li>Комплектация: Наушники</li>
              <li>Материал корпуса: Пластик, резина</li>
              <li>Микрофон: Да</li>
              <li>Назначение: Проводные наушники</li>
              <li>Ответить/закончить разговор: Да</li>
              <li>Разъем наушников: Lightning</li>
              <li>Регулятор громкости: Да</li>
              <li>Тип крепления: Без крепления</li>
              <li>Тип наушников: Вкладыши (таблетки)</li>
              <li>Тип подключения: Проводное</li>
              <li>Частотный диапазон: 20 Гц - 20000 Гц</li>
              <li>Чувствительность: 109 дБ</li>
            </ul>
          </div>
        </div>
        <div className={s.center}>
          <div className={s.buttons}>
            <div className={s.item__box}>
              <button onClick={handleAddToCart} className={s.item}>
                Купить
              </button>
            </div>

            <div className={s.item}>
              <button onClick={handleAddToCart} className={s.item}>
                Добавить в корзину
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage1;
