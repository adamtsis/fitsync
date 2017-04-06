import React, { Component } from 'react';
import './App.css';
import FitStoreGrid from './components/FitStoreGrid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to fitsync</h2>
        </div>
        <FitStoreGrid/>
      </div>
    );
  }
}

export default App;
