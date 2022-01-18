import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import HeroBg from './components/hero_bg';
import NavBar from './components/navbar';
import DummyText from './components/dummy_text';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <HeroBg />
      <DummyText/>
    </React.Fragment>
  );
}

export default App;
