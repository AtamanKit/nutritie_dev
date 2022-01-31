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
import Remedies_feat from './components/remedies_feat'
// import ClassFetch from './components/class_fetch';

function App() {
  // const myRef = useRef(null);
  const catApRef = useRef(null);
  const remApRef = useRef(null);
  const footApRef = useRef(null);

  const homeApFunc = () => window.scrollTo(0, 0);
  const catApFunc = () => catApRef.current.scrollIntoView();
  const remApFunc = () => remApRef.current.scrollIntoView();
  const footApFunc = () => footApRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <NavBar
        navHome={homeApFunc}
        navCat={catApFunc}
        navRem={remApFunc}
        navFoot={footApFunc}
      />
      <HeroBg />
      <SupportLent />
      <Categories catRef={catApRef}/>
      <Remedies_feat remRef={remApRef}/>
      <Footer 
        footHome={homeApFunc}
        footRef={footApRef}/>
      {/* <ClassFetch /> */}
    </React.Fragment>
  );
}

export default App;
