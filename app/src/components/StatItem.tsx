import React, { CSSProperties } from 'react';
import Stat from '../models/Stat';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grow,
  makeStyles,
  Theme,
  CardMedia,
} from '@material-ui/core';
import { FlexDirectionProperty } from 'csstype';

interface StatItemProps {
  stat: Stat;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row' as FlexDirectionProperty,
  },
  logoContainer: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 64,
    height: 64,
    backgroundSize: undefined,
  },
  roles: {
    display: 'flex',
    flexDirection: 'column' as FlexDirectionProperty,
  }
})
);

export default function StatItem(props: StatItemProps) {
  const classes = useStyles();
  const { stat } = props;
  return (
    <Card className={classes.root}>
      <div className={classes.logoContainer}>
        <CardMedia
          className={classes.logo}
          image="https://static.playoverwatch.com/img/logos/logo--overwatch-7d38f33606.svg"
          title="Overwatch Logo"
        />
      </div>
      <div>
        <CardHeader
          title={stat.Btag}
        />
        <CardContent>
          <Typography variant="body1">
            <strong>Rank:</strong> {stat.rank}
          </Typography>
          <br/>
          <Typography variant="body1">
            <strong>Heroes:</strong>
          </Typography>
          <div className={classes.roles}>
            <Typography variant="body1">
              <strong>Dps: </strong> {stat.dps}
            </Typography>
            <Typography variant="body1">
              <strong>Healer(s): </strong> {stat.heal}
            </Typography>
            <Typography variant="body1">
              <strong>Tank(s): </strong> {stat.tank}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
