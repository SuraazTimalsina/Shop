import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Productlist from './components/ProductList';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <Switch>
        <Route path="/Details" component={Details}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/" component={Productlist}/>
        <Route component={Default}/>
        </Switch>
        <Modal/>
    </React.Fragment>
  );
}

export default App;
