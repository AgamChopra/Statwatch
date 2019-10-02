import React from 'react';
import StatwatchApi from '../api/Statwatch';
import MockApi from '../api/MockApi';
import StatList from '../components/StatList';
import NavigationBar from '../components/NavigationBar';
import {
  Theme,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
    }
  })
);

export default function App() {
  const api: StatwatchApi = new MockApi;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavigationBar />
      <StatList stats={api.getStats()} />
    </div>
  );
}

