import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import HeroBg from './components/hero_bg';
import NavBar from './components/navbar';
import { useRef } from 'react';
import SupportLent from './components/support';
import Categories from './components/categories';
import Footer from './components/footer';
import Remedies from './components/remedies';
import Brands from './components/brands';
import Products from './components/products';
import ProductDetail from './components/product_detail';
import RemedyDetail from './components/remedy_detail';
import Articles from './components/articles';
import { elementPath, spacePath } from './components/utils';
import BreadProd from './components/bread_prod';
import Search from './components/search';
import SectionTitle from './components/section_title';
import Cart from './components/cart';

const pathname = elementPath();

function App() {
  const homeApRef = useRef(null);
  const remApRef = useRef(null);
  const catApRef = useRef(null);
  const brandApRef = useRef(null);
  const cartApRef = useRef(null);
  const footApRef = useRef(null);

  const homeApFunc = () => homeApRef.current.scrollIntoView();
  const remApFunc = () => remApRef.current.scrollIntoView();
  const catApFunc = () => catApRef.current.scrollIntoView();
  const brandApFunc = () => brandApRef.current.scrollIntoView();
  const cartApFunc = () => cartApRef.current.scrollIntoView();
  const footApFunc = () => footApRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <NavBar
        navHome={homeApFunc}
        navRem={remApFunc}
        navCat={catApFunc}
        navBrand={brandApFunc}
        navCart={cartApFunc}
        navFoot={footApFunc}
      />
      {
        pathname.breadcrumb === 'breadcrumb'
            ?   <BreadProd
                    upGreen={`VEDETI ${pathname.type} DIN`}
                    downWhite={`RUBRICA: ${spacePath(pathname.category)}`}
                />
            :   []
      }
      {
        pathname.type === 'PRODUSE' && pathname.category === 'CAUTATI'
        ? <Search
            table = 'products'
            type = 'PRODUS'
          />
        : []
      }
      {
        pathname.type === 'ARTICOLE' && pathname.category === 'CAUTATI'
        ? <Search 
            table = 'remedies'
            type = 'ARTICOL'
          />
        : []
      }
      {
        pathname.type === 'PRODUSE' && pathname.category !== 'CAUTATI'
        ? <Products />
        : []
      }
      {
        pathname.type === 'PRODUS'
        ? <ProductDetail />
        : []
      }
      {
        pathname.type === 'ARTICOLE' && pathname.category !== 'CAUTATI'
        ? <Articles />
        : []
      }
      {
        pathname.type === 'ARTICOL'
        ? <RemedyDetail/>
        : []
      }
      <HeroBg homeRef={homeApRef}/>
      <SupportLent />
      <SectionTitle 
        _ref={catApRef}
        first_title = 'CATEGORII'
        second_title = 'PRODUSE'
        text = 'Accesati una din categorii pentru a vedea produsele'
      />
      <Categories 
        url = 'http://127.0.0.1:8000/nut_app/categories/'
        type = 'PRODUSE'
      />
      <SectionTitle 
        // _ref={remApRef}
        first_title = 'RECOMANDARI'
        second_title = 'SI REMEDII'
        text = 'Venim cu unele sfaturi'
      />
      <Remedies />
      <SectionTitle 
        _ref={cartApRef}
        first_title = 'PRODUSE IN'
        second_title = 'COS'
        text = 'Accesati una din categorii pentru a vedea articolele'
      />
      <Cart />
      <SectionTitle 
        _ref={remApRef}
        first_title = 'CATEGORII'
        second_title = 'ARTICOLE'
        text = 'Accesati una din categorii pentru a vedea articolele'
      />
      <Categories 
        url = 'http://127.0.0.1:8000/nut_app/articlecollections/'
        type = 'ARTICOLE'
      />
      <SectionTitle 
        _ref={brandApRef}
        first_title = 'BRANDURI'
        // second_title = 'URI'
        text = 'Producatori cu care colaboram'
      />
      <Brands />
      <Footer
        footRef={footApRef} 
        footHome={homeApFunc}
        footRem={remApFunc}
        footCat={catApFunc}
      />
    </React.Fragment>
  );

}

export default App;
