import { Link } from 'react-router-dom';
import './Navbar.scss';
import likeIcon from '../assets/images/Vector (3).png'; // Или .png, если это другой формат
import cardIcon from '../assets/images/Vector (4).svg'; // Или .png
import logo from '../assets/images/QPICK.png'

const Navbar = () => {
  return (
    <>
    <header className="navbar">
      <div className="container">
        <div className="navbar__box">
          <div className="navbar__box-left">
          <Link to="/" className="navbar__link">
              <button className="navbar__button">
                <img src={logo} alt="Избранное" className="navbar__logo" />
              </button>
            </Link> 
            <select name="phone-model" id="phone-model" className="navbar__select">
              <option value="">Выбрать модель телефона</option>
            </select>
          </div>
          <div className="navbar__box-right">
            <Link to="/favourites" className="navbar__link">
              <button className="navbar__button">
                <img src={likeIcon} alt="Избранное" className="navbar__icon1" />
              </button>
            </Link>
            <Link to="/card" className="navbar__link">
              <button className="navbar__button">
                <img src={cardIcon} alt="Корзина" className="navbar__icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;