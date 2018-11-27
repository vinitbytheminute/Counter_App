import React, { Component } from 'react';

import './App.css';
import Counters from './Components/Counters';

class App extends Component {
  state = {
    values: [
    {value:0, id:1},
    {value:3, id:2},
    {value:0, id:3},
    {value:0, id:4},
  ]
  };

  handleDelete = tot => {
    let values= this.state.values.filter(v => v.id !== tot.id);
    this.setState({values:values});
  };

//Inefficient code, we need index passed to avoid long run time
  handleIncrement = tot => {
    const values= [...this.state.values];
    const index = values.indexOf(tot);
    values[index]={...tot};
    values[index].value++;
    this.setState({values});
  };

  render() {
    return (
      <div className="App">
        <Counters values = {this.state.values} onIncrement = {this.handleIncrement} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
