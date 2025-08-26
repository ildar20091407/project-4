import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom'; // If you use React Router
import  VkIcon  from '../../assets/images/vk.png'; // Assuming you have SVG icons
import InstagramIcon  from '../../assets/images/instagram.png';
import   Telegramm  from '../../assets/images/Telegram.png';
import  WhatsAppIcon  from '../../assets/images/Whatsapp.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>QPick</div>

      <div className={styles.links}>
        <ul className={styles.list}>
          <li><Link to="/favourites">Избранное</Link></li>
          <li><Link to="/card">Корзина</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </div>

      <div className={styles.service}>
        <ul className={styles.list}>
          <li><Link to="/conditions">Условия сервиса</Link></li>

      <div className={styles.language}>
        <ul>
          <li><a href="#">🌐 Каз</a></li>
          <li><a href="#">Рус</a></li>
          <li><a href="#">Eng</a></li>
        </ul>
      </div>
        </ul>
      </div>

      <div className={styles.social}>
          <a href="#"><img src={VkIcon} className={styles.socialIcon}/></a>
          <a href="#"><img src={InstagramIcon} className={styles.socialIcon} /></a>
          <a href="#"><img src={Telegramm} className={styles.socialIcon}/></a>
          <a href="#"><img src={WhatsAppIcon} className={styles.socialIcon}/></a>
      </div>
    </footer>
  );
};

export default Footer;

