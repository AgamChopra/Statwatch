import React, { Component } from 'react';
import Stat from '../models/Stat';

interface BookItemProps {
  stat: Stat;
}

class BookItem extends Component<BookItemProps> {
  render() {
    const { stat } = this.props;
    return (
      <div>
        <h1>
          { stat.title }
        </h1>
        <img src = {stat.thumbnail} alt = "thumbnail"/>
        <h2>
          { stat.edition } by { stat.author }
        </h2>
      </div>
    );
  }
}

export default StatItem;
