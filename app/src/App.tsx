import React, { Component } from 'react';
import './App.css';
import BookBorrowApi from './api/BookBorrowApi';
import MockApi from './api/MockApi';
import StatList from './components/StatList';

class App extends Component {
  private api: BookBorrowApi = new MockApi;

  render() {
    return (
      <div className="App">
        <StatList stats={this.api.getBooks()}/>
      </div>
    );
  }
}

export default App;
