import React from 'react';
import styles from './Contacts.module.scss';
import  VkIcon  from '../../assets/images/VK.png'; // Assuming you have SVG icons
import InstagramIcon  from '../../assets/images/instagram.png';
import   Telegramm  from '../../assets/images/Telegram.png';
import  WhatsAppIcon  from '../../assets/images/Whatsapp.png';
import Footer from '../footer/Footer';

const Contacts = () => {
  return (
    <div className="container">

  <div className="">
    <div className={styles.map_container}>
      <section className={styles.officeInfo}>
        <h2 className={styles.sectionTitle}>Наш офис</h2>

        {/* Replace with a real map component (e.g., Google Maps React) */}
        <div className={styles.mapPlaceholder}>
          Карта (Здесь нужно вставить компонент карты)
        </div>

        <p className={styles.address}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '5px'}}>
            <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.2289 12 22 12 22C12 22 19 14.2289 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="currentColor"/>
          </svg>
          Аксай-3а, 62б, Алматы, Казахстан
          <br />
          3 этаж, 35 кабинет
        </p>
      </section>
      <section className={styles.social}>
          <a href="#"><img src={VkIcon} className={styles.socialIcon}/></a>
          <a href="#"><img src={InstagramIcon} className={styles.socialIcon} /></a>
          <a href="#"><img src={Telegramm} className={styles.socialIcon}/></a>
          <a href="#"><img src={WhatsAppIcon} className={styles.socialIcon}/></a>
      </section>
  </div>


      <section className={styles.contactDetails}>
        <a href="tel:+77777777777" className={styles.phoneNumber}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '5px'}}>
            <path d="M6.62 10.79c1.44 2.57 3.97 5.1 6.56 6.55l.78-.78c.26-.26.41-.62.41-.99v-2.42c0-.55-.45-.99-.99-.99h-2.42c-.37 0-.73.16-.99.42l-1.2 1.2c-1.95-1.1-3.54-2.69-4.64-4.64l1.2-1.19c.27-.26.43-.61.43-.99V4.59c0-.54-.45-.99-.99-.99H2.55c-.54 0-.99.45-.99.99 0 8.39 6.81 15.21 15.2 15.21.54 0 .99-.45.99-.99v-2.07c0-.54-.45-.99-.99-.99l-.01-.01z" fill="currentColor"/>
          </svg>
          +7 777 777 77 77
        </a>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Contacts;
