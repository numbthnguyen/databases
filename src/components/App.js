import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          NO FAP ZONE LIVES ON
        </p>
        <div className='col-10'>
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
