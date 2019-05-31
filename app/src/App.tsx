import React, { Component } from 'react';
import './App.css';
import StatwatchApi from './api/Statwatch';
import MockApi from './api/MockApi';
import StatList from './components/StatList';

class App extends Component {
  private api: StatwatchApi = new MockApi;

  render() {
    return (
      <div className="App">
        <StatList stats={this.api.getStats()}/>
      </div>
    );
  }
}

export default App;
