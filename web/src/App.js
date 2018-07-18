import React, { Component } from 'react';
import { Navigation } from './components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GoCryptoTrader</h1>
        </header>
        <p className="App-intro">
          GoCryptoTrader is a crypto trading bot with back testing support and
          support for a bunch of popular exchanges.
        </p>
        <Navigation />
      </div>
    );
  }
}

export default App;
