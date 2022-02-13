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

const pathname = elementPath();

function App() {
  const homeApRef = useRef(null);
  const remApRef = useRef(null);
  const catApRef = useRef(null);
  const brandApRef = useRef(null);
  const footApRef = useRef(null);

  const homeApFunc = () => homeApRef.current.scrollIntoView();
  const remApFunc = () => remApRef.current.scrollIntoView();
  const catApFunc = () => catApRef.current.scrollIntoView();
  const brandApFunc = () => brandApRef.current.scrollIntoView();
  const footApFunc = () => footApRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <NavBar
        navHome={homeApFunc}
        navRem={remApFunc}
        navCat={catApFunc}
        navBrand={brandApFunc}
        navFoot={footApFunc}
      />
      {
        pathname.breadcrumb === 'breadcrumb'
            ?   <BreadProd
                    upGreen={`VEDETI ${pathname.type} DIN`}
                    downWhite={`CATEGORIA: ${spacePath(pathname.category)}`}
                />
            :   []
      }
      {
        pathname.type === 'PRODUSE'
        ? <Products />
        : []
      }
      {
        pathname.type === 'PRODUS'
        ? <ProductDetail />
        : []
      }
      {
        pathname.type === 'ARTICOLE'
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
      <Categories 
        url = 'http://127.0.0.1:8000/nut_app/categories/'
        catRef={catApRef}
        first_title = 'CATEGORII'
        second_title = 'PRODUSE'
        text = 'Accesati una din categorii pentru a vedea produsele'
      />
      <Remedies />
      <Categories 
        url = 'http://127.0.0.1:8000/nut_app/articlecollections/'
        catRef={remApRef}
        first_title = 'CATEGORII'
        second_title = 'ARTICOLE'
        text = 'Accesati una din categorii pentru a vedea articolele'
      />
      <Brands brandRef={brandApRef}/>
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
