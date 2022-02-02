import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import HeroBg from './components/hero_bg';
import NavBar from './components/navbar';
// import DummyText from './components/dummy_text';
import { useRef } from 'react';
import SupportLent from './components/support';
import Categories from './components/categories';
import Footer from './components/footer';
import Remedies from './components/remedies';
import Brands from './components/brands';
import Products from './components/products';

function App() {
  const remApRef = useRef(null);
  const catApRef = useRef(null);
  const brandApRef = useRef(null);
  const footApRef = useRef(null);

  const homeApFunc = () => window.scrollTo(0, 0);
  const remApFunc = () => remApRef.current.scrollIntoView();
  const catApFunc = () => catApRef.current.scrollIntoView();
  const brandApFunc = () => brandApRef.current.scrollIntoView();
  const footApFunc = () => footApRef.current.scrollIntoView();

  if (window.location.pathname === '/') {
    return (
      <React.Fragment>
        <NavBar
          navHome={homeApFunc}
          navRem={remApFunc}
          navCat={catApFunc}
          navBrand={brandApFunc}
          navFoot={footApFunc}
        />
        <HeroBg />
        <SupportLent />
        <Categories catRef={catApRef}/>
        <Remedies remRef={remApRef}/>
        <Brands brandRef={brandApRef}/>
        <Footer
          footRef={footApRef} 
          footHome={homeApFunc}
          footRem={remApFunc}
          footCat={catApFunc}
        />
        {/* <ClassFetch /> */}
      </React.Fragment>
    );
  } else if (window.location.pathname === '/suplimente/') {
    return (
      <React.Fragment>
        <Products />
      </React.Fragment>
    );
  }
}

export default App;
