import React from 'react';
import Stat from '../models/Stat';
import StatItem from './StatItem';
import {
  Grow,
  Theme,
  makeStyles,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(3),
    }
  })
);

interface StatListProps {
  stats: Stat[];
}

export default function StatList(props: StatListProps) {
  const classes = useStyles();
  const { stats } = props;
  return (
    <Container
      className={classes.root}
      maxWidth="md">
      { stats.map((stat, index) => (
        <Grow in={true} timeout={200*index}>
          <StatItem stat={stat} />
        </Grow>))}
    </Container>
  );
}
