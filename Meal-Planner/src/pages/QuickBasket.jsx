import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShoppingPage from '../components/ShoppingPage';
import CartPage from './CartPage';
import { CartProvider } from '../components/CartContext';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function QuickBasket() {
  return (
    <>
    <Navbar/>
    <ShoppingPage/>
   </>
        
  );
}

export default QuickBasket;
