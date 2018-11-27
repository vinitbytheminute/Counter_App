import React, {Component} from 'react';
import Counter from './Counter';

export default class Counters extends Component {


  render() {
    return (
      <div>
      { this.props.values.map(tot => (
        <Counter key={tot.id} tot= {tot} onIncrement = {this.props.onIncrement} onDelete={this.props.onDelete}>
          <h1> Component Value </h1>
        </Counter>
    ))}
    </div>
  );
  }
}
