import React, { Component } from 'react';
import './App.css';
import StatwatchApi from './api/Statwatch';
import MockApi from './api/MockApi';
import StatList from './components/StatList';
import Button from '@material-ui/core/Button';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  private api: StatwatchApi = new MockApi();

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <StatList stats={this.api.getStats()} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
