import React, { Component } from 'react';
import logo from '../Resources/logo.svg';
import '../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dsgantivac 1032494203</h1>
        </header>
        <p className="App-intro">
          ctr-alt-elite
        </p>
      </div>
    );
  }
}

export default App;
