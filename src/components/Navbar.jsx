import React, { useState } from 'react';
import { Link } from "react-router-dom";
import background from '../assets/images/Rectangle 2.png';
import proweb from '../assets/images/PROWEB.png';
import logoLnguage from '../assets/images/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Use a consistent key
    setLangMenuOpen(false);
  };

  const links = [
    { title: t('Home'), url: '/' },
    { title: t('Products'), url: '/products' },
    { title: t('Cart'), url: '/users' },
  ];

  return (
    <>
      <nav className="nav" > 
        <div className="container">
          <div className="nav__box">
            <div className="nav__right">
              <div className="logo">
                <img src={proweb} className="nav__img" alt="PROWEB Logo" />
              </div>
            </div>
            <div className="nav__left">
              <ul className="nav__list">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url} className="nav__link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="header__nav-list">
                <li className="header__nav-li" style={{ position: 'relative' }}>
                  <img
                    src={logoLnguage}
                    className="header__nav-button"
                    alt="Language selection"
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    style={{ cursor: 'pointer' }}
                  />
                  {langMenuOpen && (
                    <ul className="header__nav-dropdown" style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                      listStyle: 'none',
                      margin: 0,
                      padding: '5px 0',
                      borderRadius: '4px',
                      zIndex: 1000,
                    }}>
                      <li><button onClick={() => changeLang('en')}>En</button></li>
                      <li><button onClick={() => changeLang('ru')}>Ru</button></li>
                      <li><button onClick={() => changeLang('uz')}>Uz</button></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav__bottom">
        <img src={background} className="background" alt="" />
        <div className="nav__botom-box">
          <div className="nav__title">
            <h2 className="title">{t('Welcome')}</h2>
            <div className="form">
              <button className="nav__botom-btn">{t('Call')}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
