import Footer from "../components/footer/Footer";
import HeadPhones2 from "../components/Headphones copy/Headphones2";
import HeadPhones from "../components/Headphones/Headphones";
import Phones from "../components/Phones/Phones";
import './Products.scss'

const Products = () => {
  return (
    <>
      <main className="main__bottom">
        <div className="container">

        <div className="main__top-title">
          <nav className="nav">
            <ul className="products__list nav__list">
              <li className="products__nav-link nav__link">
                <Phones /> {/* Render the Phones component here */}
              </li>
              <li className="products__nav-link nav__link">
                Наушники
                <HeadPhones/>
              </li>
              <li className="products__nav-link nav__link">
                 Беспроводные наушники
                <HeadPhones2/>
              </li>
            </ul>
          </nav>
          <Footer/>
        </div>
        </div>
      </main>
    </>
  );
};

export default Products;
