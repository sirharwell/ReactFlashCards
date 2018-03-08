import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashForm from './FlashForm';

class App extends Component {
  state = {
    flashes: [],
  }

  getId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
 return Math.floor((1 + Math.random()) * 0x10000)
   .toString(16)
   .substring(1);
}

  addFlash = (name) => {
  const { flashes } = this.state;
  const flash = { name, id: this.getId(), complete: false }
  this.setState({ flashs: [flash, ...flashes] })
}

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
          </body>
          <br />
          <FlashForm addItem={this.addFlash}/>
      </div>
    );
  }
}



export default App;
