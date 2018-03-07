import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Flash Cards React</h1>
        </header>
        <p className="App-intro">
Flash Cards!        </p>
        <body class="background center">
          <div class="flip3d">
            <div class="back">webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.</div>
            <div class="front">What is Webpack?</div>
          </div>
          <div class="flip3d">
            <div class="back">yarn add webpack-dev-server --dev</div>
            <div class="front">How do you add a webpack server?</div>
          </div>
          <div class="flip3d">
            <div class="back">Rest parameters allow you to accept an infinite number of arguments.  Rest params are indicated by using 3 dots and a name.</div>
            <div class="front">What is a rest param?</div>
          </div>
          <br />
          </body>
      </div>
    );
  }
}

export default App;
