import logo from './logo.svg';
import './App.css';
import Header from './header';
import Slider from './slider';
import React from 'react';
import Menu from './menu';
import Product from './product';
function App() {
  return (
    <React.Fragment>
       <Header />
       <Slider />  
       <Menu />
       <Product />
    </React.Fragment>
 
  );
}

export default App;
