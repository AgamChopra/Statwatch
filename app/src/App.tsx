import React, { Component } from 'react';
import './App.css';
import StatwatchApi from './api/Statwatch';
import MockApi from './api/MockApi';
import StatList from './components/StatList';
import Button from '@material-ui/core/Button';
import NavigationBar from './components/NavigationBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
class App extends Component {
  private api: StatwatchApi = new MockApi();

  render() {
    return (
      <Container maxWidth="md">
        <Typography component="div" style={{ position: 'absolute', top: '80px', backgroundColor: '#cfe8fc' }}>
          <div className="App">
            <NavigationBar />
            <StatList stats={this.api.getStats()} />
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          </div>
        </Typography>
      </Container>
    );
  }
}

export default App;
