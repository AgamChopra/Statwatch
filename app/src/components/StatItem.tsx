import React, { Component } from 'react';
import Stat from '../models/Stat';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
interface StatItemProps {
  stat: Stat;
}

class StatItem extends Component<StatItemProps> {
  render() {
    const { stat } = this.props;
    return (
      <div>
        <Card style={{ margin: '0 2px', pos: 'marginBottom: 12', display: 'inline-block' }}>
          <CardContent>
            <Typography style={{ right: '0 px' }} variant="h2" color="textPrimary" gutterBottom align="left">
              {stat.Btag}
            </Typography>
            <Typography variant="h3" color="textSecondary" gutterBottom align="left">
              Rank: {stat.rank}
            </Typography>
            <Typography variant="h4" gutterBottom align="left">
              Heroes:
            </Typography>
            <Typography variant="h5" gutterBottom align="left">
              Dps: {stat.dps} healers: {stat.heal} tanks: {stat.tank}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default StatItem;
