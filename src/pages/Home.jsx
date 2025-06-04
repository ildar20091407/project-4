import React from 'react'


import img1 from '../assets/images/akar-icons_facebook-fill.svg'
import img2 from '../assets/images/dashicons_whatsapp.svg'
import img3 from '../assets/images/ic_baseline-email.svg'
import img4 from '../assets/images/ph_instagram-logo-fill.svg'
import img5 from '../assets/images/Vector 3.svg'



const Home = () => {
  return (
    <>

           <main className="main__top">
                       <div className="main__top-title">
                           <p >О нас</p>
                       </div>
                   <div className="container">
                       <div className="main__top-box">

                           <div className="main__top-right">
                               <h2 className="main__top-right-title">Зубенко Михаил Петрович</h2>
                               <p className="main__top-right-text">Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p>
                           </div>
                       </div>
                   </div>
               </main>

           <nav className="footer">
       
           <div className="container">
       <p className="footer__title">Связаться со мной</p>
       <div className="footer__text">
        <div className="footer__top-btn">

       <button className="btn">
           <img src={img1} />
       </button>
       <button className="btn">
           <img src={img2} />
       </button>
       <button className="btn">
           <img src={img3} />
       </button>
        </div>
        <div className="footer__bottom">

       <button className="btn">
           <img src={img4} />
       </button>
       <button className="btn">
           <img src={img5} />
       </button>
        </div>
       </div>
           </div>
           </nav>
    </>
  )
}

export default Home