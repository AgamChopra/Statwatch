import React, { Component } from 'react';
import Stat from '../models/Stat';
import StatItem from './StatItem';

interface StatListProps {
  stats: Stat[];
}

class StatList extends Component <StatListProps> {
  render() {
    return (
      this.props.stats.map(stat => {
        return (
          <StatItem stat={stat} />
        );
      })
    );
  }
}

export default StatList;
