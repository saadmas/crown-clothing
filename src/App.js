import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
