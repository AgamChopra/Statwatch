import React, { Component } from 'react';
import Stat from '../models/Stat';

interface StatItemProps {
  stat: Stat;
}

class StatItem extends Component<StatItemProps> {
  render() {
    const { stat } = this.props;
    return (
      <div>
        <h1>
          { stat.Btag }
        </h1>
        rank: { stat.rank }
        <h2>
          Heroes:
        </h2>
        <h2>dps: { stat.dps } healers: { stat.heal } tanks: { stat.tank }</h2>
      </div>
    );
  }
}

export default StatItem;
