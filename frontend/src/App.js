import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import React from 'react';
import HeroBg from './components/hero_bg';
import NavBar from './components/navbar';
import DummyText from './components/dummy_text';
import { useRef } from 'react';
import SupportLent from './components/support';
import Footer from './components/footer';

function App() {
  const myRef = useRef(null);
  const myRefFunc = () => myRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <NavBar myNavFunc={myRefFunc}/>
      <HeroBg />
      <SupportLent />
      <DummyText myTest={myRef}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
