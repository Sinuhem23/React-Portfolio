import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/PortfolioSection';
import LandingPG from './components/LandingPG';
import Quote from './components/QuoteSection';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import './components/QuoteSection/quote.css';
import './components/Home/home.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <LandingPG />
        <Quote />
        <Portfolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
