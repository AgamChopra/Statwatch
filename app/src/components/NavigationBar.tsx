import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </AppBar>
      </div>
    );
  }
}

export default NavigationBar;
