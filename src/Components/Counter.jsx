import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class Counter extends Component {
  styles = {
    fontWeight: 10,
  };

  Valuation () {
    const { value } = this.props.tot;
    return value === 0 ? "Zero" : value;
  };

  Classes () {
    let color = "badge m-2 badge-";
    color += this.props.tot.value ===0 ? "warning" : "primary";
    return color;
  };

  changing
  render() {
    return (
      <React.Fragment>
      {this.props.children}
        <React.Fragment>
          <Button onClick= {() => this.props.onIncrement(this.props.tot)} style= {this.styles} className = {this.Classes()} > {this.Valuation()} </Button>
          <Button onClick= {() => this.props.onDelete(this.props.tot)}>  Delete </Button>
        </React.Fragment>
      </React.Fragment>
    );
  }
}
