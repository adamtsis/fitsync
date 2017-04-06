import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import FitStoreGrid from './components/FitStoreGrid.js'
import RootReducer from './reducer'

const store = createStore(RootReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to fitsync</h2>
        </div>
        <FitStoreGrid integrations={store.getState()}/>
      </div>
    );
  }
}

export default App;
