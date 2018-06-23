import React, { Component } from 'react';
import Header from './Header.js';
import Chat from './Chat.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <div className="container">
          <Chat/>
        </div>
      </div>
    );
  }
}

export default App;
