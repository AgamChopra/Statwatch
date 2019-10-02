import React, { Component } from 'react';
import MainLayout from './layout/MainLayout';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    );
  }
}

export default App;
