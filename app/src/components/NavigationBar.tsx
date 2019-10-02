import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Theme,
  makeStyles,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Overwatch Stat Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
